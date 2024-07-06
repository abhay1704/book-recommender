import { API_CONFIG } from "./config.js";
import { getData } from "./api.js";
import { removeBackground } from "./api.js";

export const renderMockup = async (image_url) => {
  image_url = image_url.replace("http://", "https://");
  const url = "https://api.mediamodifier.com/v2/mockup/render";
  const options = {
    method: "POST",
    headers: {
      api_key: API_CONFIG.API_KEY_MOCKUP,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      nr: 1404,
      layer_inputs: [
        {
          id: "jujmugkht9uyhlb6sjd",
          data: image_url,
          crop: { x: 0, y: 0, width: 128, height: 169 },
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
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }

    const mockupImage = await removeBackground(data.url, "mockup_image");
    const mockupURL = URL.createObjectURL(mockupImage);
    document.querySelectorAll(".book-img img").forEach((bookImage) => {
      bookImage.src = mockupURL;
    });
  } catch (error) {
    console.error(error);
  }
};
