import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "내 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Navigation />

        <main className="pt-16">{children}</main>

        <footer className="border-t border-gray-800 py-8 mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
            <p>2025 Jeong Grius - All rights reserved</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
