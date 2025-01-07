"use client";
import React from "react";
import { link_path } from "@/constant/link-path";
import Link from "next/link";
import { perfectshine_font } from "@/constant/font";
import { useActiveSectionContext } from "@/context/active-section";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Menu() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const animationDelay = 0.5;
  return (
    <section className="flex h-full w-full flex-col items-center justify-center">
      <div className="mb-2 mt-2">
        <h1
          className={`${perfectshine_font.className} rounded-lg p-2 text-7xl uppercase drop-shadow-2xl`}
        >
          Perfect-shine
        </h1>
      </div>

      <ul className={`z-10 mt-2 mb-2 flex items-center justify-center gap-5 font-semibold ${perfectshine_font.className}`}>
        {link_path.map((link, index) => (
          <li
            key={index}
            className="relative flex items-center text-gray-700 dark:text-gray-300"
          >
            <Link
              href={link.href}
              onClick={() => {
                setActiveSection(link.title), setTimeOfLastClick(Date.now());
              }}
              className={cn(`font-bold transition-colors duration-500`, {
                "text-black ": link.title === activeSection,
              })}
            >
              {link.title}
            </Link>
            {link.title === activeSection && (
              <motion.span
                layoutId="activeSection"
                transition={{ type: "spring", stiffness: 280, damping: 30 }}
                className="absolute mt-4 h-[2px] w-full rounded-full bg-black"
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
