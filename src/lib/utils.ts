import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "JPY" | "EUR";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {},
) {
  const { currency = "USD", notation = "compact" } = options;
  
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  const locales = currency === "JPY" ? "ja-JP":"en-US"

  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency,
    notation:currency === "JPY" ? "standard" :notation,
    maximumFractionDigits: currency === "JPY" ? 0 : 2,
  }).format(numericPrice);
}
