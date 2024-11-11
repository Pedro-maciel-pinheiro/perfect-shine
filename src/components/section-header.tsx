"use client";
import { Aldrich } from "next/font/google";
import { motion } from "framer-motion";
import { SectionHeaderProps } from "@/types/type";

const source = Aldrich({ subsets: ["latin"], weight: "400" });

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${source.className} relative mx-auto mb-20 mt-20 flex items-center justify-center px-2 md:px-0`}
    >
      <span className="mt-8 h-[2px] w-full bg-black md:mt-0" />
      <h2 className="absolute flex w-96 justify-center bg-white text-xl font-semibold uppercase text-black md:text-xl">
        {title}
      </h2>
    </motion.div>
  );
};
