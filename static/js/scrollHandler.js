import { getElement, getElements } from "./domUtils.js";
import overscroll from "overscroll";

export const initScrollHandler = () => {
  const header = getElement("header");
  const home = getElement("#home-section");
  let lastScrollTop = 0;
  let dec = 0;

  const scrollDown = () => header.classList.remove("collapse");
  const scrollUp = () => header.classList.add("collapse");

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
          header.classList.add("collapse", "dark");
          window.addEventListener("scroll", screenScroll);
        } else {
          header.classList.remove("collapse", "dark");
          window.removeEventListener("scroll", screenScroll);
        }
      });
    },
    { threshold: 0.3 }
  );

  removeHeader.observe(home);
};

export const elasticScroll = () => {
  const content = document.getElementById("whole-content");
  let startY = 0;
  let isPulling = false;
  let top = false; // Use `let` for variables that will change

  document.addEventListener(
    "touchstart",
    (e) => {
      // Check if the user is at the bottom of the page or at the top
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight ||
        window.scrollY === 0
      ) {
        startY = e.touches[0].pageY;
        isPulling = true;
        top = window.scrollY === 0;
      }
    },
    { passive: true }
  );

  document.addEventListener(
    "touchmove",
    (e) => {
      if (isPulling) {
        const pullDistance = e.touches[0].pageY - startY;
        // Apply the effect based on the direction of the pull
        if (top) {
          // Pulling down at the top
          content.style.transform = `translateY(${-pullDistance * 0.1}px)`;
        } else {
          // Pulling up at the bottom
          content.style.transform = `translateY(${
            pullDistance < 0 ? pullDistance * 0.01 : 0
          }px)`;
        }
      }
    },
    { passive: true }
  );

  document.addEventListener("touchend", () => {
    if (isPulling) {
      content.style.transform = ""; // Reset the transform
    }
    isPulling = false;
  });
};

const scrollHandler = (target) => {
  const targetId = target.getAttribute("href");
  const targetElement = getElement(targetId);

  targetElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const navScroller = () => {
  const nav = getElement("nav");
  const navLinks = getElements(".nav-links");
  const navBtns = getElements(".btns--nav");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      const target = e.target.closest(".nav-link");
      if (!target) return;
      e.preventDefault();
      scrollHandler(target);
    });
  });

  navBtns.forEach((navBtn) => {
    navBtn.addEventListener("click", (e) => {
      const target = e.target.closest(".btn--nav");
      if (!target) return;
      e.preventDefault();
      scrollHandler(target);
    });
  });
};

export function scrollReveal() {
  const revealElements = getElements("section:not(#home-section)");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0)";
        entry.target.style.opacity = 1;
      }
    });
  });

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}
