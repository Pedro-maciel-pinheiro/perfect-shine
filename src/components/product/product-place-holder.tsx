import React from "react";
import { Skeleton } from "../ui/skeleton";

export const ProductPlaceHolder = () => {
  return (
    <section className="flex  flex-col w-full h-auto">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-200">
        <Skeleton className="h-full w-full" />
      </div>
      <Skeleton className="mt-4 h-4 w-2/3 rounded-lg" />
      <Skeleton className="mt-2 h-4 w-16 rounded-lg" />
      <Skeleton className="mt-2 h-4 w-12 rounded-lg" />
    </section>
  );
};
