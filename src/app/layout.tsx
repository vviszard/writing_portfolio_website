import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Vishwas Paliwal — Portfolio",
    template: "%s | Vishwas Paliwal",
  },
  description: "Writer with Visual Instincts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`}>
      <body className="min-h-screen bg-white text-black antialiased">
        <Sidebar />
        <MobileNav />
        <main className="md:ml-[200px]">{children}</main>
      </body>
    </html>
  );
}
