import { getElement } from "./domUtils"
const nav = getElement("nav");

export const navigationHandler = (callback) => {
  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.classList.contains("nav__link")) return;

    const page = target.dataset.page;
    callback(page);
  });
}