import { getElement, getElements } from "./domUtils";

const paginationBtns = getElement(".pagination__btns");
const prevBtn = getElement(".prev.pagination__btn");
const nextBtn = getElement(".next.pagination__btn");
const specificPageBtn = getElements(".page.pagination__btn");
const pageNumberElement = getElement("#page-number");

export class PaginationHandler {
  constructor(pages) {
    this.currentPage = 1;
    this.pages = pages;
  }

  handlePagination = (callback) => {
    paginationBtns.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.classList.contains("pagination__btn")) return;

      const pageNumber = parseInt(target.dataset.pageNumber);
      if (pageNumber <= 0 || pageNumber > this.pages) return;
      callback(pageNumber);
    });
  };

  updateBtns = () => {
    prevBtn.dataset.pageNumber = this.currentPage - 1;
    nextBtn.dataset.pageNumber = this.currentPage + 1;
    getElement(".pagination__btn--active")?.classList?.remove(
      "pagination__btn--active"
    );

    const pageNumbers = [];
    for (let i = 1; i <= 5; i++) {
      const pageNumber = this.currentPage - 3 + i;
      if (pageNumber > 0 && pageNumber <= this.pages)
        pageNumbers.push(pageNumber);
    }
    pageNumbers.slice(-3).forEach((pageNumber, index) => {
      specificPageBtn[index].dataset.pageNumber = pageNumber;
      specificPageBtn[index].textContent = pageNumber;
    });

    specificPageBtn.forEach((btn) => {
      if (parseInt(btn.dataset.pageNumber) === this.currentPage)
        btn.classList.add("pagination__btn--active");
    });
    pageNumberElement.value = this.currentPage;
  };

  setPageNumber = (page) => {
    this.currentPage = page;
    this.updateBtns();
  };
}
