import { perfectshine_font } from "@/constant/font";
import { ProductCardDisplayProps } from "@/types/type";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useCart } from "./use-cart";
import { formatPrice } from "@/lib/utils";

export const CartItemDisplay = ({
  product,
  quantity,
}: ProductCardDisplayProps) => {
  const { removeItem } = useCart();
  return (
    <section className="space-y-3 py-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded-lg">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="absolute object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary">
                <ImageIcon
                  aria-hidden="true"
                  className="h-4 w-4 text-gray-500"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col self-start">
            <p
              className={`mb-1 line-clamp-1 text-sm font-semibold ${perfectshine_font.className}`}
            >
              {product.title}
            </p>
            <p className="text-sm text-gray-500"> Quantity:{quantity}</p>

            <div className="mt-4 text-sm text-gray-500">
              <button
                onClick={() => removeItem(product.id)}
                className="flex items-center justify-center gap-0.5 transition-all active:-translate-y-1"
              >
                <X className="mb-1 h-4 w-3" />
                Remove
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-1 font-medium">
            <span className="ml-auto line-clamp-1 text-sm">
              {formatPrice(product.priceUSD || product.priceYEN)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};