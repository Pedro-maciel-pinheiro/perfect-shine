import { Link } from "@/navigation";
import { ProductsListProps } from "@/types/type";
import { StarIcon } from "lucide-react";
import Image from "next/image";

import React from "react";

export type ProductCardProps = {
  productData: ProductsListProps[];
};

export const ProductCard = ({ productData }: ProductCardProps) => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center gap-2">
      <div className="mt-36 grid h-full w-full max-w-7xl grid-cols-4 gap-4">
        {productData.map((item: ProductsListProps) => (
          <Link
            href={{ pathname: "/product-info", query: { title: item?.title } }}
            key={item.id}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={300}
              className="rounded-md"
            />
            <div className="p-1 text-center">
              <h3 className="font-semibold">{item.title}</h3>
              <p>
                ${item.priceUSD} {"/"} ¥{item.priceYEN}
              </p>
            </div>

            <div className="flex items-center justify-center">
              {Array(5)
                .fill(0)
                .map((_, starIndex) => (
                  <StarIcon
                    key={starIndex}
                    fill={starIndex < item.rating ? "black" : "white"}
                    color="black"
                    size={16}
                  />
                ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
