import { getData } from "./api.js";
import { API_CONFIG } from "./config.js";
import { PaginationHandler } from "./paginationHandler.js";
import { setElementText } from "./domUtils.js";
import { handleBatchDataUrl } from "./dataUrlHandler.js";

const url = API_CONFIG.TOP_50;
const RESULT_PER_PAGE = API_CONFIG.RESULT_PER_PAGE;
let data = [];
let currentRender = [];
let currentPage = 1;
let paginationHandler;

const bookScript = (name, authorName, imageUrl) =>
  `
    <div class="book book-details">
        <div class="book-cover card-front">
            <img src="${imageUrl}" alt="Book cover" />
        </div>
        <div class="book-info card-back">
            <h3 class="book-title ">${name}</h3>
            <p class="book-author">${authorName}</p>
            <a href="#" data-url="/book?book=${encodeURIComponent(
              name
            )}" class="btn btn-primary">Read More</a>
        </div>
    </div>
`;

const renderBooks = (books) => {
  const container = document.querySelector(".books");
  container.innerHTML = "";
  books.forEach((book) => {
    container.innerHTML += bookScript(book.title, book.author, book.image);
  });
};

const goToPage = function (page) {
  currentPage = page;
  this.setPageNumber(currentPage);
  const lowerBound = (currentPage - 1) * RESULT_PER_PAGE;
  const upperBound = Math.min(data.length, currentPage * RESULT_PER_PAGE);
  setElementText(".current-page", currentPage);
  setElementText(".low-limit", lowerBound + 1);
  setElementText(".high-limit", upperBound);

  currentRender = data.slice(lowerBound, upperBound);
  renderBooks(currentRender);
};

const Sorter = {
  "a-z": (a, b) => a.title.localeCompare(b.title),
  "z-a": (a, b) => b.title.localeCompare(a.title),
};

const handleSorting = (sortType) => {
  data.sort(Sorter[sortType]);
  goToPage.call(paginationHandler, 1);
};

const sortBtns = document.querySelector("#sort-by");
sortBtns.addEventListener("change", (e) => {
  const sortType = e.target.value;
  handleSorting(sortType);
});

getData(url).then((responseData) => {
  data = Object.entries(responseData).map(([key, value]) => {
    return {
      title: key.replace(/\\"|\\/g, '"'),
      ...value,
    };
  });

  handleBatchDataUrl();
  const nPages = Math.ceil(data.length / RESULT_PER_PAGE);
  paginationHandler = new PaginationHandler(nPages);
  goToPage.call(paginationHandler, 1);
  paginationHandler.handlePagination(goToPage.bind(paginationHandler));
});
