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
  gridRow?: string;
};

export type ProductCardProps = {
  productData: ProductsListProps;
};

export type SectionHeaderProps = {
  title: string;
};

export type searchParamsProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export type singleProductProps = {
  product: ProductsListProps;
};


export type ProductButtonProps = {
  product:ProductsListProps
}
export type ProductCardDisplayProps = {
  product:ProductsListProps
  quantity: number;
}