import { stateVariables } from "./config";
import { loadPage } from "./bookDetail";

export const getElement = (selector) => document.querySelector(selector);
export const getElements = (selector) => document.querySelectorAll(selector);
export const setElementText = (selector, text) => {
  getElements(selector).forEach((element) => (element.textContent = text));
};

export function setBookCoverImage(imageUrl) {
  imageUrl = imageUrl.replace("http://", "https://");
  getElement("#home-section").style.backgroundImage = `url(${imageUrl})`;
  const tempImg = new Image();
  tempImg.src = imageUrl;
  tempImg.onload = () => {
    stateVariables.coverLoaded = true;
    if(stateVariables.mockupLoaded) {
      loadPage();
    }
  };
}

export function setError(msg, parent = "#whole-content") {
  const error = `<div class="error">${msg}</div>`;
  getElement(parent).insertAdjacentHTML("beforeend", error);
}
