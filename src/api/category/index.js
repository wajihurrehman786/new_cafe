import { AxiosInstance } from "../../util/AxiosInstance";

export const getCategoryList = async () => {
  try {
    const result = await AxiosInstance.get("/api/categories");
    return result;
  } catch (error) {
    console.log("🚀 ~ file: index.js:9 ~ getCategoryList ~ error", error);
    throw error;
  }
};
