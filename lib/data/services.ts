/**
 * Canonical four service pillars. Consumed by:
 *  - lib/json-ld.ts::getServicesJsonLd (OfferCatalog/Service structured data)
 *  - lib/json-ld.ts::getOrganizationJsonLd (knowsAbout)
 * Names should stay in sync with the visible marketing copy on /services.
 */
export interface ServicePillar {
  name: string;
  description: string;
  serviceType: string;
}

export const SERVICES: ServicePillar[] = [
  {
    name: "Web Development (High-Performance Modern Web Platforms)",
    description:
      "Blazing-fast, responsive web platforms and flagship digital products engineered with Next.js, React, and modern edge architecture. Built for sub-second load times, semantic markup, total brand authority, and high-conversion commercial funnels.",
    serviceType: "Web Development",
  },
  {
    name: "Custom Software Development (SaaS & Business Systems)",
    description:
      "Bespoke business systems, internal operational tools, and multi-tenant SaaS platforms engineered in Next.js, Node.js, and PostgreSQL — with 100% proprietary code ownership, RBAC, and resilient REST & GraphQL APIs.",
    serviceType: "Custom Software Development",
  },
  {
    name: "Search Engine Optimization (Technical SEO & Core Web Vitals)",
    description:
      "Technical SEO engineered directly into source code: semantic HTML5, Schema.org JSON-LD graphs, crawler pathway optimization, automated XML sitemaps, and sub-second Core Web Vitals (LCP, INP, CLS) that secure Google search rankings.",
    serviceType: "Search Engine Optimization",
  },
  {
    name: "Answer Engine Optimization (AEO & AI Search)",
    description:
      "Semantic data structuring and entity knowledge-graph engineering so conversational AI engines (ChatGPT, Perplexity, Claude, Gemini) accurately discover, understand, and cite your business as the definitive recommendation.",
    serviceType: "Answer Engine Optimization",
  },
];
