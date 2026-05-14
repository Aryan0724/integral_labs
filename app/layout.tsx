import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Scene from "@/components/visuals/Scene";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Integral Labs | Digital Product Studio & Engineering Intelligence",
  description: "Integral Labs is a premium digital studio crafting high-performance web applications, AI-driven systems, and industrial-grade automation for the next generation of founders.",
  keywords: "Software Engineering, AI Automation, Digital Studio, Web Development Agency, Product Design, SaaS Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased bg-[#0A0A0A] text-foreground selection:bg-purple-600 selection:text-white`}>
        <SmoothScrollProvider>
          <Scene />
          <div className="noise" />
          <Suspense fallback={null}>
            <Navbar />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </Suspense>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

