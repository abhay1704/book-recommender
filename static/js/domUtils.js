export const getElement = (selector) => document.querySelector(selector);
export const getElements = (selector) => document.querySelectorAll(selector);
export const setElementText = (selector, text) => {
  getElements(selector).forEach((element) => (element.textContent = text));
};

export function setBookCoverImage(imageUrl) {
  imageUrl = imageUrl.replace("http://", "https://");
  const styleSheet = document.styleSheets[0];
  const ruleIndex = Array.from(styleSheet.cssRules).findIndex(
    (rule) => rule.selectorText === "#home-section::before"
  );

  if (ruleIndex !== -1) {
    styleSheet.deleteRule(ruleIndex);
  }

  styleSheet.insertRule(
    `
      #home-section::before {
        content: "";
        position: absolute;
        inset: 0;
        background: url('${imageUrl}') no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        transition: transform 0.3s ease-out;
        filter: contrast(120%) opacity(0.8) clarity(1.5);
        z-index: -1; 
      }
            `,
    styleSheet.cssRules.length
  );
}


export function setError(msg, parent = "#whole-content") {
  const error = `<div class="error">${msg}</div>`;
  getElement(parent).insertAdjacentHTML("beforeend", error);
}