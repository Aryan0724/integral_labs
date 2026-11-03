import { SITE_CONFIG, getAbsoluteUrl } from "./site-config";
import { Article } from "./data/articles";
import { FAQS } from "./data/faqs";
import { SERVICES } from "./data/services";
import { Project } from "./data/projects";

/**
 * Canonical physical location used across Organization schema, contact pages, and PR.
 * Keep in sync with SITE_CONFIG.location.
 */
export const ORGANIZATION_ADDRESS = {
  city: SITE_CONFIG.location.city,
  region: SITE_CONFIG.location.region,
  country: SITE_CONFIG.location.country,
} as const;

/**
 * Generates canonical Organization JSON-LD schema for Integral Labs.
 * Includes geo anchoring (address + areaServed) for local/entity ranking.
 */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": getAbsoluteUrl("#organization"),
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    alternateName: "Integral Labs — Integral Groups Engineering Division",
    url: SITE_CONFIG.domain,
    logo: getAbsoluteUrl("/integral-logo-dark.png"),
    email: SITE_CONFIG.contactEmail,
    description: SITE_CONFIG.description,
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.location.city,
      addressRegion: SITE_CONFIG.location.region,
      addressCountry: SITE_CONFIG.location.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_CONFIG.contactEmail,
      contactType: "sales",
      availableLanguage: ["en", "hi"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
    },
    areaServed: ["IN", "US", "GB", "AE"],
    knowsAbout: SERVICES.map((service) => service.name),
    parentOrganization: {
      "@type": "Organization",
      name: SITE_CONFIG.parentOrganization,
      url: "https://integralgroups.in/",
    },
    sameAs: [
      SITE_CONFIG.socials.github,
      // Add LinkedIn / X / Crunchbase company profile URLs here once published.
    ],
  };
}

/**
 * Generates canonical WebSite JSON-LD schema.
 */
export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": getAbsoluteUrl("#website"),
    url: SITE_CONFIG.domain,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": getAbsoluteUrl("#organization"),
    },
    inLanguage: "en-US",
  };
}

/**
 * Generates FAQPage JSON-LD schema. Eligible for rich results and
 * direct extraction by answer engines (AEO/GEO).
 */
export function getFaqJsonLd(faqs: { question: string; answer: string }[] = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": getAbsoluteUrl("/#faq"),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates an OfferCatalog + Service graph describing the four
 * co-equal service pillars direct to /services.
 */
export function getServicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": getAbsoluteUrl("/services#services"),
    name: "Integral Labs Service Pillars",
    url: getAbsoluteUrl("/services"),
    provider: {
      "@id": getAbsoluteUrl("#organization"),
    },
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        serviceType: service.serviceType,
        areaServed: "IN",
      },
      url: getAbsoluteUrl("/services"),
    })),
  };
}

/**
 * Generates CreativeWork/CaseStudy JSON-LD for a /work/[id] page.
 */
export function getCaseStudyJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": getAbsoluteUrl(`/work/${project.id}#casestudy`),
    name: project.title,
    headline: `${project.title} Case Study`,
    description: project.intro,
    abstract: `The challenge: ${project.challenge} The solution: ${project.solution}`,
    url: getAbsoluteUrl(`/work/${project.id}`),
    image: getAbsoluteUrl(project.image),
    datePublished: project.year,
    dateCreated: project.year,
    inLanguage: "en-US",
    creator: {
      "@id": getAbsoluteUrl("#organization"),
    },
    about: {
      "@type": "Thing",
      name: project.category,
    },
    mentions: project.techStack.map((tech) => ({
      "@type": "Thing",
      name: tech,
    })),
  };
}

/**
 * Generates Blog JSON-LD schema for /blog listing.
 */
export function getBlogJsonLd(articles: Article[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": getAbsoluteUrl("/blog#blog"),
    url: getAbsoluteUrl("/blog"),
    name: "Integral Labs Engineering & Discoverability Blog",
    description:
      "Technical analysis, software architecture breakdowns, and search engineering guides from Integral Labs.",
    publisher: {
      "@id": getAbsoluteUrl("#organization"),
    },
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: getAbsoluteUrl(`/blog/${article.slug}`),
      datePublished: article.publishedAt,
      dateModified: article.updatedAt || article.publishedAt,
      description: article.excerpt,
    })),
  };
}

/**
 * Generates BlogPosting JSON-LD schema for an individual article.
 */
export function getArticleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": getAbsoluteUrl(`/blog/${article.slug}#article`),
    headline: article.title,
    description: article.seoDescription || article.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getAbsoluteUrl(`/blog/${article.slug}`),
    },
    image: getAbsoluteUrl(article.coverImage),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@id": getAbsoluteUrl("#organization"),
    },
    keywords: article.tags.join(", "),
    articleSection: article.category,
    inLanguage: "en-US",
  };
}

/**
 * Generates BreadcrumbList JSON-LD schema for structured navigation.
 */
export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : getAbsoluteUrl(item.url),
    })),
  };
}

/**
 * Safe JSON-LD serialization preventing HTML script tag breaking.
 */
export function safeJsonLdReplacer(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c').replace(/>/g, '\\u003e');
}
