import { getProductData } from "@/api/get-api";
import { ProductsListProps } from "@/types/type";


export const getSingleProduct = async (
  title: string
): Promise<ProductsListProps | undefined> => {
  const items = getProductData();

  const singleItem = items.find(
    (productDatails: ProductsListProps) => productDatails.title == title
  );

  if (!singleItem) {
    console.log(`Product with id ${title} not found`);
    return undefined;
  }
  return singleItem;
};






