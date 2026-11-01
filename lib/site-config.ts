/**
 * Centralized site configuration and canonical URL helpers for Integral Labs.
 */

export const SITE_CONFIG = {
  name: "Integral Labs",
  legalName: "Integral Labs (Creative Engineering Division of Integral Groups)",
  parentOrganization: "Integral Groups",
  domain: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || "https://labs.integralgroups.in",
  contactEmail: "contact@integralgroups.in",
  tagline: "Custom Software, Web Platforms & Modern Search (SEO & AEO)",
  description:
    "Integral Labs is a custom software engineering and digital discoverability consultancy. We engineer scalable web applications, bespoke business platforms, and search architectures engineered for traditional search engines and AI citations.",
  team: "Integral Labs Engineering Collective",
  socials: {
    github: "https://github.com/Aryan0724/integral_labs",
  },
};

export function getAbsoluteUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.domain}${cleanPath}`;
}
