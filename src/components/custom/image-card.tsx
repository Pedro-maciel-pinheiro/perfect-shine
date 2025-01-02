import React from "react";
import Image from "next/image";
import { ImagesCardProps } from "@/types/type";



export const ImageCard = ({ url, displayAllImages }: ImagesCardProps) => {
  return (
    <section className="flex flex-col lg:grid  w-[90%] md:w-full max-w-4xl gap-2 mb-2 mx-auto">
      {displayAllImages
        ? url.map((imageUrl, index) => (
            <div key={index} className={`${index === 2 ? "lg:col-span-2" : ""}`}>
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
            <Image
              src={url[0]}
              
              alt={"product Image"}
              width={300}
              height={300}
              loading="eager"
              className="rounded-lg"
            />
          )}
    </section>
  );
};
