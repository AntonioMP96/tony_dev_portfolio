import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from '@/components'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antonio Martinez",
  description: "Desarrollador Fullstack"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen max-h-screen py-6 sm:py-8 lg:py-12 px-4 md:px-8 flex flex-col items-center">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
