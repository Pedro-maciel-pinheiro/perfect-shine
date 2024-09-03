import { Link } from "@/navigation";
import { ProductsListProps } from "@/types/type";
import Image from "next/image";

import React from "react";

export type ProductCardProps = {
  productData: ProductsListProps;
};

export const ProductCard = ({ productData }: any) => {
  return (
    <section className="min-h-screen w-full flex gap-2 items-center  justify-center">
      <div className="w-full h-full grid grid-cols-4 mt-36 mb-20 max-w-7xl">
        {productData.map((item: any) => (
          <Link
            href={{ pathname: "/product-info", query: { id: item?.id } }}
            key={item.id}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={300}
              className="rounded-md"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
