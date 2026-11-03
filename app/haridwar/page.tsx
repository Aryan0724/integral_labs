import type { Metadata } from "next";
import CityPageClient from "@/components/geo/CityPageClient";
import { getCity } from "@/lib/data/cities";
import {
  getBreadcrumbJsonLd,
  getCityServiceJsonLd,
  getFaqJsonLd,
  safeJsonLdReplacer,
} from "@/lib/json-ld";

const city = getCity("haridwar");

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: `/${city.slug}` },
  openGraph: {
    title: `${city.h1} | Integral Labs`,
    description: city.metaDescription,
    type: "website",
    url: `/${city.slug}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${city.h1} | Integral Labs`,
    description: city.metaDescription,
  },
};

export default function HaridwarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLdReplacer(
            getBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Uttarakhand", url: "/#areas-we-serve" },
              { name: "Haridwar", url: "/haridwar" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(getCityServiceJsonLd(city)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLdReplacer(getFaqJsonLd(city.faqs, "/haridwar#faq")),
        }}
      />
      <CityPageClient city={city} />
    </>
  );
}
