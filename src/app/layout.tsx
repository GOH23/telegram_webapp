import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/ui/global.css'
import Head from "next/head";
import Script from "next/script";
import { Header } from "./ui/header";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <Script src="https://telegram.org/js/telegram-web-app.js" />

      <body className={inter.className + " bg-stone-950"}>
        <Suspense>
          <Header />
          {children}
        </Suspense>

      </body>
    </html>
  );
}
