"use client"
import React from "react";
import { service_information } from "@/constant/hero-service-options";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";

export const HeroService = () => {
  const animationDelay = 0.5;
  return (
    <MaxWidthWrapper>
      <ul className="grid grid-cols-2 gap-4  lg:grid-cols-4">
        {service_information.map((service, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * animationDelay,
              duration: 0.5,
              damping: 15,
            }}
            viewport={{ once: true }}
          >
            <Link href={"/products"}>
              <div className="flex flex-col">
                <span className="overflow-hidden rounded-md">
                  <Image
                    src={service.img_src}
                    alt={service.title}
                    width={450}
                    height={350}
                    className="rounded-md transition-all duration-300 hover:scale-105"
                  />
                </span>
                <p className="mt-2 text-xl font-semibold">{service.title}</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </MaxWidthWrapper>
  );
};
