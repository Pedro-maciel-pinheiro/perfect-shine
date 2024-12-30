"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AuthCredentialsValidator,
  TypeAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { perfectshine_font } from "@/constant/font";

export default function SignInPage() {
 const [isSeller , setIsSeller] = React.useState(false)
 const [origin, setOrigin] = React.useState<string | null>(null);

 React.useEffect(() => {
   // Move URL parameter logic to useEffect
   const searchParams = new URLSearchParams(window.location.search);
   setIsSeller(searchParams.get("as") === "seller");
   setOrigin(searchParams.get("origin"));
 }, []);

 const {
   register,
   handleSubmit,
   formState: { errors },
 } = useForm<TypeAuthCredentialsValidator>({
   resolver: zodResolver(AuthCredentialsValidator),
 });

 const { mutate: signIn, isLoading } = trpc.auth.signIn.useMutation({
   onSuccess: () => {
     toast.success("Signed in successfully");

     // Use window.location for navigation
     setTimeout(() => {
       if (origin) {
         window.location.href = `/${origin}`;
         return;
       }

       if (isSeller) {
         window.location.href = "/sell";
         return;
       }

       window.location.href = "/";
     }, 100);
   },

   onError: (err) => {
     if (err.data?.code === "UNAUTHORIZED") {
       toast.error("Invalid email or password");
     }
   },
 });

 const onSubmit = ({ email, password }: TypeAuthCredentialsValidator) => {
   signIn({ email, password });
 };

 const continueAsSeller = () => {
   window.location.href = "?as=seller";
 };

 const continueAsBuyer = () => {
   window.location.href = "/sign-in";
 };







  return (
    <div className={`${perfectshine_font.className}`}>
      <div className="relative flex min-h-screen">
        <div className="loginPage-bg-image relative w-full bg-cover bg-center" />
        <div className="absolute z-10 mb-2 flex h-96 w-full items-center justify-center">
          <Image src={"/logo/logo-white.png"} alt="" width={380} height={380} />
        </div>

        <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center p-6">
          <div className="w-full max-w-sm space-y-6 rounded-lg border-2 bg-white p-8 shadow-lg">
            <h2 className={`text-center text-xl font-semibold text-gray-800`}>
              Sign-in to your {isSeller ? "seller" : "user"} account
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  className={cn({
                    "focus-visible:ring-red-500": errors.email,
                  })}
                  placeholder="you@exemple.com"
                />
                {errors?.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password")}
                  type="password"
                  className={cn({
                    "focus-visible:ring-red-500": errors.password,
                  })}
                  placeholder="*********"
                />
                {errors?.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <Button
                  disabled={isLoading}
                  className="mt-2 w-full rounded-md bg-red-500 py-2 text-white transition duration-200 hover:bg-red-700"
                >
                  Login
                </Button>
              </div>
            </form>
            <div className="flex items-center justify-around font-semibold">
              <Link
                href="#"
                className="w-28 text-sm transition-all duration-200 hover:-translate-y-1"
              >
                Forgot your password?
              </Link>
              <Link
                href="/sign-up"
                className="w-28 text-sm transition-all duration-200 hover:-translate-y-1"
              >
                Don&apos;t have an account ?
              </Link>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <span className="w-full border-t bg-background" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or
                </span>
              </div>
            </div>

            {isSeller ? (
              <Button
                onClick={continueAsBuyer}
                disabled={isLoading}
                className="w-full rounded-md bg-black py-2 text-white transition duration-200 hover:bg-red-700"
              >
                <p className="mt-1">Continue as customer</p>
              </Button>
            ) : (
              <Button
                onClick={continueAsSeller}
                disabled={isLoading}
                className="w-full rounded-md bg-black py-2 text-white transition duration-200 hover:bg-red-700"
              >
                <p className="mt-1">Continue as saller</p>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
