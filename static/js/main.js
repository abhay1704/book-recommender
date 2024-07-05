import { elasticScroll, navScroller, scrollReveal } from "./scrollHandler";
import { handleDataUrl } from "./dataUrlHandler";

document.addEventListener("DOMContentLoaded", () => {
  elasticScroll();
  handleDataUrl();
  navScroller();
  scrollReveal();
  // Other code here...
});
