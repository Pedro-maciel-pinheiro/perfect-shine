"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";

export default function HeroPage() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-black">
      <div className="relative overflow-hidden">
        <div className="absolute flex h-full w-full items-center justify-center bg-black/80">
          <motion.span
            variants={slideInFromBottom(0)}
            whileInView={"visible"}
            initial="hidden"
            viewport={{ once: true }}
            className="flex h-full w-full items-center justify-center"
          >
            <Image
              src={"/logo/logo-white.png"}
              alt="perfect-shine logo"
              width={800}
              height={800}
              className="mb-16 p-8 lg:p-0 lg:w-[800px]"
            />
          </motion.span>
        </div>
        <video
          src="/video/main-page-video.mp4"
          autoPlay
          loop
          muted
          className="object-cover  w-full  min-h-96"
        />
      </div>
    </section>
  );
}
