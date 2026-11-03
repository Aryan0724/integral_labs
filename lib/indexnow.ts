/**
 * Bing IndexNow submission helpers.
 *
 * ChatGPT, Perplexity, and a growing share of AI search lean on Bing's
 * index. IndexNow lets us push fresh content to Bing/Yandex instantly
 * instead of waiting on crawl. The key file lives at
 * public/[KEY].txt (static) and must match INDEXNOW_KEY exactly.
 */

import { SITE_CONFIG, getAbsoluteUrl } from "./site-config";
import { projects } from "./data/projects";
import { getPublishedArticles } from "./data/articles";

// Static control key — the file public/${INDEXNOW_KEY}.txt contains this value.
export const INDEXNOW_KEY = "e9c1b4d2f7a845c3901db2f6a4e8c5d7";

export function indexNowKeyLocation(): string {
  return `${SITE_CONFIG.domain}/${INDEXNOW_KEY}.txt`;
}

/**
 * Submit a list of site URLs to IndexNow. Never throws.
 * Returns true when the submission was accepted (200/202).
 */
export async function submitToIndexNow(urls: string[]): Promise<boolean> {
  if (!urls.length) return false;

  const host = new URL(SITE_CONFIG.domain).host;

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: indexNowKeyLocation(),
        urlList: urls,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (res.ok || res.status === 202) {
      return true;
    }

    console.error("[IndexNow] submission rejected:", res.status);
    return false;
  } catch (error) {
    console.error("[IndexNow] submission error:", error);
    return false;
  }
}

/** All current public content URLs — used for CMS-save pings and manual pings. */
export function coreContentUrls(): string[] {
  const urls: string[] = [
    getAbsoluteUrl("/"),
    getAbsoluteUrl("/services"),
    getAbsoluteUrl("/work"),
    getAbsoluteUrl("/blog"),
    getAbsoluteUrl("/pricing"),
    getAbsoluteUrl("/process"),
    getAbsoluteUrl("/about"),
  ];

  for (const project of projects) {
    urls.push(getAbsoluteUrl(`/work/${project.id}`));
  }

  for (const article of getPublishedArticles()) {
    urls.push(getAbsoluteUrl(`/blog/${article.slug}`));
  }

  return urls;
}
