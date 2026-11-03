import type { Metadata } from "next";
import GroupsClient from "./GroupsClient";
import { getBreadcrumbJsonLd, safeJsonLdReplacer } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Integral Groups Ecosystem | Labs, Media, Marketing & Products",
  description:
    "Integral Labs is the custom software engineering division of Integral Groups. Explore the connected ecosystem: Integral Media, Integral Marketing, and the Department of Products.",
  openGraph: {
    title: "Integral Groups Ecosystem | Integral Labs",
    description:
      "The connected multi-division ecosystem behind Integral Labs: media, marketing, and proprietary product engineering.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integral Groups Ecosystem | Integral Labs",
    description:
      "The connected multi-division ecosystem behind Integral Labs: media, marketing, and proprietary product engineering.",
  },
};

export default function GroupsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Integral Groups", url: "/groups" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(breadcrumbJsonLd) }}
      />
      <GroupsClient />
    </>
  );
}
