import { getProductData } from "@/api/get-api";

export const getSingleProduct = async (id: number) => {
  const item = getProductData();
  const singleItem = item.find(
    (productDetails: any) => productDetails.id == id
  );
  return singleItem;
};
