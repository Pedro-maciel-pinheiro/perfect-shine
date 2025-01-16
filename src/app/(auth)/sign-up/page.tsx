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
import { ZodError } from "zod";
import { useRouter } from "next/navigation";
import { perfectshine_font } from "@/constant/font";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({
    onError: (err) => {
      if (err.data?.code === "CONFLICT") {
        toast.error("This email is already in use. Sign in instead ?");
        return;
      }

      if (err instanceof ZodError) {
        toast.error(err.issues[0].message);
        return;
      }

      toast.error("Something went wrong. Please try again.");
    },
    onSuccess: () => {
      toast.success(`User Registered. Please sign-in`);
      router.push("/sign-in");
    },
  });

  const onSubmit = ({ email, password }: TypeAuthCredentialsValidator) => {
    mutate({ email, password });
  };

  return (
    <>
      <div className={`${perfectshine_font.className} text-black`}>
        <div className="relative flex min-h-screen">
          <div className="registerPage-bg-image relative  w-full bg-cover bg-center lg:block" />

          <div className="absolute z-10 mb-2 flex h-[450px] w-full items-center justify-center">
            <Image
              src={"/logo/logo-white.png"}
              alt=""
              width={380}
              height={380}
            />
          </div>
          <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center p-6 ">
            <div className="w-full max-w-sm space-y-6 rounded-lg border-2 bg-white/95 p-8 shadow-lg ">
              <h2 className={`text-center text-xl font-semibold `}>
                Register
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col  gap-2"
              >
                <div>
                  <Label htmlFor="email" className="font-semibold">Email</Label>
                  <Input
                    {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="you@exemple.com"
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="password" className="font-semibold">Password</Label>
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
              <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <span className="w-full border-t bg-background" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className=" px-2 text-muted-foreground">
                  or
                </span>
              </div>
            </div>

            <Link href={"/sign-in"} className="font-medium w-full flex items-center justify-center hover:underline ">
             Already have an account ?
            </Link>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
