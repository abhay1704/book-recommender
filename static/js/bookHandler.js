import { getData, removeBackground } from "./api.js";
import {
  getElement,
  getElements,
  setBookCoverImage,
  setElementText,
} from "./domUtils.js";
import { getAuthor } from "./authorHandler.js";
import { getRecommendations } from "./recommendationHandler.js";
import { API_CONFIG } from "./config.js";
import { renderMockup } from "./mockupHandler.js";
import { handleDataUrl } from "./dataUrlHandler.js";

const { GOOGLE_URL } = API_CONFIG;

const setReccommendations = (reccomends) => {
  const bookList = getElements(".book-list .book");
  Object.entries(reccomends).forEach(([title, detail], i) => {
    const { author, image } = detail;
    bookList[i].querySelector("img").src = image;
    bookList[i].querySelector(".name").textContent = title; // Corrected
    bookList[i].querySelector(".author-name").textContent = author; // Corrected
    const url = `/book?book=${encodeURIComponent(title)}`;
    bookList[i].dataset.url = url;
  });
  handleDataUrl();
};

const setAuthorData = (authors) => {
  getAuthor(authors[0])
    .then((authorData) => {
      console.log(authorData);
      if (authorData.bio === "") {
        getElement("#about-author").style.display = "none";
        return;
      }
      setElementText(".author-name", authorData.name);
      if (authorData.image) {
        const authorImageName = "author_image_" + authorData.name;
        removeBackground(authorData.image, authorImageName).then((res) => {
          getElement("#author-img img").src =
            res["file_path"] ?? authorData.image;
        });
      }
      getElement("#about-author .content p").textContent = authorData.bio;
      getElement(".author-url").href = authorData.url;
    })
    .catch((error) => {
      console.error(error);
      getElement("#about-author").style.display = "none";
    });
};

export const getBook = async (query) => {
  try {
    const url = `${GOOGLE_URL}?q=${query}`;
    const searchData = await getData(url);
    const shortInfo = searchData.items[0].searchInfo?.textSnippet || "";
    const bookUrl = searchData.items[0].selfLink;
    const bookData = await getData(bookUrl);
    let reccomends;

    try {
      reccomends = await getRecommendations(query);
    } catch (error) {
      console.error(error);
      reccomends = null;
    }

    return {
      title: bookData.volumeInfo.title,
      subtitle: bookData.volumeInfo.subtitle,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      thumbnail:
        bookData.volumeInfo.imageLinks?.thumbnail ??
        "https://via.placeholder.com/150",
      infoLink: bookData.volumeInfo.infoLink,
      largeImage: bookData.volumeInfo.imageLinks?.large || null,
      rating: bookData.volumeInfo.averageRating,
      buyLink: bookData.saleInfo.buyLink,
      previewLink:
        bookData.accessInfo?.webReaderLink || "https://books.google.com/",
      categories: bookData.volumeInfo.categories.map(
        (x) => x.split("/").slice(-1)[0]
      ),
      shortInfo,
      reccomends,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const setWebpageData = (data) => {
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
    reccomends,
  } = data;

  const genre = categories[1];
  const subgenre = categories[0];
  const newTitle = `${title} | ${subtitle || ""} | A book by ${authors.join(
    ", "
  )}`;
  const image = largeImage || thumbnail;

  document.title = newTitle;
  setElementText(".b-name", title);
  setElementText(".author-name", authors.join(", "));
  setElementText(".short-info", shortInfo.slice(0, 200) + "...");

  getElement(".user-categories").innerHTML = categories
    .map((x) => `<li>${x}</li>`)
    .join("");

  getElements(".order-link").forEach((element) => (element.href = buyLink));
  getElements(".preview-link").forEach((x) => (x.href = previewLink));
  getElements(".genre").forEach((x) => (x.textContent = genre));
  getElements(".sub-genre").forEach((x) => (x.textContent = subgenre));
  getElement("#description").innerHTML = description;
  setBookCoverImage(thumbnail);

  renderMockup(thumbnail, title);
  setAuthorData(authors);
  if (!reccomends) getElement("#recommended-books").style.display = "none";
  else {
    setReccommendations(reccomends);
  }
  console.log(data);
};

/*
1. Import necessary modules and configurations.
2. Define `setReccommendations` function to update the DOM with book recommendations.
  a. Get all book elements from the DOM.
  b. Iterate over each recommendation and update the corresponding book element with the image, title, author, and a URL-encoded link.
3. Define `setAuthorData` function to fetch and display author data.
  a. Fetch author data using the first author's name.
  b. If author data is fetched successfully, update the DOM with the author's name, bio, and image.
  c. If the author's bio is empty or an error occurs, hide the author section.
4. Define `getBook` async function to fetch book data and recommendations based on a query.
  a. Construct a URL to fetch book data from the Google Books API.
  b. Fetch book data and extract necessary details.
  c. Attempt to fetch recommendations; handle errors by setting recommendations to null.
  d. Return an object containing all the extracted and fetched data.
5. Define `setWebpageData` function to update the webpage with the fetched book data.
  a. Update the document title and various elements in the DOM with the book's details.
  b. If recommendations are available, display them; otherwise, hide the recommendations section.

*/
