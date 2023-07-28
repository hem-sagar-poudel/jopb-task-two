import nextApiClient from "./nextApiClient";

export const getNews = async (sources) => {
  console.log("news");
  try {
    return await nextApiClient.get(`/top-headlines?sources=${sources}`);
  } catch (error) {
    return new Error(error.data.message);
  }
};

export const getSources = async () => {
  console.log("news");
  try {
    return await nextApiClient.get("/top-headlines/sources");
  } catch (error) {
    return new Error(error.data.message);
  }
};
