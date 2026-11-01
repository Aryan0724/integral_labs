import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";
import ContactSidebar from "@/components/shared/ContactSidebar";

import { SITE_CONFIG } from "@/lib/site-config";
import { getOrganizationJsonLd, getWebSiteJsonLd, safeJsonLdReplacer } from "@/lib/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "Integral Labs | Custom Software, Web Platforms & Modern Search (SEO & AEO)",
    template: "%s | Integral Labs",
  },
  description:
    "Integral Labs is a custom software engineering and digital discoverability consultancy. We engineer scalable web platforms, bespoke business software, and organic & AI search architectures (SEO & AEO) that drive qualified business enquiries.",
  keywords: [
    "Custom Software Development",
    "Web Development",
    "Technical SEO",
    "Answer Engine Optimization",
    "AEO",
    "Next.js Engineering",
    "SaaS Systems",
    "AI Search Optimization",
  ],
  authors: [{ name: "Tanuj Pargai" }, { name: "Aryan Tiwari" }],
  creator: "Integral Labs",
  publisher: "Integral Groups",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: "Integral Labs",
    title: "Integral Labs | Custom Software, Web Platforms & Modern Search",
    description:
      "Custom software engineering and digital discoverability consultancy. Engineering Next.js web applications, bespoke business platforms, and organic & AI search architectures.",
    images: [
      {
        url: "/integral-logo-dark.png",
        width: 1200,
        height: 630,
        alt: "Integral Labs - Custom Software & Modern Search Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integral Labs | Custom Software, Web Platforms & Modern Search",
    description:
      "Custom software engineering and digital discoverability consultancy. Engineering Next.js web applications, bespoke business platforms, and organic & AI search architectures.",
    images: ["/integral-logo-dark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLdReplacer(getOrganizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLdReplacer(getWebSiteJsonLd()),
          }}
        />
      </head>
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
