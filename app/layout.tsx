import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";
import ContactSidebar from "@/components/shared/ContactSidebar";

export const metadata: Metadata = {
  title: "Integral Labs | Custom Software, Web Platforms & Modern Search (SEO & AEO)",
  description:
    "Integral Labs is a custom software engineering and digital discoverability consultancy. We engineer scalable web platforms, bespoke business software, and organic & AI search architectures (SEO & AEO) that drive qualified business enquiries.",
  keywords:
    "Custom Software Development, Web Development, Technical SEO, Answer Engine Optimization, AEO, Next.js Engineering, SaaS Systems, AI Search Optimization",
  openGraph: {
    title: "Integral Labs | Custom Software, Web Platforms & Modern Search",
    description:
      "Custom software engineering and digital discoverability consultancy. Engineering Next.js web applications, bespoke business platforms, and organic & AI search architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Suspense fallback={null}>
          <SmoothScroll />
          <Navbar />
          <ContactSidebar />
          <main>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
