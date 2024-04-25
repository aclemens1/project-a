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
      <body className={`font-sans ${inter.variable}`}>
        <Header />
        <Menu />
        <hr/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
