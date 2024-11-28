"use client";
import React, { useEffect, useState } from "react";
import { ShoppingBasket } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/use-cart";
import { CartItemDisplay } from "@/components/cart/cart-item-display";
import { ScrollArea } from "@/components/ui/scroll-area";

export const CartTab = () => {
  const { items } = useCart();
  const itemCount = items.reduce((count , item) => count + item.quantity , 0)
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cartTotal = items.reduce(
    (total, { product , quantity}) => total + product.priceUSD || product.priceYEN,
    0,
  );

  const fee = 1;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center  gap-2 p-2">
        <span className="ml-2 mt-2 text-sm font-medium text-gray-400 group-hover:text-gray-800">
        {isMounted ? itemCount : 0}
        </span>
        <ShoppingBasket
          aria-hidden="true"
          className="gruop-hover:text-red-500 text-white"
          size={25}
        />
        {itemCount > 0 && (
          <div>
            <svg
              className="w-2 text-red-600"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 7.4 20"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.4,19.4v-13c0-0.1,0-0.2-0.1-0.3L7.2,6c-0.3-0.1-0.7-0.3-1-0.4C6.1,5.6,6.1,5.5,6,5.5
	c0,0,0-0.1-0.1-0.1c0-0.1,0-0.1-0.1-0.2l0,0c0,0,0,0,0.1-0.1v-2c0,0,0,0-0.1-0.1H5.2l0.1-0.1h2l0,0c0.1-0.1,0.1-0.2,0.1-0.3
	C7,1.9,6.6,1.1,6.1,0.4C6,0.2,5.7,0,5.5,0C5.2,0,0.4,0,0.4,0v1.3h1.1c0,0.1,0,0.1,0,0.1l0.3,0.2C1.6,2,1.4,2.3,1.2,2.6
	C1.1,2.7,1,2.9,0.8,3C0.6,3.2,0.3,3.4,0,3.5c0,0.1,0,0.2,0,0.2s0,0.1,0,0.2c0.5-0.1,0.9-0.4,1.3-0.7C1.4,3.1,1.5,3.1,1.6,3l0.1-0.1
	c0.3-0.3,0.5-0.7,0.7-1l0.8,0.5c0.1,0.1,0.2,0.2,0.2,0.3V3H2.8c0,0-0.1,0-0.1,0.1v2c0,0,0,0,0.1,0.1l0,0c0,0.1,0,0.1,0,0.2
	S2.7,5.5,2.7,5.5H2.6c-0.3,0.1-0.7,0.3-1,0.4C1.4,6,1.4,6.1,1.4,6.3v13c0,0.4,0.3,0.7,0.7,0.7l0,0h4.5C7.1,20.1,7.4,19.8,7.4,19.4"
              ></path>
            </svg>
          </div>
        )}
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <ScrollArea>
              <div className="flex w-full flex-col pr-6">
                {items.map(({ product , quantity }) => (
                  <CartItemDisplay key={product.id} product={product} quantity={quantity} />
                ))}
              </div>
            </ScrollArea>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>

                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(cartTotal + fee)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild className="mx-auto">
                  <Link
                    href={"/cart"}
                    className="flex h-12 w-[85%] items-center justify-center rounded-lg border-2 border-white bg-black text-white transition-all duration-300 hover:translate-x-1 hover:border-red-500"
                  >
                    <p className="mt-2 font-semibold">Continue to Checkout</p>
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div
                aria-hidden="true"
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src={"/img/empty.png"}
                  alt="empty cart image"
                  width={300}
                  height={300}
                />
                <p className="mt-8 text-xl font-bold">Your cart is empty</p>
                <SheetTrigger asChild>
                  <Link
                    href={"/products"}
                    className="font-semibold text-blue-500 hover:underline"
                  >
                    Back to Shop Page
                  </Link>
                </SheetTrigger>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
