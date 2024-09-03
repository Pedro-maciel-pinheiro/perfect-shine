import React from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroPage() {
  const t = useTranslations("HomePage");
  return (
    <section className="w-full min-h-screen flex flex-col items-center ">
      <h1
        className="text-[90px] underline-offset-3 text-black mt-10
        font-serif  underline mb-2"
      >
        Perfect-Shine
      </h1>

      <div className=" overflow-hidden relative">
        <span className="w-full h-full absolute bg-black/20">
          <span className="flex items-center justify-end ">
            <span className="bg-black/80 border-2 border-white rounded-lg
            text-white p-8 md:-mx-16 xl:-mx-20 md:mt-40 xl:mt-56">
              <h2 className="font-bold text-xl uppercase">AMMO products</h2>
              <p className="font-semibold">
                We only use AMMO products on our Detailing !
              </p>
            </span>
            <Image
              src={"/img/product_shots_1500x1500.webp"}
              alt="product ammo"
              width={350}
              height={350}
              className="z-10 "
            />
          </span>
        </span>
        <video
          src="/video/welcomeVideo.mp4"
          autoPlay
          loop
          muted
          className="w-screen max-w-[1920px] hidden lg:block"
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
