import React from "react";
import Image from "next/image";
import { ImagesCardProps } from "@/types/type";



export const ImageCard = ({ url, displayAllImages }: ImagesCardProps) => {
  return (
    <section className="grid   w-full max-w-4xl gap-2 mb-2">
      {displayAllImages
        ? url.map((imageUrl, index) => (
            <div key={index} className={`${index === 2 ? "md:col-span-2" : ""}`}>
              <Image
                src={imageUrl}
                alt={`Product Image ${index + 1}`}
                width={1085}
                height={300}
                loading="eager"
                className={`rounded-lg ${index === 2 ? "md:w-full" : ""}`}
              />
            </div>
          ))
        : url[0] && (
            <Image
              src={url[0]}
              
              alt={"product Image"}
              width={500}
              height={500}
              loading="eager"
              className="max-w-56 rounded-lg mx-auto flex items-center justify-center"
            />
          )}
    </section>
  );
};
