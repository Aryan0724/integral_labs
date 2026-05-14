import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Integral Labs | Modern Software Engineering & Intelligent Systems",
  description:
    "Integral Labs is a modern engineering and intelligent systems studio. We build scalable SaaS platforms, AI products, automation infrastructure, and premium digital interfaces.",
  keywords:
    "Software Engineering, SaaS, AI Products, Automation, Machine Learning, Frontend Systems, Product Design",
  openGraph: {
    title: "Integral Labs | Modern Software Engineering",
    description:
      "Modern engineering and intelligent systems studio focused on SaaS platforms, AI products, and automation infrastructure.",
    type: "website",
  },
};

import SmoothScroll from "@/components/shared/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="noise-overlay" />
        <Suspense fallback={null}>
          <SmoothScroll />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
