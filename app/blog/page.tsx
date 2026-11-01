import type { Metadata } from "next";
import { getPublishedArticles, getArticleCategories } from "@/lib/data/articles";
import { getBlogJsonLd, getBreadcrumbJsonLd, safeJsonLdReplacer } from "@/lib/json-ld";
import { getAbsoluteUrl } from "@/lib/site-config";
import BlogListClient from "@/components/blog/BlogListClient";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering & Discoverability Blog | Technical Architecture & Search Insights",
  description:
    "Technical analyses, software architecture breakdowns, Core Web Vitals optimization guides, and answer engine optimization (AEO) research from Integral Labs.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Engineering & Discoverability Blog | Integral Labs",
    description:
      "Technical analyses, software architecture breakdowns, Core Web Vitals guides, and answer engine optimization (AEO) research from Integral Labs.",
    url: getAbsoluteUrl("/blog"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering & Discoverability Blog | Integral Labs",
    description:
      "Technical analyses, software architecture breakdowns, Core Web Vitals guides, and answer engine optimization (AEO) research from Integral Labs.",
  },
};

export default function BlogPage() {
  const articles = getPublishedArticles();
  const categories = getArticleCategories();

  const blogJsonLd = getBlogJsonLd(articles);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <div className="min-h-screen bg-slate-50/60 pt-28 pb-24">
      {/* Inject JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(breadcrumbJsonLd) }}
      />

      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-900 font-semibold" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100/80 rounded-full text-blue-700 text-xs font-semibold tracking-wider uppercase mb-4">
            <BookOpen size={13} />
            Engineering &amp; Search Insights
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] mb-5">
            Technical Insights for High-Performance Teams
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Deep architectural analyses, Core Web Vitals benchmarks, custom software design principles, and evolving Answer Engine Optimization (AEO) frameworks written directly by our founders and engineering team.
          </p>
        </div>

        {/* Interactive Blog List Component */}
        <BlogListClient articles={articles} categories={categories} />

        {/* Bottom CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-slate-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-800">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest block mb-2">
              Need Engineering Support?
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
              Build your next web platform or custom software with Integral Labs
            </h2>
            <p className="text-sm text-slate-400">
              Direct founder execution across Next.js engineering, bespoke software development, and modern SEO/AEO architectures.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md"
            >
              Discuss Your Project <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
