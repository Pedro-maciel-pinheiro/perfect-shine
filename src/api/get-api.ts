import productData from "@/data/products-data.json";


export const getProductData = () => {
  if (!productData) {
    throw new Error("product data not found");
  }
  return productData;
};
