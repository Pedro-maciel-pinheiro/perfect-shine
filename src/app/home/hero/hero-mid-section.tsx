"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MaxWidthWrapper from "@/components/max-width-wrapper";

export const HeroMidSection = () => {
  const animationDelay = 0.5;
  return (
    <MaxWidthWrapper className="">
      <div className="mx-auto grid h-auto w-full max-w-5xl items-center lg:grid-cols-2">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: animationDelay }}
          viewport={{ once: true }}
        >
          <Image
            src={"/img/product_shots_1500x1500.webp"}
            alt={"product Image"}
            width={1500}
            height={1500}
            className="mx-auto w-56 md:w-72 lg:w-[70%]"
          />
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: animationDelay }}
          viewport={{ once: true }}
          className="p-3 text-xl text-black"
        >
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold uppercase">AMMO products</h1>
            <h2>Drive + Protect</h2>
          </div>
          <h2 className="my-2 font-medium">
            We only use AMMO products on our Detailing !
          </h2>
          <p className="text-justify font-medium">
            AMMO NYC has always been about the drive. The drive to make
            detailing accessible to everyone. To make it enjoyable. But the most
            important drive is always the one you take after that next wash.
          </p>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};
