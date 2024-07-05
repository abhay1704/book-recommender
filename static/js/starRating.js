import { getElements } from "./domUtils.js";

export const initStarRating = () => {
  const stars = getElements(".stars span");
  const nStars = +document.querySelector(".stars").dataset.star;

  stars.forEach((star, i) => {
    if (i < nStars) {
      star.style.opacity = "1";
    }
  });
};
