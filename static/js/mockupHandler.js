import { API_CONFIG, stateVariables } from "./config.js";
import { postData } from "./api.js";
import { loadPage } from "./bookDetail.js";

const setMockup = (mockupURL) => {
  document.querySelectorAll(".book-img img").forEach((bookImage) => {
    bookImage.src = mockupURL;
    bookImage.addEventListener("load", () => {
      stateVariables.mockupLoaded = true;
      if (stateVariables.coverLoaded) {
        loadPage();
      }
    });
  });
};

export const renderMockup = async (image_url, book_name) => {
  image_url = image_url.replace("http://", "https://");
  const file_name = "mockup_" + book_name;

  const url = API_CONFIG.MOCKUP_URL;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      nr: 1404,
      layer_inputs: [
        {
          id: "jujmugkht9uyhlb6sjd",
          data: image_url,
          checked: true,
        },
        {
          id: "jujmugkhplsvkwqyyxg",
          checked: true,
          color: { red: 0, green: 0, blue: 0 },
        },
      ],
    }),
  };

  try {
    const data = {
      options: options,
      file_name: file_name,
    };

    const response = await postData(url, data);
    if (!response) {
      if (stateVariables.coverLoaded) {
        loadPage();
      }
      throw new Error(response["message"]);
    }
    const mockupURL = response["file_path"];
    setMockup(mockupURL);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
