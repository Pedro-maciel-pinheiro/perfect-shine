"use client";
import React, { useState } from "react";
import Image from "next/image";
import { perfectshine_font } from "@/constant/font";
import { singleProductProps } from "@/types/type";
import { currentparams } from "@/constant/current-params";
import Link from "next/link";
import { AddToCartButton } from "../button/add-to-cart-button";

export default function SingleProductPage({ product }: singleProductProps) {
  const [isSucess, setIsSucess] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <ol className="flex items-center space-x-2">
        {currentparams.map((params, index) => (
          <li key={params.name}>
            <div className="flex items-center text-sm">
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
                href={params.href}
              >
                {params.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
      <div className="grid max-w-7xl grid-cols-2">
        {product && (
          <div className="flex h-full w-full items-center justify-start text-xl text-black">
            <div className="grid auto-rows-auto grid-cols-2 gap-4">
              {product.extraImages.map((extraImages, index) => (
                <div
                  key={index}
                  className={`${index === 2 ? "col-span-2" : ""}`}
                >
                  <Image
                    src={extraImages}
                    alt=""
                    width={785}
                    height={300}
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <ul className="flex flex-col items-center justify-start font-medium text-black">
          {product && (
            <li className="mx-auto flex flex-col gap-3">
              <h1
                className={`text-2xl font-bold ${perfectshine_font.className}`}
              >
                {product.title}
              </h1>
              <h2 className="text-lg font-semibold text-gray-600">
                {product.subtitle}
              </h2>
              <p className="max-w-96">{product.description}</p>

              <div className="flex items-center gap-2 text-red-500">
                <h3>Price</h3>
                <p>Usd:{product.priceUSD}</p>
                <p>Yen:{product.priceYEN}</p>
              </div>
              <AddToCartButton product={product} />
            </li>
          )}
        </ul>
      </div>

      <div className="h-full w-full"></div>
    </div>
  );
}
