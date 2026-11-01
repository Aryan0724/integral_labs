/**
 * Centralized site configuration and canonical URL helpers for Integral Labs.
 */

export const SITE_CONFIG = {
  name: "Integral Labs",
  legalName: "Integral Labs (Creative Engineering Division of Integral Groups)",
  parentOrganization: "Integral Groups",
  domain: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || "https://labs.integralgroups.in",
  contactEmail: "contact@integralgroups.in",
  tagline: "Collective Development, Custom Software Systems & Search Dominance",
  description:
    "Integral Labs provides collective digital engineering with equal weight given to code and discoverability. We engineer high-performance web applications, custom software platforms, and authoritative Technical SEO and Answer Engine Optimization (AEO).",
  team: "Integral Labs Engineering Collective",
  socials: {
    github: "https://github.com/Aryan0724/integral_labs",
  },
};

export function getAbsoluteUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.domain}${cleanPath}`;
}
