import { API_CONFIG } from "./config.js";
import simpleCache from "./caching.js";

const timer = (ms) =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject("Response Timeout!! Internet Connection too slow"), ms)
  );

export const getData = async (url, options = null, jsonify = true) => {
  try {
    const cacheData = simpleCache.get(url);
    if (cacheData) {
      return cacheData;
    }
    const response = await Promise.race([fetch(url, options), timer(20000)]);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (!jsonify) return response;
    const data = await response.json();
    simpleCache.set(url, data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postData = async (url, data) => {
  try {
    const file_name = data.file_name;
    const cacheData = simpleCache.get(file_name);
    if (cacheData) {
      return cacheData;
    }
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (response.status !== 200) return [];

    const responseData = await response.json();
    simpleCache.set(file_name, responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const removeBackground = async (image_url, file_name) => {
  const cached = simpleCache.get(file_name);
  if (cached) {
    return cached;
  }
  const url = `${API_CONFIG.BGREMOVER}?file_path=${image_url}&file_name=${file_name}`;

  try {
    const data = await getData(url);
    simpleCache.set(file_name, data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
