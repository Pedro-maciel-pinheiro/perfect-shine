"use client";
import React from "react";
import Image from "next/image";
import { service_information } from "@/constant/hero-service-options";
import Link from "next/link";
import { motion } from "framer-motion";

import { SectionHeader } from "../../../../components/section-header";

export const HeroMidSection = () => {
  const animationDelay = 0.5;
  return (
    <motion.div className="relative h-auto max-w-[90%] lg:max-w-[1400px]">
      <SectionHeader title={"What we use ?"} />
      <div className="mx-auto grid h-auto w-full max-w-5xl items-center md:grid-cols-2">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: animationDelay }}
          viewport={{ once: true }}
        >
          <Image
            src={"/img/product_shots_1500x1500.webp"}
            alt={"product Image"}
            width={300}
            height={300}
            className=""
          />
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: animationDelay }}
          viewport={{ once: true }}
          className="text-xl text-black"
        >
          <h2 className="text-3xl font-bold uppercase">AMMO products</h2>
          <h2 className="font-medium">
            We only use AMMO products on our Detailing !
          </h2>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            veritatis, magni incidunt tempore, unde dolorem ipsam molestias
            labore obcaecati alias id assumenda expedita voluptates sit vitae
            natus. Numquam, est animi.
          </p>
        </motion.div>
      </div>
      <SectionHeader title={"Bring it back to life"} />
      <ul className="grid grid-cols-2 gap-4 px-2 lg:grid-cols-4">
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
            <Link href={""}>
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
    </motion.div>
  );
};
