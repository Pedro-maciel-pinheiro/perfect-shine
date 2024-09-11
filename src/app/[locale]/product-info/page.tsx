import { getSingleProduct } from "@/helper";
import { Link } from "@/navigation";
import Image from "next/image";
import React from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProductInformationPage({ searchParams }: Props) {
  const idString = searchParams?.id;
  const id = Number(idString);
  const productInfo = await getSingleProduct(id);

  if (!productInfo) {
    return (
      <div className="min-h-screen flex flex-col gap-1 items-center justify-center">
        <h3 className="text-3xl font-bold">Product not Found</h3>
        <Link
          href={"/"}
          className="transition-colors duration-300
         font-semibold hover:text-green-500"
        >
          <button
            className="border-2 rounded-lg mt-1 flex items-center
          p-2 shadow-md 
          "
          >
            <p className="mt-1"> Back to Main page</p>
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 max-w-7xl">
        {productInfo && (
          <div
            className="text-xl text-black w-full h-full flex items-center 
        justify-start "
          >
            <div className="grid grid-cols-2 gap-4  auto-rows-auto">
              {productInfo.extraImages.map((extraImages, index) => (
                <div
                  key={index}
                  className={`${index === 2 ? "col-span-2" : ""}`}
                >
                  <Image src={extraImages} alt="" width={785} height={300} className="rounded-md"/>
                </div>
              ))}
            </div>
          </div>
        )}

        <ul className="flex flex-col items-center
         justify-start font-medium text-black">
          {
            productInfo && (
              <li className="mx-auto flex flex-col gap-3">
                <h2 className="font-bold text-2xl">{productInfo.title}</h2>
                <h3 className="font-semibold text-gray-600 text-lg">{productInfo.subtitle}</h3>
                <p className="max-w-96">{productInfo.description}</p>

                <div className="flex gap-2 items-center text-red-500">
                  <h4>Price</h4>
                  <p>Usd:{productInfo.priceUSD}</p>
                  <p>Yen:{productInfo.priceYEN}</p>
                </div>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}
