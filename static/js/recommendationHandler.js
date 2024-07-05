import { API_CONFIG } from "./config";
import { postData } from "./api";

const { RECOMMEND_URL } = API_CONFIG;

export const getRecommendations = async (query) => {
    const data = {
      "name" : query
    }
    
    try {
      const recommendations = await postData(RECOMMEND_URL, data);  
      return recommendations;
    } catch (error) {
      throw error;
    }                                                      
};
