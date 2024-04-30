"use client"

import "~/styles/globals.css";

import { Inter } from "next/font/google";

import Header from "~/components/header";
import Menu from "~/components/menu";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const metadata = { 
  title: "Heaps Normal | Powered by Foboh",
  description: "Manage orders, customers, products, pricing, and freight.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
      const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
      return (
        <html lang="en">
          <body className={`bg-gray-100 font-sans ${inter.variable} absolute inset-0 overflow-y-scroll z-10`}>
            <div className="flex h-full">
              <div className="absolute inset-0 rounded-b-xl lg:rounded-0 bottom-auto lg:w-64 lg:static lg:flex bg-white">
                <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
              </div>
              <div className="flex flex-col flex-1">
                <div>
                  <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </div>
                <main className="flex-1 p-5">
                  {children}
                </main>
              </div>
            </div>
          </body>
        </html>
    )}
