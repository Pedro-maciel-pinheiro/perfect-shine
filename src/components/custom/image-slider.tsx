"use client";
import React, { useEffect, useState } from "react";

import { ImagesSliderProps } from "@/types/type";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  activeStyles,
  inactiveStyles,
} from "@/components/custom/slider-button-style";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { perfectshine_font } from "@/constant/font";

const ImageSlider = ({ url }: ImagesSliderProps) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideconfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (url.length ?? 0) - 1,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (url.length ?? 0) - 1,
      });
    });
  }, [swiper, url]);

  return (
    <section className="group relative grid rounded-lg">
      <Swiper
        pagination={{
          renderBullet: (_, className) => {
            return `<span class="rounded-full transtion ${className}"></span>`;
          },
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={50}
        modules={[Pagination]}
        slidesPerView={1}
        className="h-full w-full"
      >
        {url.map((image, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <Image
              src={image}
              alt="Product Image"
              className="h-full w-full rounded-lg object-cover object-center"
              width={1000}
              height={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex h-20 w-full items-center justify-center gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slidePrev();
          }}
          className={cn("aspect-square h-8 w-8 rounded-full transition-all" ,{[inactiveStyles]:slideconfig.isBeginning})}
          disabled={slideconfig.isBeginning}
        >
          <ChevronLeft className="-mx-[2px] h-8 w-8 " />
        </button>
        <span
          className={`mt-1 flex w-20 items-center justify-center text-lg ${perfectshine_font.className}`}
        >
          {activeIndex + 1} {"/"} {url.length}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slideNext();
          }}
          className={cn("aspect-square h-8 w-8 rounded-full transition-all",{[inactiveStyles]:slideconfig.isEnd})}
          disabled={slideconfig.isEnd}
        >
          <ChevronRight className={"mx-[2px] h-8 w-8 "} />
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
