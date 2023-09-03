import React from "react";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";
import Image from "next/image";

export const metadata = {
  title: "Thread",
  description: "A next.js 13 meta thread application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <div className="flex w-full justify-center items-center min-h-screen flex-col">
            <Image
              src="./assets/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="mb-1"
            />
            <p className="text-light-2 font-bold mb-5">Thread</p>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
