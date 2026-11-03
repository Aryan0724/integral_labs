import type { Metadata } from "next";
import WorkClient from "./WorkClient";
import { getBreadcrumbJsonLd, safeJsonLdReplacer } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Portfolio | Real Client Case Studies & Deployed Platforms",
  description:
    "Live client deployments by Integral Labs: university portals, e-commerce storefronts and academic productivity platforms built on Next.js with measurable business impact.",
  openGraph: {
    title: "Portfolio | Real Client Case Studies & Deployed Platforms",
    description:
      "Live client deployments: university portals, e-commerce storefronts and engineering case studies by Integral Labs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Real Client Case Studies & Deployed Platforms",
    description:
      "Live client deployments: university portals, e-commerce storefronts and engineering case studies by Integral Labs.",
  },
};

export default function WorkPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Work", url: "/work" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(breadcrumbJsonLd) }}
      />
      <WorkClient />
    </>
  );
}
