import {
  initScrollHandler,
  elasticScroll,
  navScroller,
  scrollReveal,
} from "./scrollHandler.js";
import { initStarRating } from "./starRating.js";
import { getBook, setWebpageData } from "./bookHandler.js";
import { getElement, setError } from "./domUtils.js";

const spinner = `<div class="loader"></div>`;

document.addEventListener("DOMContentLoaded", () => {
  initScrollHandler();

  initStarRating();
  elasticScroll();
  navScroller();
  scrollReveal();
  getElement("body").insertAdjacentHTML("beforeend", spinner);

  const urlParams = new URLSearchParams(window.location.search);
  const bookName = urlParams.get("book");
  console.log(bookName);

  getBook(bookName)
    .then((data) => {
      setWebpageData(data);
      setTimeout(() => {
        getElement(".loader").style.display = "none";
        getElement("#whole-content").style.display = "block";
      }, 2500);
    })
    .catch((error) => {
      setError(error, "body");
      getElement(".loader").style.display = "none";
      getElement("#whole-content").style.display = "none";
    });
});
