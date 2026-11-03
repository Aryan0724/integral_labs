import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import { 
  getAllArticles, 
  getPublishedArticles, 
  getArticleBySlug, 
  getPublishedArticleBySlug, 
  getRelatedArticles,
  getArticleCategories 
} from "../lib/data/articles.ts";
import { SITE_CONFIG, getAbsoluteUrl } from "../lib/site-config.ts";

test("Blog & Technical SEO Comprehensive Verification Suite", async (t) => {
  
  await t.test("1. Article data integrity and required fields", () => {
    const all = getAllArticles();
    assert.ok(all.length >= 6, "Expected at least 6 articles including draft");

    const slugs = new Set();
    for (const article of all) {
      assert.ok(article.slug, "Article must have a slug");
      assert.ok(!slugs.has(article.slug), `Duplicate slug detected: ${article.slug}`);
      slugs.add(article.slug);

      assert.ok(article.title && article.title.length > 5, `Article ${article.slug} missing valid title`);
      assert.ok(article.excerpt && article.excerpt.length > 20, `Article ${article.slug} missing valid excerpt`);
      assert.ok(article.author?.name, `Article ${article.slug} missing author name`);
      assert.ok(article.author?.role, `Article ${article.slug} missing author role`);
      assert.ok(article.publishedAt, `Article ${article.slug} missing publication date`);
      assert.ok(!isNaN(Date.parse(article.publishedAt)), `Article ${article.slug} has invalid publication date`);
      if (article.updatedAt) {
        assert.ok(!isNaN(Date.parse(article.updatedAt)), `Article ${article.slug} has invalid updatedAt date`);
      }
      assert.ok(article.coverImage && article.coverImage.startsWith("/"), `Article ${article.slug} missing valid coverImage`);
      assert.ok(article.coverAlt, `Article ${article.slug} missing coverAlt`);
      assert.ok(article.readingTime, `Article ${article.slug} missing readingTime`);
      assert.ok(article.seoTitle, `Article ${article.slug} missing seoTitle`);
      assert.ok(article.seoDescription, `Article ${article.slug} missing seoDescription`);
      assert.ok(Array.isArray(article.tags) && article.tags.length > 0, `Article ${article.slug} missing tags`);
      assert.ok(Array.isArray(article.sections) && article.sections.length > 0, `Article ${article.slug} missing sections`);
    }
  });

  await t.test("2. Publication status gating and draft protection", () => {
    const published = getPublishedArticles();
    assert.equal(published.length, 9, "Expected 9 published articles (5 originals + 4-page content cluster)");

    // Check that draft article is excluded from public lookups
    const draft = getArticleBySlug("draft-internal-architecture-preview");
    assert.ok(draft, "Draft article exists in repository dataset");
    assert.equal(draft.isPublished, false, "Draft article is marked unpublished");

    const gatedDraft = getPublishedArticleBySlug("draft-internal-architecture-preview");
    assert.equal(gatedDraft, undefined, "Unpublished draft must return undefined for public slug lookups");

    assert.ok(
      !published.some((a) => a.slug === "draft-internal-architecture-preview"),
      "Draft article must never be returned by getPublishedArticles()"
    );
  });

  await t.test("3. Category filtering and query helpers", () => {
    const categories = getArticleCategories();
    assert.ok(categories.includes("Search Engineering"));
    assert.ok(categories.includes("Web Architecture"));
    assert.ok(categories.includes("SaaS Development"));
    assert.ok(categories.includes("Performance"));

    const related = getRelatedArticles("seo-vs-aeo-search-visibility-evolution", 3);
    assert.ok(related.length > 0, "Expected related articles to be resolved");
    assert.ok(
      !related.some((a) => a.slug === "seo-vs-aeo-search-visibility-evolution"),
      "Current article must never be in its own related articles"
    );
  });

  await t.test("4. Canonical site configuration and absolute URLs", () => {
    assert.equal(SITE_CONFIG.domain, "https://labs.integralgroups.in");
    assert.equal(getAbsoluteUrl("/blog"), "https://labs.integralgroups.in/blog");
    assert.equal(
      getAbsoluteUrl("blog/sample"),
      "https://labs.integralgroups.in/blog/sample"
    );
  });

  await t.test("5. Generated robots.txt artifact inspection", () => {
    const robotsPath = path.join(process.cwd(), ".next", "server", "app", "robots.txt.body");
    assert.ok(fs.existsSync(robotsPath), "robots.txt.body artifact exists in build");

    const content = fs.readFileSync(robotsPath, "utf8");
    assert.ok(content.includes("User-Agent: *"), "robots.txt specifies wildcard user agent");
    assert.ok(content.includes("Allow: /"), "robots.txt permits crawling of root");
    assert.ok(content.includes("Disallow: /admin"), "robots.txt disallows /admin");
    assert.ok(content.includes("Disallow: /api/"), "robots.txt disallows /api/");
    assert.ok(
      content.includes("Sitemap: https://labs.integralgroups.in/sitemap.xml"),
      "robots.txt points to canonical sitemap.xml URL"
    );
  });

  await t.test("6. Generated sitemap.xml artifact inspection", () => {
    const sitemapPath = path.join(process.cwd(), ".next", "server", "app", "sitemap.xml.body");
    assert.ok(fs.existsSync(sitemapPath), "sitemap.xml.body artifact exists in build");

    const content = fs.readFileSync(sitemapPath, "utf8");
    assert.ok(content.includes("<loc>https://labs.integralgroups.in/</loc>"), "Home page in sitemap");
    assert.ok(content.includes("<loc>https://labs.integralgroups.in/blog</loc>"), "Blog listing in sitemap");
    assert.ok(content.includes("<loc>https://labs.integralgroups.in/work/bro-uni</loc>"), "Bro University in sitemap");
    assert.ok(
      content.includes("<loc>https://labs.integralgroups.in/blog/seo-vs-aeo-search-visibility-evolution</loc>"),
      "Published article in sitemap"
    );

    // Verify exclusions
    assert.ok(!content.includes("/admin"), "Admin routes must never appear in sitemap");
    assert.ok(!content.includes("/api/"), "API routes must never appear in sitemap");
    assert.ok(!content.includes("draft-internal-architecture-preview"), "Unpublished draft must never appear in sitemap");
  });

  await t.test("7. Prerendered HTML metadata, Open Graph, and JSON-LD inspection", () => {
    const articleHtmlPath = path.join(
      process.cwd(),
      ".next",
      "server",
      "app",
      "blog",
      "seo-vs-aeo-search-visibility-evolution.html"
    );
    assert.ok(fs.existsSync(articleHtmlPath), "Prerendered HTML file exists for article");

    const html = fs.readFileSync(articleHtmlPath, "utf8");
    assert.ok(html.includes("SEO vs AEO"), "HTML contains article title");
    assert.ok(html.includes('rel="canonical"'), "HTML contains canonical link tag");
    assert.ok(
      html.includes('href="https://labs.integralgroups.in/blog/seo-vs-aeo-search-visibility-evolution"'),
      "Canonical points to full absolute URL"
    );
    assert.ok(html.includes('property="og:type" content="article"'), "OG type is article");
    assert.ok(html.includes('name="twitter:card" content="summary_large_image"'), "Twitter card meta tag present");
    assert.ok(html.includes('type="application/ld+json"'), "Structured data JSON-LD injected in HTML");
    assert.ok(html.includes('"@type":"Organization"'), "Organization schema present in HTML head");
    assert.ok(html.includes('"@type":"WebSite"'), "WebSite schema present in HTML head");
    assert.ok(html.includes('"@type":"BlogPosting"'), "BlogPosting schema present in article HTML");
  });

  await t.test("8. Cover images existence check in public/blog", () => {
    const published = getPublishedArticles();
    for (const article of published) {
      const publicPath = path.join(process.cwd(), "public", article.coverImage);
      assert.ok(fs.existsSync(publicPath), `Cover image exists on disk: ${publicPath}`);
    }
  });
});
