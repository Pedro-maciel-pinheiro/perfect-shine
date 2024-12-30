import { cn } from "@/lib/utils";
import { MaxWidthWrapperProps } from "@/types/type";

import React from "react";

export default function MaxWidthWrapper({
  children,
  className,
}: MaxWidthWrapperProps) {
  return (
    <div className={cn("mx-auto w-full max-w-screen-2xl p-2 ", className)}>
      {children}
    </div>
  );
}
