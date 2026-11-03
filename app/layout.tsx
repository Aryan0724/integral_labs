import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";
import ContactSidebar from "@/components/shared/ContactSidebar";
import Analytics from "@/components/shared/Analytics";

import { SITE_CONFIG } from "@/lib/site-config";
import { getOrganizationJsonLd, getWebSiteJsonLd, safeJsonLdReplacer } from "@/lib/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default:
      "Integral Labs | Software Development Company in Uttarakhand (SEO & AEO)",
    template: "%s | Integral Labs",
  },
  description:
    "Integral Labs is a custom software engineering and search discoverability company based in Bhimtal, Uttarakhand. We serve Dehradun, Haldwani, Rudrapur, Nainital & the world with scalable Next.js platforms, bespoke business software, and SEO & AEO architectures.",
  keywords: [
    "software development company in Uttarakhand",
    "web development company in Dehradun",
    "app development company in Haldwani",
    "software development company in Rudrapur",
    "website designing company in Nainital",
    "custom software development",
    "Technical SEO",
    "Answer Engine Optimization",
    "AEO agency",
    "Next.js Development",
  ],
  authors: [{ name: "Integral Labs Engineering Collective" }],
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Integral Labs | Custom Software, Web Platforms & Modern Search",
    description:
      "Custom software engineering and digital discoverability consultancy. Engineering Next.js web applications, bespoke business platforms, and organic & AI search architectures.",
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
  // Site-owner verification: populated via env vars on the hosting platform.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : {},
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
        <Analytics />
      </body>
    </html>
  );
}
