"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { linkPathProps, MenuProps } from "@/types/type";

export const NavigationLinks = ({ menu ,className }:MenuProps) => {
  const pathname = usePathname();
  return (
    <div className={`${className}`}>
      {menu.map((link: linkPathProps) => (
        <Link
          key={link.title}
          href={link.href}
          className={`text-sm font-medium ${
            pathname === link.href
              ? "border-b-2 border-red-600"
              : "text-white hover:border-b-2 hover:border-red-600"
          } transition-colors duration-200`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};
