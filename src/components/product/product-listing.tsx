"use client";
import React, { useEffect, useState } from "react";
import { ProductListingProps } from "@/types/type";
import { ProductPlaceHolder } from "./product-place-holder";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { PRODUCT_CATEGORIES } from "@/constant/product-category";
import { ImageCard } from "../custom/image-card";
import { AddToCartButton } from "../button/add-to-cart-button";
import { useCart } from "../cart/use-cart";
import { Button } from "../ui/button";
import ImageSlider from "../custom/image-slider";

const ProductListing = ({ product, index }: ProductListingProps) => {
  const { addItem } = useCart();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (!product || !isVisible) return <ProductPlaceHolder />;

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category,
  )?.label;

  const validUrls = product.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  if (isVisible && product) {
    return (
      <Link
        href={`/product-info/${product.id}`}
        className="flex w-full items-center justify-center"
      >
        <div className="flex w-fit flex-col items-center">
          <div className="">
            <ImageCard url={validUrls} displayAllImages={false} />
            

            {/* <AddToCartButton product={product}/> */}
          </div>

          <div className="flex flex-col px-2 md:self-start">
            <h1 className={`mt-4 w-32 text-[16px] font-medium text-gray-900`}>
              {product.name}
            </h1>

            <p className="mt-1 text-[16px] font-medium text-gray-800">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return <div>ProductListing</div>;
};

export default ProductListing;
