const home = document.getElementById("home-section");
const header = document.querySelector("header");
const target = document.getElementById("target");
const aboutBook = document.getElementById("about-book");
const scrapper = document.getElementById("scrapper");
const recommends = document.getElementById("recommended-books");
const stars = document.querySelectorAll(".stars span");
const authorSection = document.getElementById("about-author");
const nStars = +document.querySelector(".stars").dataset.star;
const experienceBook = document.getElementById("experience-book");

let lastScrollTop = 0;

const scrollDown = () => {
  header.classList.remove("collapse");
};

const scrollUp = () => {
  header.classList.add("collapse");
};

let dec = 0;
const screenScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (dec < 15) {
    scrollUp();
  } else {
    scrollDown();
  }
  dec =
    dec * (lastScrollTop - scrollTop) < 0
      ? 0
      : dec + (lastScrollTop - scrollTop) * 0.1;
  lastScrollTop = scrollTop;
};

const removeHeader = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("collapse");
        header.classList.add("dark");
        window.addEventListener("scroll", screenScroll);
      } else {
        header.classList.remove("collapse");
        header.classList.remove("dark");
        window.removeEventListener("scroll", screenScroll);
      }
    });
  },
  { threshold: 0.3 }
);

removeHeader.observe(home);

// Setting N-stars

stars.forEach((star, i) => {
  if (i < nStars) {
    star.style.opacity = "1";
  }
});
