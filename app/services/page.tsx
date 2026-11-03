import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { getBreadcrumbJsonLd, getServicesJsonLd, safeJsonLdReplacer } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Services | Web Development, Custom Software, SEO & AEO",
  description:
    "Four co-equal service pillars: high-performance Next.js web development, bespoke SaaS & custom software, technical SEO with Core Web Vitals, and Answer Engine Optimization for ChatGPT, Perplexity and Claude citations.",
  openGraph: {
    title: "Services | Web Development, Custom Software, SEO & AEO",
    description:
      "Four co-equal service pillars: Next.js web development, bespoke SaaS software, technical SEO, and Answer Engine Optimization (AEO).",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Web Development, Custom Software, SEO & AEO",
    description:
      "Four co-equal service pillars: Next.js web development, bespoke SaaS software, technical SEO, and Answer Engine Optimization (AEO).",
  },
};

export default function ServicesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(getServicesJsonLd()) }}
      />
      <ServicesClient />
    </>
  );
}
