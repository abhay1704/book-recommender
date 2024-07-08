const URL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = "AIzaSyCEPuCpP9wRZ6zmaA6EIQJzY8zOT5Eyhsg";
const API_KEY_MOCKUP = "5aab411c-74db-45bf-8afc-70c5aec1e534";
const BGREMOVER = "http://127.0.0.1:5000/remove_bg";
const AUTHOR_IMAGE = (id) => `https://covers.openlibrary.org/b/id/${id}-L.jpg`;

let image_3d =
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

const authorBio = document.querySelector("#about-author .content p");
const authorName = document.querySelectorAll(".author-name");
const authorImage = document.querySelector("#author-img img");
const authorUrl = document.querySelector(".author-url");

const bookImages = document.querySelectorAll(".book-img img");

const getData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const getBook = async (query) => {
  const url = `${URL}/?q=${query}&key=${API_KEY}`;
  const searchData = await getData(url);
  const shortInfo = searchData.items[0].searchInfo.textSnippet;
  const bookUrl = searchData.items[0].selfLink;
  const bookData = await getData(bookUrl);

  return {
    title: bookData.volumeInfo.title,
    subtitle: bookData.volumeInfo.subtitle,
    authors: bookData.volumeInfo.authors,
    description: bookData.volumeInfo.description,
    thumbnail: bookData.volumeInfo.imageLinks.thumbnail,
    infoLink: bookData.volumeInfo.infoLink,
    largeImage: bookData.volumeInfo.imageLinks.large,
    rating: bookData.volumeInfo.averageRating,
    buyLink: bookData.saleInfo.buyLink,
    previewLink: bookData.accessInfo?.webReaderLink || "#",
    categories: bookData.volumeInfo.categories.map(
      (x) => x.split("/").slice(-1)[0]
    ),
    shortInfo,
  };
};

const getAuthor = async (author) => {
  const url = `https://openlibrary.org/search/authors.json?q=${author}`;
  const authorResponse = await getData(url);


  const authorKey = authorResponse.docs[0].key;
  const authorUrl = `https://openlibrary.org/authors/${authorKey}.json`;
  const authorData = await getData(authorUrl);

  return {
    name: authorData.name,
    image: authorData.photos ? AUTHOR_IMAGE(authorData.photos[0]) : null,
    bio: authorData.bio,
    url: authorData.links ? authorData.links[0].url : "#",
  };
};

const removeBackground = async (image_url) => {
  const url = BGREMOVER + `?file_path=${image_url}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }

    return data.file_path;
  } catch (error) {
  }
};
/* Mockup API: */

async function renderMockup(image_url) {
  const url = "https://api.mediamodifier.com/v2/mockup/render";
  const width = "";
  const options = {
    method: "POST",
    headers: {
      api_key: API_KEY_MOCKUP,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: '{"nr":1404,"layer_inputs":[{"id":"jujmugkht9uyhlb6sjd","data":"http://books.google.com/books/content?id=FSVTDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","crop":{"x":0,"y":0,"width":128,"height":169},"checked":true},{"id":"jujmugkhplsvkwqyyxg","checked":true,"color":{"red":0,"green":0,"blue":0}}]}',
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }

    const mockupImage = await removeBackground(data.url);
    image_3d = "../" + mockupImage;
    bookImages.forEach((bookImage) => {
      bookImage.src = image_3d;
    });
  } catch (error) {
  }
}

const setWebpageData = (data) => {
  const {
    title,
    subtitle,
    previewLink,
    authors,
    description,
    thumbnail,
    largeImage,
    buyLink,
    categories,
    shortInfo,
  } = data;
  const genre = categories[1];
  const subgenre = categories[0];

  const homeSection = document.getElementById("home-section");
  const descriptionSection = document.getElementById("description");
  const orderLink = document.querySelectorAll(".order-link");
  const previewElement = document.querySelector(".preview-link");
  const userCategories = document.querySelector(".user-categories");
  const genreElements = document.querySelectorAll(".genre");
  const subGenreElements = document.querySelectorAll(".sub-genre");
  const shortInfoElement = document.querySelectorAll(".short-info");

  document.title = `${title} | ${subtitle} | A book by ${authors.join(", ")}`;
  document.querySelectorAll(".b-name").forEach((element) => {
    element.textContent = title;
  });

  document.querySelectorAll(".author-name").forEach((element) => {
    element.textContent = authors.join(", ");
  });

  userCategories.innerHTML = categories.map((x) => `<li>${x}</li>`).join();

  orderLink.forEach((element) => {
    element.href = buyLink;
  });

  previewElement.href = previewLink;
  genreElements.forEach((x) => (x.textContent = genre));
  subGenreElements.forEach((x) => (x.textContent = subgenre));
  descriptionSection.innerHTML = description;

  const image = largeImage || thumbnail;
  document
    .querySelector(":root")
    .style.setProperty("--bg-url", `url(${image})`);

  shortInfoElement.forEach(
    (elem) => (elem.textContent = shortInfo.slice(0, 200) + "...")
  );

  /*

  <iframe frameborder="0" scrolling="no" style="border:0px" src="https://books.google.co.in/books?id=FSVTDwAAQBAJ&lpg=PP1&pg=PP1&output=embed" width=500 height=500></iframe>


  */

  // renderMockup(image);g

  getAuthor(authors[0]).then((authorData) => {
    authorName.forEach((element) => {
      element.textContent = authorData.name;
    });
    if (authorData.image) authorImage.src = authorData.image;

    authorBio.textContent = authorData.bio;
    authorUrl.href = authorData.url;
  });
};

getBook("javascript").then((data) => {
  setWebpageData(data);
});
