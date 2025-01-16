import React from "react";
import HeroPage from "./hero/hero";
import { HeroMidSection } from "./hero/hero-mid-section";
import { HeroDailyProduct } from "./hero/hero-daily-product";
import { SectionHeader } from "@/components/section-header";
import { HeroService } from "./hero/hero-service";

export default function HomePage() {
  return (
    <div className="mx-auto flex h-full w-full flex-col items-center">
      <HeroPage />
      <div className="max-w-screen-2xl p-2 md:p-8">
        <SectionHeader title={"What we use ?"} titleColor={"text-black bg-white"} spanColor={"bg-black"}  className="lg:my-14"/>
        <HeroMidSection />
        <SectionHeader title={"Bring it back to life"} titleColor={"text-black bg-white"} spanColor={"bg-black"}  className="lg:my-14"/>
        <HeroService />
        <SectionHeader title={"NEW  + FRESH"} titleColor={"text-black bg-white"} spanColor={"bg-black"} className="lg:my-14" />
        <HeroDailyProduct />
      </div>
    </div>
  );
}
