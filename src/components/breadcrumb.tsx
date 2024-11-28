import React from "react";
import { currentparams } from "@/constant/current-params";
import { BreadcrumbProps } from "@/types/type";
import Link from "next/link";

export const Breadcrumb = ({ paramsInfo }: BreadcrumbProps) => {
  return (
    <ol className="flex w-full max-w-7xl items-start space-x-2">
      {paramsInfo.map((breadcrumb, index) => (
        <li key={breadcrumb.name}>
          <div className="flex items-center text-sm">
            {breadcrumb.id === 3 ? (
              <>
                <span className="cursor-default text-lg font-medium text-gray-500">
                  {breadcrumb.name}
                </span>
              </>
            ) : (
              <>
                <Link
                  className="text-lg font-medium text-gray-500 hover:text-gray-900"
                  href={breadcrumb.href}
                >
                  {breadcrumb.name}
                </Link>
              </>
            )}

            {index !== currentparams.length + 0 ? (
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="ml-2 h-5 w-5 flex-shrink-0 text-gray-500"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
};
