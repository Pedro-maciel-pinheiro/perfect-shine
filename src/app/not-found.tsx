"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HomeIcon, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="mx-4 w-full max-w-md">
        <CardContent className="pt-6">
          <div className="text-center">
            <h1 className="text-9xl font-extrabold text-gray-900">404</h1>

            <div className="mt-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                Page not found
              </h2>
              <p className="mt-4 text-gray-600">
                Sorry{","} we couldn{"'"}t find the page you{"'"}re looking for. Please
                check the URL or return home.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <Link href={"/"}>
                <Button
                  className="flex w-full items-center justify-center gap-2"
                  variant="default"
                >
                  <HomeIcon className="h-4 w-4" />
                  Return Home
                </Button>
              </Link>

              <Button
                onClick={handleGoBack}
                className="flex w-full items-center justify-center gap-2"
                variant="outline"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;
