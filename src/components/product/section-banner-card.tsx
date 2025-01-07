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
  console.log(sectionImage.description);
  return (
    <section>
      <div className="grid md:grid-cols-2 ">
        <div className="h-full w-full">
          <Image
            src={validUrls[0]}
            alt={sectionImage.title || "Banner image"}
            width={1920}
            height={1080}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-2 bg-black uppercase text-white">
          <div className="mx-12 my-10 flex flex-col items-center justify-center md:my-0">
            <h2 className="text-3xl font-semibold">{sectionImage.title}</h2>
            <p className="mx-1 max-w-96 self-start text-sm font-medium">
              {sectionImage.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
