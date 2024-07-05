import { getData } from "./api.js";
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

const { API_URL_GOOGLE, API_KEY_GOOGLE } = API_CONFIG;

function setReccommendations(reccomends) {
  const bookList = getElements(".book-list .book");
  reccomends.forEach((book, i) => {
    const [title, { authors, thumbnail, infoLink }] = book.entries();
    const bookElement = document.createElement("div");
    bookList[i].getElement("img").src = thumbnail;
    bookList[i].setElementText(".book-name", title);
    bookList[i].setElementText(".author-name", authors.join(", "));
  });
}

function setAuthorData(authors) {
  getAuthor(authors[0])
    .then((authorData) => {
      if (authorData.bio === "") {
        getElement("#about-author").style.display = "none";
        return;
      }
      setElementText(".author-name", authorData.name);
      if (authorData.image)
        getElement("#author-img img").src = authorData.image;
      getElement("#about-author .content p").textContent = authorData.bio;
      getElement(".author-url").href = authorData.url;
    })
    .catch((error) => {
      getElement("#about-author").style.display = "none";
      console.error(error);
    });
}

export const getBook = async (query) => {
  try {
    const url = `${API_URL_GOOGLE}/?q=${query}&key=${API_KEY_GOOGLE}`;
    const searchData = await getData(url);
    const shortInfo = searchData.items[0].searchInfo.textSnippet;
    const bookUrl = searchData.items[0].selfLink;
    const bookData = await getData(bookUrl);
    let reccomends;

    try {
      reccomends = await getRecommendations(query);
    } catch (error) {
      console.error(error);
      reccomends = [];
    }

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
      reccomends,
    };
  } catch (error) {
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
  const newTitle = `${title} | ${subtitle} | A book by ${authors.join(", ")}`;
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
  setBookCoverImage(image);

  renderMockup(thumbnail);
  setAuthorData(authors);

  if (!reccomends.length)
    getElement("#recommended-books").style.display = "none";
  else {
    setReccommendations(reccomends);
  }
};
