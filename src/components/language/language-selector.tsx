"use client";
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
    <div className="relative w-12 h-9 bg-black rounded-md">
      <button
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        className=" flex items-center justify-center 
         bg-transparent font-bold border-none text-sm w-full h-full"
      >
        <p className="mt-1">{currentLocale.toUpperCase()}</p>
      </button>

      {isDropDownOpen && (
        <div className="absolute right-0 mt-2   shadow-lg z-10 ">
          <ul className="flex flex-col text-sm gap-1  ">
            <li
              onClick={() => handleLanguageChange("en")}
              className={`hover:bg-red-500 bg-black rounded-md hover:text-black transition-colors duration-500 px-4 py-2 cursor-pointer 
             font-bold  ${
               currentLocale === "en" ? "text-red-500" : ""
             }`}
            >
              EN
            </li>
            <li
              onClick={() => handleLanguageChange("jp")}
              className={`hover:bg-red-500 bg-black rounded-md hover:text-black transition-colors duration-500 px-4 py-2 cursor-pointer 
             font-bold ${
               currentLocale === "jp" ? "text-red-500 " : ""
             }`}
            >
              JP
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
