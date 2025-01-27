"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu as Menubar } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { linkPathProps, MenuProps } from "@/types/type";
import { cn } from "@/lib/utils";
import { perfectshine_font } from "@/constant/font";

export default function NavMobile({ menu }: MenuProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-500 transition-colors lg:hidden">
          <Menubar className="h-8" />
        </SheetTrigger>

        <SheetContent side={"left"} className={`bg-black/80 text-white  ${perfectshine_font.className}`}>
          <SheetHeader className="flex flex-col gap-2">
            <SheetTitle className="flex gap-2 items-center mt-4">
              <Image
                src={"/logo/logo-2.png"}
                alt="logo Image"
                width={500}
                height={500}
                className="w-14"
              />
              <p className=" text-white text-xl">PERFECT-SHINE </p>
              
            </SheetTitle>
          </SheetHeader>
          {menu.length ? (
            <ul className="mt-8 flex w-full flex-col mx-2 ">
              {menu.map((item: linkPathProps) => (
                <li
                  className={cn(
                    "py-2 text-xl text-white transition-colors border-b " ,
                    pathname === item.href ? "text-red-500":"",
                  )}
                  key={item.title}
                >
                  <Link
                    href={item.href}
                    prefetch={true}
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </SheetContent>
      </Sheet>
    </>
  );
}
