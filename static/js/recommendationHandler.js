import { API_CONFIG } from "./config";
import { postData } from "./api";

export const getRecommendations = async (query) => {
  const data = {
    name: query,
  };

  try {
    const recommendations = await postData(API_CONFIG.RECOMMEND_URL, data);
    return recommendations;
  } catch (error) {
    throw error;
  }
};
