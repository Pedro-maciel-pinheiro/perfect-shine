"use client";

import { trpc } from "@/trpc/client";
import { VerifyEmailTokenProps } from "@/types/type";
import { Loader2, MailCheck, MailSearch, MailX } from "lucide-react";
import Link from "next/link";
import { perfectshine_font } from "@/constant/font";

const VerifyEmail = ({ token }: VerifyEmailTokenProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });

  if (isError) {
    return (
      <div
        className={`relative mb-4 flex h-60 w-full flex-col items-center justify-center gap-2 px-2 text-white sm:h-80 ${perfectshine_font.className}`}
      >
        <MailX className="h-10 w-10 text-red-500 md:h-20 md:w-20" />
        <h3 className="text-2xl font-semibold">There was a problem </h3>
        <p className="text-lg font-medium">
          This token is not valid or might be expired. Please try again.
        </p>
      </div>
    );
  }

  if (data?.success) {
    return (
      <div
        className={`relative mb-4 flex h-60 w-full flex-col items-center justify-center gap-2 px-2 text-white sm:h-80 ${perfectshine_font.className}`}
      >
        <MailCheck className="h-10 w-10 text-green-500 md:h-20 md:w-20" />
        <h3 className="text-2xl font-semibold">Token validated</h3>
        <p className="text-lg font-medium">
          Thank you for verifying your email
        </p>
        <Link
          className="flex h-8 w-36 items-center justify-center rounded-lg border-2 border-green-500 bg-white text-center text-black transition-all active:-translate-y-1"
          href={"/sign-in"}
        >
          <p>Sign-in</p>
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        className={`relative mb-4 flex h-60 w-full flex-col items-center justify-center gap-2 px-2 text-white sm:h-80 ${perfectshine_font.className}`}
      >
        <div className="relative flex flex-col items-end justify-end">
          <Loader2 className="absolute h-10 w-10 animate-spin" />
          <MailSearch className="h-10 w-10 text-blue-500 md:h-20 md:w-20" />
        </div>
        <h3 className="text-2xl font-semibold">Verifying...</h3>
        <p className="text-lg font-medium">This won&apos;t take long</p>
      </div>
    );
  }
};

export default VerifyEmail;
