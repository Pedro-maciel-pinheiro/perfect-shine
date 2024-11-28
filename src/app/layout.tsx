import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer/footer";
import HeaderNavigation from "@/components/navigation/header-nav";
import HomePage from "./home/page";
import Providers from "@/components/providers";
import { Toaster } from "sonner";

const anek = Anek_Devanagari({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perfect Shine",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={"en"} className="h-full">
      <body className={`relative h-full antialiased ${anek.className}`}>
        <main className="relative flex min-h-screen flex-col">
          <Providers>
            <HeaderNavigation />
            <div className="flex-1 flex-grow ">{children}</div>
            <Footer />
          </Providers>
        </main>
        <Toaster position="top-center" richColors/>
      </body>
    </html>
  );
}
