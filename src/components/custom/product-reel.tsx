import React from "react";
import { perfectshine_font } from "@/constant/font";
import {  ProductsListProps } from "@/types/type";
import Image from "next/image";
import { getProductData } from "@/api/get-api";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export const ProductReel = () => {
  const getProduct: ProductsListProps[] = getProductData();
  const randomIndex = Math.floor(Math.random() * getProduct.length)
  const productSlice = getProduct.slice(randomIndex  , randomIndex + 3)

  return (
    <section
      className={`flex flex-col items-center justify-center gap-2 ${perfectshine_font.className}`}
    >
      <h1 className="text-start text-2xl font-medium">Works well with</h1>
      <div className="grid h-full w-full grid-cols-2 content-center gap-2">
        {productSlice.map((product) => (
          <li key={product.title}>
            <Link
              href={{
                pathname: "/product-info",
                query: { title: product?.title },
              }}
            >
              <div className="max-w-[200px] flex flex-col  items-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-sm w-fit text-center p-1">{product.title}</p>
                <span className="text-xs">{formatPrice(product.priceUSD)}</span>
                <span>{product.rating}</span>
               
              </div>
            </Link>
          </li>
        ))}
      </div>
    </section>
  );
};
