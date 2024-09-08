import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/ui/global.css'
import Head from "next/head";
import Script from "next/script";
import { Header } from "./ui/header";
import { Suspense } from "react";

import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const AuthProvider = dynamic(() => import("@/app/ui/server_api/auth_context"), { ssr: false })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive"
        />
      </Head>
      <body className={inter.className + " bg-stone-950"}>
        <Suspense>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </Suspense>

      </body>
    </html>
  );
}
