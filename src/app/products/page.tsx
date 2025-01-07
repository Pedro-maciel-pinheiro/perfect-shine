"use client"
import React from "react";
import ProductReel from "@/components/product/product-reel";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { SectionBannerCard } from "@/components/product/section-banner-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { currentparams } from "@/constant/current-params";
import { useSectionInView } from "@/hooks/active-section-hook";

export default function Products() {
  const { ref } = useSectionInView("Products");
  const breadcrumbParams = [...currentparams];

  return (
    <div ref={ref}>
      <MaxWidthWrapper className="flex max-w-6xl flex-col items-center justify-center">
        <Breadcrumb paramsInfo={breadcrumbParams} />
        <SectionBannerCard />
        <ProductReel
          query={{ sort: "desc", limit: 40 }}
          title={"PRODUCTS LIST"}
          className={"grid md:grid-cols-2 lg:grid-cols-4"}
        />
      </MaxWidthWrapper>
    </div>
  );
}
