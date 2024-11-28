import { getProductData } from "@/api/get-api";
import { SectionHeader } from "@/components/section-header";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const HeroDailyProduct = () => {
  const productData = getProductData();
  const randomIndex = Math.floor(Math.random() * productData.length);
  const productSlice = productData.slice(randomIndex, randomIndex + 1);
  return (
    <section className="h-auto w-full max-w-[90%] lg:max-w-screen-2xl">
      <SectionHeader title={"NEW  + FRESH"} />

      <ul className="mx-2">
        {productSlice.map((item) => (
          <li className="grid gap-4 lg:grid-cols-2" key={item.id}>
            <Link
              href={{
                pathname: "/product-info",
                query: { title: item?.title },
              }}
              className="overflow-hidden rounded-md"
            >
              <Image
                src={item.extraImages[0]}
                alt={item.title}
                width={800}
                height={800}
                className="rounded-md transition-all duration-300 hover:scale-105"
              />
            </Link>
            <div className="flex flex-col items-start gap-4">
              <Link
                href={{
                  pathname: "/product-info",
                  query: { title: item?.title },
                }}
                className="overflow-hidden rounded-md"
              >
                <Image
                  src={item.extraImages[2]}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="rounded-md transition-all duration-300 hover:scale-105"
                />
              </Link>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="font-medium">{item.description}</p>

              <Link
                href={{
                  pathname: "/product-info",
                  query: { title: item?.title },
                }}
                className="overflow-hidden rounded-md"
              >
                <button className="font-semibold uppercase text-red-500">
                  Shop now
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
