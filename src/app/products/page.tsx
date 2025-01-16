"use client";
import React from "react";
import ProductReel from "@/components/product/product-reel";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { SectionBannerCard } from "@/components/product/section-banner-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { currentparams } from "@/constant/current-params";

export default function Products() {
  const breadcrumbParams = [...currentparams];

  return (
    <MaxWidthWrapper className="flex max-w-7xl flex-col items-center justify-center">
      <Breadcrumb paramsInfo={breadcrumbParams} />
      <SectionBannerCard />
      <ProductReel
        query={{ sort: "desc", limit: 40 }}
        title={"PRODUCTS LIST"}
        className={"grid grid-cols-2 p-2 md:grid-cols-3 lg:grid-cols-4"}
      />
    </MaxWidthWrapper>
  );
}
