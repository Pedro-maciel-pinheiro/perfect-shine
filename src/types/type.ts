import { StaticImageData } from "next/image";

export type ProductsListProps = {
  id: number;
  title: string;
  image: string | StaticImageData;
  
};


export type ProductCardProps = {
    productData:ProductsListProps
    
}