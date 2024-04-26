import "~/styles/globals.css";

import { Inter } from "next/font/google";

import Header from "~/components/header";
import Menu from "~/components/menu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Heaps Normal | Powered by Foboh",
  description: "Manage orders, customers, products, pricing, and freight.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 font-sans ${inter.variable} absolute inset-0 overflow-y-scroll`}>
        <div className="flex h-full">
          <div className="absolute inset-0 bottom-auto lg:w-64 lg:static lg:flex bg-white">
            <Menu isOpen={false} />
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-white">
              <Header />
            </div>
            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
