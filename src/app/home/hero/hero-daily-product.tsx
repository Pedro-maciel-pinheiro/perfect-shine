"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { trpc } from "@/trpc/client";

export const HeroDailyProduct = () => {
  const { data: product, isLoading } = trpc.getProduct.useQuery({
    limit: 20,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!product || product.length === 0) {
    return <div>Product not Found!</div>;
  }

  const randomIndex = Math.floor(Math.random() * product.length);
  const randomProduct = product[randomIndex];
  

  const validUrls = randomProduct.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as String[];

  if (validUrls.length === 0) {
    return <div>Failed to Load Images</div>;
  }

  return (
    <MaxWidthWrapper className="w-full">
      <ul className="">
        <li className="grid gap-4 lg:grid-cols-2">
          <Link
            href={`/product-info/${randomProduct.id}`}
            className="overflow-hidden rounded-md"
          >
            <Image
              src={validUrls[0] as string}
              alt={randomProduct.name || "Banner image"}
              width={800}
              height={800}
              className="rounded-md transition-all duration-300 hover:scale-105"
            />
          </Link>
          <div className="flex flex-col items-start gap-4">
            <Link
              href={`/product-info/${randomProduct.id}`}
              className="overflow-hidden rounded-md"
            >
              <Image
                src={validUrls[2] as string}
                alt={randomProduct.name || "Banner image"}
                width={800}
                height={800}
                className="rounded-md transition-all duration-300 hover:scale-105"
              />
            </Link>
            <h3 className="text-xl font-semibold">{randomProduct.name}</h3>
            <p className="font-medium">{randomProduct.description}</p>

            <Link
              href={`/product-info/${randomProduct.id}`}
              className="overflow-hidden rounded-md"
            >
              <button className="font-semibold uppercase text-red-500">
                Shop now
              </button>
            </Link>
          </div>
        </li>
      </ul>
    </MaxWidthWrapper>
  );
};
