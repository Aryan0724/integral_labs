/**
 * Analytics event helpers. All calls no-op silently when no analytics
 * providers are loaded (envs absent), so called safely from any client code.
 */

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

/** Fired when a visitor submits the main contact form (conversion event). */
export function trackContactSubmit(projectType?: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "contact_submit", {
      project_type: projectType || "unspecified",
      channel: "primary_form",
    });
  }
}

/** Fired when a visitor submits the global modal / sidebar contact form. */
export function trackSidebarContactSubmit(projectType?: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "contact_submit", {
      project_type: projectType || "unspecified",
      channel: "sidebar_modal",
    });
  }
}

/** Generic event wrapper for CTA clicks, scroll depth, etc. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
