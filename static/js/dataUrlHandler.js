import { getElement } from "./domUtils";

export const handleDataUrl = () => {
  const dataUrl = document.querySelectorAll("[data-url]");
  dataUrl.forEach((element) => {
    const url = element.getAttribute("data-url");
    element.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = url;
    });
  });
};

export const handleBatchDataUrl = () => {
  const books = getElement(".books");
  books.addEventListener("click", (event) => {
    const target = event.target.closest("[data-url]");
    if (!target) return;
    event.preventDefault();
    const url = target.getAttribute("data-url");
    window.location.href = url;
  });
};
