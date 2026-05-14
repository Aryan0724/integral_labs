import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Scene from "@/components/visuals/Scene";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Integral Labs | Modern Software Engineering & Intelligent Automation",
  description: "Integral Labs develops high-performance web applications, SaaS platforms, machine learning systems, and automation infrastructure for startups and modern businesses.",
  keywords: "Web Development, SaaS Development, Machine Learning, Automation Systems, Software Engineering Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-black text-foreground selection:bg-white selection:text-black`}>
        <SmoothScrollProvider>
          <Scene />
          <div className="noise" />
          <Navbar />
          <main className="relative z-10">
            {children}
            <Footer />
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
