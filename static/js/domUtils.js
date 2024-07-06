export const getElement = (selector) => document.querySelector(selector);
export const getElements = (selector) => document.querySelectorAll(selector);
export const setElementText = (selector, text) => {
  getElements(selector).forEach((element) => (element.textContent = text));
};

export function setBookCoverImage(imageUrl) {
  imageUrl = imageUrl.replace("http://", "https://");
  getElement("#home-section").style.backgroundImage = `url(${imageUrl})`;
}

export function setError(msg, parent = "#whole-content") {
  const error = `<div class="error">${msg}</div>`;
  getElement(parent).insertAdjacentHTML("beforeend", error);
}
