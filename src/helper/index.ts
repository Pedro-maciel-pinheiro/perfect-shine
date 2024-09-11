import { getProductData } from "@/api/get-api";
import { ProductsListProps } from "@/types/type";


export const getSingleProduct = async (
  id: number
): Promise<ProductsListProps | undefined> => {
  const items = getProductData();

  const singleItem = items.find(
    (productDatails: ProductsListProps) => productDatails.id == id
  );

  if (!singleItem) {
    console.log(`Product with id ${id} not found`);
    return undefined;
  }
  return singleItem;
};







// export const getSingleProduct = async (id: number) => {
//   const item = getProductData();
//   const singleItem = item.find(
//     (productDetails: any) => productDetails.id == id
//   );
//   return singleItem;
// };