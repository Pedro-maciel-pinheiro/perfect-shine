
import { TQueryValidator } from "@/lib/validators/query-validator";
import { Product } from "@/payload-types";





export type CartItem = {
  product: Product;
  quantity: number;
};

export type SectionHeaderProps = {
  title: string;
};

export type searchParamsProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export type singleProductProps = {
  params: {
    productId: string;
  };
};

export type VerifyEmailTokenProps = {
  token: string;
};

export type AddToCartButtonProps = {
  product: Product;
};
export type ProductCardDisplayProps = {
  product: Product;
  quantity: number;
};

type BreadcrumbItemsProps = {
  id: number;
  name: string;
  href: string;
};

export type MaxWidthWrapperProps = {
  className?:string
  children:React.ReactNode
}

export type BreadcrumbProps = {
  paramsInfo: BreadcrumbItemsProps[];
  productName?:string
  
};

export interface ProductReelProps {
  title?: string;
  subtitle?: string;
  href?: string;
  query: TQueryValidator;
}

export interface ProductListingProps {
  product: Product | null;
  index: number;
}

export interface ImagesCardProps {
  url: string[];
  displayAllImages:boolean
}


export interface QuantityControlsProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}