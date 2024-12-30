import React from "react";
import ProductReel from "@/components/product/product-reel";


export default function Products() {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <ProductReel query={{ sort: "desc", limit: 4 }} />
      </div>
    </div>
  );
}
