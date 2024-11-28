import React from "react";
import HeroPage from "./hero/hero";
import { HeroMidSection } from "./hero/hero-mid-section";
import { HeroDailyProduct } from "./hero/hero-daily-product";

export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <HeroPage />
      <HeroMidSection />
      <HeroDailyProduct />
    </div>
  );
}
