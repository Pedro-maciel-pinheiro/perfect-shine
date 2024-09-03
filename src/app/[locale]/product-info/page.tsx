import { getSingleProduct } from "@/helper";
import Image from "next/image";
import React from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProductInformationPage({ searchParams }: Props) {
  const idString = searchParams?.id;
  const id = Number(idString);
  const productInfo = await getSingleProduct(id);
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {productInfo && (
        <div
          className="text-xl text-black w-full h-full flex items-center 
        justify-center"
        >
          <Image
            src={productInfo.image}
            alt={productInfo.title}
            width={400}
            height={400}
          />
          {productInfo.id}
          {productInfo.title}
        </div>
      )}
    </div>
  );
}
