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
      <div className="flex min-h-screen bg-gray-100">
        <div className="loginPage-bg-image relative hidden w-1/2 bg-cover bg-center lg:block" />

        <div className="mt-10 flex w-full flex-col items-center justify-center bg-gray-100 p-6 lg:w-1/2">
          <div className="mb-2">
            <Image
              src={"/logo/logo-original.png"}
              alt=""
              width={380}
              height={380}
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-sm space-y-6 rounded-lg bg-white p-8 shadow-lg"
          >
            <h2 className="text-center text-2xl font-semibold text-gray-800">
              Login
            </h2>

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
              <Button className="w-full rounded-md bg-red-500 py-2 text-white transition duration-200 hover:bg-red-700">
                Login
              </Button>
            </div>

            <div className="text-center font-medium">
              <a href="#" className="text-sm hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
