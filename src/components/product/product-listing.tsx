"use client";
import React, { useEffect, useState } from "react";
import { ProductListingProps } from "@/types/type";
import { ProductPlaceHolder } from "./product-place-holder";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
import { PRODUCT_CATEGORIES } from "@/constant/product-category";
import { ImageCard } from "../custom/image-card";
import { AddToCartButton } from "../button/add-to-cart-button";

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
      <section className="flex w-full items-center justify-center ">
        <div className="flex w-fit flex-col items-center">
          <div className="group relative">
            <AddToCartButton
              product={product}
              className={cn(
                "text-transparent absolute bottom-0 z-40 mb-2 w-full rounded-none bg-transparent transition-all duration-300",
                "group-hover:bg-black/90 group-hover:text-white", 
               
              )}
            />
            <Link
              href={`/product-info/${product.id}`}
              className="flex w-full items-center justify-center"
            >
              <ImageCard url={validUrls} displayAllImages={false} />
            </Link>
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
      </section>
    );
  }

  return <div>ProductListing</div>;
};

export default ProductListing;
