import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Footer from "@/components/footer/footer";
import HeaderNavigation from "@/components/navigation/header-nav";

const anek = Anek_Devanagari({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perfect Shine",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} className={anek.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <HeaderNavigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
