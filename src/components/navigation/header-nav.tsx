"use client";
import { useState } from "react";
import { LanguageSelector } from "../language/language-selector";

import { motion } from "framer-motion";
import { link_path } from "@/constant/link-path";
import { Link } from "@/navigation";
import Image from "next/image";
import clsx from "clsx";
import { ShoppingBasket } from "lucide-react";
import { CartTab } from "../cart/cart-tab";
import { perfectshine_font } from "@/constant/font";

export default function HeaderNavigation() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isNavHidden, setIsNavHidden] = useState(false);
  return (
    <>
      <motion.nav
        className={`${perfectshine_font.className} sticky top-0 z-20 hidden h-auto w-full flex-col items-center justify-center bg-black text-white md:flex`}
      >
        <div className="relative mx-auto flex h-14 max-w-2xl items-center justify-center rounded-xl">
          <ul className="flex max-w-2xl items-center justify-around gap-4 font-semibold">
            {link_path.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="relative"
                  onClick={() => setActiveSection(link.title)}
                >
                  <p>{link.title}</p>
                  {link.title === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className={clsx("rounded-full", {
                        "flex h-[3px] w-full bg-red-600":
                          activeSection === link.title,
                      })}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <nav className="absolute right-0 z-30 mx-2 flex h-14 w-36 items-center justify-center gap-3">
          <LanguageSelector />
          <CartTab />
        </nav>
      </motion.nav>
    </>
  );
}
