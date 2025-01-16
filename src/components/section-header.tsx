"use client";
import { motion } from "framer-motion";
import { SectionHeaderProps } from "@/types/type";
import Image from "next/image";
import { perfectshine_font } from "@/constant/font";


export const SectionHeader = ({ title ,spanColor,titleColor , className}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${perfectshine_font.className} 
      relative mx-auto  flex w-full items-center justify-center  md:px-0 ${className}`}
    >
      <Image
        src={"/logo/logo-2.png"}
        alt="logo Image"
        width={500}
        height={500}
        className="w-16"
      />

      <span className={`mt-8 h-[2px] w-full  md:mt-0 ${spanColor}`} />
      <h2 className={`absolute flex md:w-96 justify-center 
        text-xl font-semibold uppercase  md:text-xl ${titleColor}`}>
        {title}
      </h2>
    </motion.div>
  );
};
