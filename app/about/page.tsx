import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { getBreadcrumbJsonLd, safeJsonLdReplacer } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "About Integral Labs | Engineering & Search Collective",
  description:
    "Integral Labs is the custom software engineering and discoverability division of Integral Groups, operating from India. We build web platforms, bespoke business software, and Technical SEO / AEO systems as co-equal disciplines.",
  openGraph: {
    title: "About Integral Labs | Engineering & Search Collective",
    description:
      "The custom software engineering and digital discoverability division of Integral Groups. Software and search built as equal disciplines.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Integral Labs | Engineering & Search Collective",
    description:
      "The custom software engineering and digital discoverability division of Integral Groups.",
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(breadcrumbJsonLd) }}
      />
      <AboutClient />
    </>
  );
}
