"use client";
import React from "react";
import { trpc } from "@/trpc/client";
import Image from "next/image";

export const SectionBannerCard = () => {
  const { data: banners, isLoading } = trpc.getBanners.useQuery({
    limit: 1,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!banners || banners.length === 0) {
    return <>Banner not Found!</>;
  }

  const sectionImage = banners[0];

  const validUrls = sectionImage.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  if (validUrls.length === 0) {
    return <div>No valid images available</div>;
  }
  
  return (
    <section className="h-full w-full p-2">
      <div className="mb-10 mt-10 grid md:gap-2 md:grid-cols-2">
        <Image
          src={validUrls[0]}
          alt={sectionImage.title || "Banner image"}
          width={1500}
          height={1500}
          className="h-80 md:rounded-s-lg object-cover object-center"
        />
        <div className="flex max-h-80 w-full items-center justify-center gap-2 md:rounded-e-lg bg-black uppercase text-white">
          <div className="mx-12 my-10 flex flex-col items-center justify-center md:my-0">
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-3xl font-semibold">{sectionImage.title}</h2>
              <p className="mx-1 self-start text-sm font-medium">
                {sectionImage.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
