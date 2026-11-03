import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { getBreadcrumbJsonLd, safeJsonLdReplacer } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Contact Integral Labs | Discuss Your Software or SEO Project",
  description:
    "Tell us about your web platform, custom software, or SEO/AEO project. Integral Labs responds within 24 hours with architectural feedback and initial estimates.",
  openGraph: {
    title: "Contact Integral Labs | Discuss Your Project",
    description:
      "Responses within 24 hours with architectural feedback and initial estimates. Email or submit a project brief.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Integral Labs | Discuss Your Project",
    description:
      "Responses within 24 hours with architectural feedback and initial estimates.",
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(breadcrumbJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
