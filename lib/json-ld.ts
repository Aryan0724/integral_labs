import { SITE_CONFIG, getAbsoluteUrl } from "./site-config";
import { Article } from "./data/articles";

/**
 * Generates canonical Organization JSON-LD schema for Integral Labs.
 */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": getAbsoluteUrl("#organization"),
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.domain,
    logo: getAbsoluteUrl("/integral-logo-dark.png"),
    email: SITE_CONFIG.contactEmail,
    description: SITE_CONFIG.description,
    parentOrganization: {
      "@type": "Organization",
      name: SITE_CONFIG.parentOrganization,
      url: "https://integralgroups.in/",
    },
    founders: SITE_CONFIG.founders.map((founder) => ({
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
    })),
    sameAs: [
      SITE_CONFIG.socials.github,
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
