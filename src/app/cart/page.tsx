"use client";
import React, { useEffect, useState } from "react";
import { perfectshine_font } from "@/constant/font";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/components/cart/use-cart";
import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/constant/product-category";
import { Button } from "@/components/ui/button";
import { Loader2, X } from "lucide-react";
import { QuantityControls } from "@/components/cart/quantity-controls";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";

export default function Page() {
  const { items, removeItem, addItem } = useCart();

  const router = useRouter();

  const { mutate: createCheckoutSession, isLoading } =
    trpc.payment.createSession.useMutation({
      onSuccess: ({ url }) => {
        if (url) router.push(url);
      },
    });

  const productIds = items.map(({ product }) => product.id);

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cartTotal = items.reduce(
    (total, { product, quantity }) => total + product.price * quantity,
    0,
  );

  const fee = 15;

  return (
    <MaxWidthWrapper>
      <div className={`bg-white`}>
        <div className="pb24 mx-auto flex max-w-2xl flex-col items-center justify-center px-4 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1
            className={`${perfectshine_font.className} text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`}
          >
            Shopping Cart
          </h1>
          <div
            className={
              items.length === 0
                ? "mt-10"
                : "mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
            }
          >
            <div
              className={cn("lg:col-span-7", {
                "rounded-lg border-2 border-dashed border-zinc-200 p-12":
                  items.length === 0,
              })}
            >
              <h2 className="sr-only">Items in your shopping cart</h2>

              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center space-y-1">
                  <div
                    aria-hidden="true"
                    className="relative mb-4 h-56 w-56 text-muted-foreground"
                  >
                    <Image
                      src={"/img/empty.png"}
                      alt="empty cart Image"
                      fill
                      sizes="auto"
                      priority
                      loading="eager"
                    />
                  </div>
                  <h3 className="text-center text-xl text-muted-foreground">
                    Your cart is empty
                  </h3>
                  <Link
                    href={"/products"}
                    className="font-medium text-blue-500 underline"
                  >
                    Return to products page
                  </Link>
                </div>
              ) : null}
              <ul
                className={cn({
                  "divide-y divide-gray-200 border-b border-t border-gray-200":
                    items.length > 0,
                })}
              >
                {items.map(({ product, quantity }) => {
                  const label = PRODUCT_CATEGORIES.find(
                    (lab) => lab.value === product.category,
                  )?.label;
                  const { image } = product.images[0];

                  return (
                    <li key={product.id} className="flex py-6 sm:py-10">
                      <div className="flex-shrink-0">
                        <div className="relative h-24 w-24">
                          {typeof image !== "string" && image.url ? (
                            <Image
                              src={image.url}
                              alt="product Image"
                              fill
                              className="h-full w-full rounded-lg object-cover object-center sm:h-48 sm:w-48"
                            />
                          ) : null}
                        </div>
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <Link
                                  className="font-medium text-gray-700 hover:text-gray-800"
                                  href={`/product-info/${product.id}`}
                                >
                                  {product.name}
                                </Link>
                              </h3>
                            </div>
                            <div className="mt-1 flex gap-1 text-sm font-medium text-gray-700 hover:text-gray-800">
                              <p>Category: </p>
                              <p>{label}</p>
                            </div>
                            <p className="mt-1 text-sm font-medium text-gray-900">
                              {formatPrice(product.price)}
                            </p>
                          </div>
                          <div className="mt-4 w-20 sm:mt-0 sm:pr-9">
                            <div className="absolute right-0 top-0 -my-3">
                              <Button
                                aria-label="Remove product"
                                onClick={() => removeItem(product.id)}
                                variant={"ghost"}
                              >
                                <X className="h-6 w-6" aria-hidden="true" />
                              </Button>
                            </div>
                            <div className="absolute right-0 top-12">
                              <QuantityControls
                                quantity={quantity}
                                onIncrease={() => addItem(product)}
                                onDecrease={() => removeItem(product.id)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            {items.length > 0 ? (
              <section className="mt-16 rounded-lg bg-gray-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  Order summary
                </h2>
                <div className="mt-6 space-y-4 font-medium">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-800">Subtotal:</p>
                    <p className="text-sm font-medium text-gray-900">
                      {isMounted ? (
                        formatPrice(cartTotal)
                      ) : (
                        <Loader2 className="h-4 w-4 animate-spin duration-1000" />
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-800">
                      Transport:
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {isMounted ? (
                      formatPrice(fee)
                    ) : (
                      <Loader2 className="h-4 w-4 animate-spin duration-1000" />
                    )}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <p className="text-base font-semibold text-gray-900">
                    Order Total:
                  </p>
                  <div className="text-base font-medium text-gray-900">
                    {isMounted ? (
                      formatPrice(fee + cartTotal)
                    ) : (
                      <Loader2 className="h-4 w-4 animate-spin duration-1000" />
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    disabled={items.length === 0 || isLoading}
                    onClick={() => createCheckoutSession({ productIds })}
                    className="flex h-12 w-full items-center justify-center rounded-lg border-2 border-white bg-black text-white transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-black"
                  >
                    <p className="mt-2 text-lg font-semibold">
                      {isLoading ? (
                        <Loader2 className="mr-1.5 h-4 w-4 animate-spin duration-1000" />
                      ) : (
                        <p>Checkout</p>
                      )}
                    </p>
                  </Button>
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
