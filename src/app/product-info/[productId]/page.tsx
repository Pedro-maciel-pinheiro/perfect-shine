import React from "react";
import { singleProductProps } from "@/types/type";
import { Breadcrumb } from "@/components/breadcrumb";
import { currentparams } from "@/constant/current-params";
import { getPayloadClient } from "@/get-payload";
import { notFound } from "next/navigation";

import { perfectshine_font } from "@/constant/font";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { formatPrice } from "@/lib/utils";
import { Shield } from "lucide-react";

import { AddToCartButton } from "@/components/button/add-to-cart-button";
import { ImageCard } from "@/components/custom/image-card";
import ProductReel from "@/components/product/product-reel";

export default async function page({ params }: singleProductProps) {
  const { productId } = params;
  const payload = await getPayloadClient();
  const { docs: products } = await payload.find({
    collection: "products",
    limit: 1,
    where: {
      id: {
        equals: productId,
      },
      approvedForSale: {
        equals: "approved",
      },
    },
  });

  const [product] = products;

  const validUrls = product.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  if (!product) return notFound();

  const breadcrumbParams = [...currentparams];
  return (
    <MaxWidthWrapper>
      <div className="flex h-full w-full flex-col items-start bg-white">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4">
          <ol className="mx-2 mt-6 flex items-center text-black">
            <Breadcrumb
              paramsInfo={breadcrumbParams}
              productName={product.name}
            />
          </ol>
          <div className="grid h-full w-full content-between gap-2 p-2 md:grid-cols-2">
            <div className="">
              <ImageCard url={validUrls} displayAllImages={true} />
            </div>

            <div className="flex w-full items-center justify-center  p-1 text-black bg-slate-200">
              <section className="flex flex-col items-center gap-2 p-1 w-[80%] bg-red-100">
                <h1
                  className={`text-3xl font-medium ${perfectshine_font.className}`}
                >
                  {product.name}
                </h1>
                <h2
                  className={`text-2xl font-medium text-gray-300 ${perfectshine_font.className}`}
                >
                  {product.subtitle}
                </h2>
                <div className="flex items-center gap-2">
                  <p className="text-2xl">
                    {formatPrice(product.price, { currency: "USD" })}
                  </p>
                  <span>{"/"}</span>
                  <p className="text-2xl"></p>
                </div>
                <p className="text-sm">Shipping calculated at checkout.</p>
                <div className="group inline-flex items-center">
                  <Shield
                    aria-hidden="true"
                    className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400"
                  />
                  <p className="mt-1 text-muted-foreground">
                    30 Day Return Guarantee
                  </p>
                </div>

                {/* add button */}

                <AddToCartButton
                  product={product}
                  className="w-full md:w-[80%]"
                />

                <ProductReel
                  title="Works well with"
                  href="/products"
                  className="grid grid-cols-2"
                  query={{ category: product.category, limit: 4 }}
                  subtitle={`similar high-quality product's just like ${product.name}`}
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
