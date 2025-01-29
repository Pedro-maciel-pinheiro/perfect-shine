import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer/footer";
import HeaderNavigation from "@/components/navigation/nav";
import Providers from "@/components/providers";
import { Toaster } from "sonner";
import { metadata_info } from "@/constant/meta";

const anek = Anek_Devanagari({ subsets: ["latin"] });

export const metadata = metadata_info
  

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={"en"}>
      <body className={`${anek.className}`}>
        <main className="relative flex flex-col">
          <Providers>
            <HeaderNavigation />
            <div className="min-h-screen flex-1 flex-grow">{children}</div>
            <Footer />
          </Providers>
        </main>
        <Toaster position="top-center"  />
      </body>
    </html>
  );
}
