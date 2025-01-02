import React from "react";
import ProductReel from "@/components/product/product-reel";
import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Products() {
  return (
    <MaxWidthWrapper className="flex items-center justify-center">
      <ProductReel
        query={{ sort: "desc", limit: 40 }}
        title={"PRODUCTS LIST"}
        className={"grid md:grid-cols-2 lg:grid-cols-4"}
      />
    </MaxWidthWrapper>
  );
}
