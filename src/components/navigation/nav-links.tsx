"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { link_path } from "@/constant/link-path";
import Link from "next/link";

export const NavigationLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-3">
      {link_path.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className={` text-sm font-medium ${
            pathname === link.href
              ? "border-b-2 border-red-600 "
              : "text-white hover:border-b-2 hover:border-red-600 "
          } transition-colors duration-200`}
        >{link.title}</Link>
      ))}
    </div>
  );
};
