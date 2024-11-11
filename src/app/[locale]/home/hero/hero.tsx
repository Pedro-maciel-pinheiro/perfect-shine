import React from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroPage() {
  const t = useTranslations("HomePage");
  return (
    <section className="flex w-full flex-col items-center justify-center bg-black">
      <div className="relative overflow-hidden">
        <span className="absolute flex h-full w-full items-center justify-center bg-black/50">
          <Image
            src={"/logo/logo-white.png"}
            alt="perfect-shine logo"
            width={800}
            height={800}
            className="mb-10"
          />
        </span>
        <video
          src="/video/main-page-video.mp4"
          autoPlay
          loop
          muted
          className="hidden object-cover lg:block"
        />

        <Image
          src={"/img/background-md-screen.jpg"}
          alt="background image mid screen"
          width={1000}
          height={1000}
          className="block lg:hidden"
        />
      </div>
    </section>
  );
}
