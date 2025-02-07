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
import ImageSlider from "@/components/custom/image-slider";
import { SectionHeader } from "@/components/section-header";

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
    <>
      <MaxWidthWrapper>
        <div className="flex h-full w-full flex-col items-start bg-white">
          <div className="mx-auto flex h-full w-full flex-col gap-4">
            <ol className="mx-2 mt-6 flex items-center text-black">
              <Breadcrumb
                paramsInfo={breadcrumbParams}
                productName={product.name}
              />
            </ol>
            <div className="relative min-h-screen">
              <div className="grid w-full content-between gap-2 md:grid-cols-2 lg:grid-cols-[60%,30%] lg:gap-8">
                <div className="hidden h-full md:block">
                  <div className="sticky top-20 pb-2">
                    <ImageCard url={validUrls} displayAllImages={true} />
                  </div>
                </div>
                <div className="mx-auto my-5 block md:hidden">
                  <ImageSlider url={validUrls} />
                </div>

                <div className="flex items-center justify-center text-black">
                  <section className="flex flex-col items-center gap-2">
                    <h1
                      className={`self-start text-3xl font-medium ${perfectshine_font.className}`}
                    >
                      {product.name}
                    </h1>
                    <h2
                      className={`self-start text-2xl font-medium text-gray-500 ${perfectshine_font.className}`}
                    >
                      {product.subtitle}
                    </h2>

                    <div className="flex items-center gap-2 self-start">
                      <p className="text-2xl">
                        {formatPrice(product.price, { currency: "USD" })}
                      </p>
                    </div>
                    <p className="self-start text-sm">
                      Shipping calculated at checkout.
                    </p>
                    <div className="group inline-flex items-center self-start">
                      <Shield
                        aria-hidden="true"
                        className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400"
                      />
                      <p className="mt-1 text-muted-foreground">
                        30 Day Return Guarantee
                      </p>
                    </div>

                    {/* add button */}

                    <AddToCartButton product={product} className="w-full" />

                    <ProductReel
                      title="Works well with"
                      href="/products"
                      className="grid grid-cols-2"
                      query={{ category: product.category, limit: 8 }}
                      subtitle={`similar high-quality product's just like ${product.name}`}
                    />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-2">
          <div
            className={`w-full max-w-screen-2xl ${perfectshine_font.className}`}
          >
            <SectionHeader
              title={"Product Details"}
              titleColor="text-white bg-black"
              spanColor="bg-white"
            />
            <div className="flex h-auto w-full flex-col items-center justify-center bg-black p-2 text-white">
              <h1 className="mb-2 self-start text-2xl md:text-3xl">
                How do I use STARTER KIT
              </h1>

              <p className="max-w-2xl self-start text-sm md:text-lg">
                Click on the individual product page to see Product Label,
                Safety Data Sheet, California Cleaning Right to Know, California
                Prop. 65, and Links to Designated List for each product.
              </p>
              <span className="my-4 flex h-[2px] w-full max-w-2xl self-start bg-white" />

              <h2 className="self-start">{product.name}</h2>
            </div>
          </div>
        </div>

        <div
          className={`relative flex justify-center ${perfectshine_font.className}`}
        >
          <div className="absolute z-10 mt-4 
           w-full max-w-screen-2xl p-3 text-xl md:text-4xl font-medium text-white">
            Just the essentials for a clean car.
          </div>
          <div className="relative flex h-96 md:min-h-screen w-full">
            <span className="productPage-bg-image w-full h-full "/>
          </div>
        </div>
      </section>

      
    </>
  );
}
