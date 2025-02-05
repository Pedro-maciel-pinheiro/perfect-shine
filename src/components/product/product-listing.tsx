"use client";
import React, { useEffect, useState } from "react";
import { ProductListingProps } from "@/types/type";
import { ProductPlaceHolder } from "./product-place-holder";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
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

  const validUrls = product.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  if (isVisible && product) {
    return (
      <section className="flex w-full items-center justify-center">
        <div className="flex w-fit flex-col items-center">
          <div className="group relative ">
            <AddToCartButton
              product={product}
              className={cn(
                "absolute bottom-0 z-40 mb-2 hidden w-full rounded-none bg-transparent text-transparent transition-all duration-300 md:block  ",
                "group-hover:bg-black/80 group-hover:text-white ",
              )}
            />
            <Link
              href={`/product-info/${product.id}`}
              className="flex w-full items-center justify-center"
            >
              <ImageCard url={validUrls} displayAllImages={false} />
            </Link>
          </div>

          <div className="flex h-24 w-full flex-col items-start px-2 md:self-start">
            <h1
              className={`mt-4 overflow-hidden text-sm font-medium text-gray-900 md:text-lg`}
            >
              {product.name}
            </h1>

            <p className="mt-1 text-sm font-medium text-gray-800 md:text-lg">
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
