import { StaticImageData } from "next/image";

export type ProductsListProps = {
  id: string | number;
  title: string;
  subtitle: string;
  description: string;
  image: string | StaticImageData;
  thumbImage: string;
  extraImages: string[];
  rating: number;
  priceUSD: number;
  priceYEN: number;
  gridRow?:string
};

export type ProductCardProps = {
  productData: ProductsListProps;
};
