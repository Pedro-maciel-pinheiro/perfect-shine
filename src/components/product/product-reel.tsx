"use client";
import React from "react";
import { trpc } from "@/trpc/client";
import { ProductReelProps } from "@/types/type";
import ProductListing from "./product-listing";
import { perfectshine_font } from "@/constant/font";
import { Product } from "@/payload-types";

const FALLBACK_LIMIT = 4;

const ProductReel = (props: ProductReelProps) => {
  const { title, subtitle, href, query } = props;

  const { data: queryResults, isLoading } =
    trpc.getInfiniteProduct.useInfiniteQuery(
      {
        limit: query.limit ?? FALLBACK_LIMIT,
        query,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      },
    );

  const products = queryResults?.pages.flatMap((page) => page.items);
  let products_list: (Product | null)[] = [];
  if (products && products.length) {
    products_list = products;
  } else if (isLoading) {
    products_list = new Array<null>(query.limit ?? FALLBACK_LIMIT).fill(null);
  }

  console.log("data", queryResults);

  return (
    <section className={`py-20 ${perfectshine_font.className}`}>
      <div className="mb-4 md:flex md:items-center md:justify-between">
        <div className="max-w-2xl px-4 text-2xl font-semibold text-black lg:max-w-xl lg:px-0">
          <h1>{title}</h1>
        </div>
      </div>

      <div className="relative">
        <div className="mt-6 flex w-full">
          <div className="grid gap-2 rounded-lg bg-black p-2 md:grid-cols-2">
            {products_list.map((product, index) => (
              <ProductListing
                key={`product-${index}`}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReel;
