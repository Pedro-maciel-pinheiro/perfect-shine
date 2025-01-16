import React from "react";
import Image from "next/image";
import { ImagesCardProps } from "@/types/type";


export const ImageCard = ({
  product,
  url,
  displayAllImages,
}: ImagesCardProps) => {
  return (
    <section className="mx-auto mb-2 flex w-full max-w-4xl flex-col gap-2  lg:grid">
      {displayAllImages
        ? url.map((imageUrl, index) => (
            <div
              key={index}
              className={`${index === 2 ? "relative lg:col-span-2" : ""}`}
            >
              <Image
                src={imageUrl}
                alt={`Product Image ${index + 1}`}
                width={1085}
                height={300}
                loading="eager"
                className={`w-full rounded-lg ${index === 2 ? "lg:w-full" : ""}`}
              />
            </div>
          ))
        : url[0] && (
            <div className="overflow-hidden rounded-lg ">
              <Image
                src={url[0]}
                alt={"product Image"}
                width={300}
                height={300}
                loading="eager"
                className="rounded-lg hover:scale-105 transition-all duration-300"
              />
            </div>
          )}
    </section>
  );
};
