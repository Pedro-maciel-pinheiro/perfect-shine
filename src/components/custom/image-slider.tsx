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
    <section className="group relative aspect-square overflow-hidden rounded-lg bg-zinc-100">
      <div className="absolute inset-0 z-10 opacity-0 transition group-hover:opacity-100">
        <button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slideNext();
          }}
          aria-label="next image"
          className={cn(activeStyles, "right-3 transition", {
            [inactiveStyles]: slideconfig.isEnd,
            "hover:bg-primary-300 text-primary-800 opacity-100":
              !slideconfig.isEnd,
          })}
        >
          <ChevronRight className="h-4 w-4 text-zinc-700" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slidePrev();
          }}
          aria-label="previus image"
          className={cn(activeStyles, "left-3 transition", {
            [inactiveStyles]: slideconfig.isBeginning,
            "hover:bg-primary-300 text-primary-800 opacity-100":
              !slideconfig.isBeginning,
          })}
        >
          <ChevronLeft className="h-4 w-4 text-zinc-700" />
        </button>
      </div>
      <Swiper
        pagination={{
          renderBullet:(_, className) => {
            return `<span class="rounded-full transtion ${className}"></span>`
          }
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={50}
        modules={[Pagination]}
        slidesPerView={1}
        className="h-full w-full"
      >
        {url.map((image, index) => (
          <SwiperSlide key={index} className="relative z-10 h-full w-full">
            <Image
              src={image}
              alt="Product Image"
              className="-z-10 h-full w-full object-cover object-center"
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSlider;
