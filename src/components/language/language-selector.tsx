"use client";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export const LanguageSelector = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  const handleLanguageChange = (locale: string) => {
    setIsDropDownOpen(false);
    const newPath = `/${locale}${pathname.slice(3)}`;
    router.push(newPath);
  };

  return (
    <div className="relative h-9 w-16 rounded-md text-white">
      <div className="flex h-full w-full items-center rounded-md border border-black p-2 shadow-xl">
        <Languages size={25} />

        <button
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          className="flex h-full w-full items-center justify-center border-none bg-transparent text-sm font-bold"
        >
          <p className="mt-1">{currentLocale.toUpperCase()}</p>
        </button>
      </div>
      {isDropDownOpen && (
        <div className="absolute left-4 z-10 mt-4 shadow-lg">
          <ul className="flex flex-col gap-1 text-sm">
            <li
              onClick={() => handleLanguageChange("en-us")}
              className={`cursor-pointer rounded-md border border-white bg-black px-4 py-2 font-bold shadow-xl transition-colors duration-500 hover:bg-red-600 hover:text-black ${currentLocale === "en" ? "text-red-600" : ""}`}
            >
              EN
            </li>
            <li
              onClick={() => handleLanguageChange("jp")}
              className={`cursor-pointer rounded-md border border-white bg-black px-4 py-2 font-bold shadow-xl transition-colors duration-500 hover:bg-red-600 hover:text-black ${currentLocale === "jp" ? "text-red-600" : ""}`}
            >
              JP
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
