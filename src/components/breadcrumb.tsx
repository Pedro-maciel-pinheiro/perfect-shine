import React from "react";
import Link from "next/link";
import { BreadcrumbProps } from "@/types/type";
import { perfectshine_font } from "@/constant/font";

export const Breadcrumb = ({ paramsInfo, productName }: BreadcrumbProps) => {
  return (
    <ol
      className={`flex w-full flex-col md:max-w-7xl md:flex-row md:space-x-2 ${perfectshine_font.className}`}
    >
      {paramsInfo.map((breadcrumb, index) => (
        <li key={breadcrumb.name}>
          <div className="flex items-center text-sm text-black">
            {breadcrumb.id === 3 ? (
              <span className="cursor-default text-lg font-medium text-gray-500">
                 <span className="h-[2px] rounded-full w-full bg-black/80 block md:hidden" />
                {breadcrumb.name}
              </span>
            ) : (
              <Link
                className="flex flex-col text-lg font-medium text-gray-500 hover:text-gray-900"
                href={breadcrumb.href!}
              >
                {breadcrumb.name}
                <span className="h-[2px] rounded-full w-full bg-black/80 block md:hidden" />
              </Link>
            )}

            {index !== paramsInfo.length - 1 && (
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="ml-2 hidden h-5 w-5 flex-shrink-0 text-gray-500 md:block"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            )}
          </div>
        </li>
      ))}
      {productName && (
        <li className="flex items-center text-sm">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="ml-2 hidden h-5 w-5 flex-shrink-0 text-gray-500 md:block"
          >
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
          </svg>
          <span className="cursor-default text-lg font-medium text-gray-500 md:ml-2">
            {productName}
          </span>
        </li>
      )}
    </ol>
  );
};
