import VerifyEmail from "@/components/verify-email";
import { perfectshine_font } from "@/constant/font";
import { searchParamsProps } from "@/types/type";
import { Mail } from "lucide-react";
import React from "react";

const VerifyEmailPage = ({ searchParams }: searchParamsProps) => {
  const token = searchParams.token;
  const toEmail = searchParams.to;
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center  lg:px-0 mx-auto emailPage-bg-image ">
      <div className="mx-auto flex w-[95%] flex-col justify-center space-y-6 sm:w-[600px] bg-black/80 rounded-lg shadow-xl border-2 border-gray-500">
        {token && typeof token === "string" ? (
          <div>
            <VerifyEmail token={token}/>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center space-y-1">
            <div className={`relative mb-4 h-60 sm:h-80 w-full text-white flex flex-col items-center justify-center px-2 gap-2 ${perfectshine_font.className}`}>
              <Mail className="text-white w-10 md:w-20 h-10 md:h-20" />
              <h3 className="text-2xl mb:text-3xl font-semibold">Check your email</h3>
              {toEmail ? (
                <p className="text-center text-lg  md:text-xl font-medium">
                  We&apos;ve sent a verification link to{" "}
                  <span className="font-semibold">{toEmail}</span>.
                </p>
              ) : (
                <p className="text-center text-lg  md:text-xl font-medium">
                  {" "}
                  We&apos; sent a verification link to your email.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default VerifyEmailPage;
