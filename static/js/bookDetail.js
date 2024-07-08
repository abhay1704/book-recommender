import {
  initScrollHandler,
  elasticScroll,
  navScroller,
  scrollReveal,
  removeHeader,
} from "./scrollHandler.js";
import { initStarRating } from "./starRating.js";
import { getBook, setWebpageData } from "./bookHandler.js";
import { getElement, setError } from "./domUtils.js";

export const loadPage = () => {
  getElement(".loader").style.display = "none";
  getElement("#whole-content").style.display = "block";
  if (getElement(".error")) getElement(".error").style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {
  initScrollHandler();
  removeHeader();
  elasticScroll();
  navScroller();
  scrollReveal();

  const urlParams = new URLSearchParams(window.location.search);
  const bookName = urlParams.get("book");

  getBook(bookName)
    .then((data) => {
      setWebpageData(data);
    })
    .catch((error) => {
      setError(error, "body");
      getElement(".loader").style.display = "none";
      getElement("#whole-content").style.display = "none";
    });
});
