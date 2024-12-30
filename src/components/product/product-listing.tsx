"use client";
import React, { useEffect, useState } from "react";
import { ProductListingProps } from "@/types/type";
import { ProductPlaceHolder } from "./product-place-holder";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { PRODUCT_CATEGORIES } from "@/constant/product-category";
import { ImageCard } from "../custom/image-card";

const ProductListing = ({ product, index }: ProductListingProps) => {
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
        className="flex w-fit items-center justify-center"
      >
        <div className="flex w-full flex-col items-center">
          <ImageCard url={validUrls} displayAllImages={false} />

          <div className="flex flex-col self-start px-2">
            <h1 className="mt-4 w-32 text-sm font-medium text-gray-100">
              {product.name}
            </h1>

            <p className="mt-1 text-sm font-medium text-gray-200">
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
