import type { Metadata } from "next";
import ProcessClient from "./ProcessClient";
import { getBreadcrumbJsonLd, safeJsonLdReplacer } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Engineering Process | Discovery to Deployment in Weekly Milestones",
  description:
    "How Integral Labs delivers full-stack engineering: discovery & search architecture, semantic design, development sprints, QA & Technical SEO, deployment and indexing, then ongoing AI citation growth.",
  openGraph: {
    title: "Engineering Process | Integral Labs",
    description:
      "Discovery to deployment across structured weekly milestones, with Technical SEO and AEO woven into every phase.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Process | Integral Labs",
    description:
      "Discovery to deployment across structured weekly milestones, with Technical SEO and AEO woven into every phase.",
  },
};

export default function ProcessPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Process", url: "/process" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(breadcrumbJsonLd) }}
      />
      <ProcessClient />
    </>
  );
}
