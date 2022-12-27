import { AxiosInstance } from "../../util/AxiosInstance";

export const getDishList = async () => {
  try {
    const dishes = await AxiosInstance.get("/api/dishes");
    return dishes;
  } catch (error) {
    console.log("get Dish list line # 8");
    throw error;
  }
};

export const getFilteredDishList = async (categories = []) => {
  const serachFilters = { categories };
  try {
    const result = await AxiosInstance.post(
      "/api/dishes/category/_search",
      serachFilters
    );
    return result;
  } catch (error) {
    console.log("🚀 ~ file: index.js:22 ~ getFilteredDishList ~ error", error);
    throw error;
  }
};
