import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  getPublishedArticles, 
  getPublishedArticleBySlug, 
  getRelatedArticles 
} from "@/lib/data/articles";
import { getArticleJsonLd, getBreadcrumbJsonLd, safeJsonLdReplacer } from "@/lib/json-ld";
import { getAbsoluteUrl } from "@/lib/site-config";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  ArrowRight, 
  Tag, 
  Info, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getPublishedArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Integral Labs",
      description: "The requested article could not be found.",
    };
  }

  const canonicalUrl = `/blog/${article.slug}`;

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      url: getAbsoluteUrl(canonicalUrl),
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: [article.author.name],
      tags: article.tags,
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.coverAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = getPublishedArticleBySlug(slug);

  // If article does not exist or is unpublished, return 404
  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 3);
  const articleJsonLd = getArticleJsonLd(article);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: article.title, url: `/blog/${article.slug}` },
  ]);

  return (
    <article className="min-h-screen bg-slate-50/50 pt-28 pb-24">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(breadcrumbJsonLd) }}
      />

      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Navigation & Return to Blog */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li>
                <Link href="/" className="hover:text-slate-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-slate-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-900 font-semibold line-clamp-1 max-w-[200px] sm:max-w-none" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft size={14} /> Back to all articles
          </Link>
        </div>

        {/* Article Header Container */}
        <header className="max-w-4xl mx-auto mb-12">
          {/* Category & Reading metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100">
              {article.category}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Calendar size={13} />
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock size={13} />
              {article.readingTime}
            </span>
            {article.updatedAt && (
              <>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-emerald-600 font-medium">
                  Updated {new Date(article.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] mb-6">
            {article.title}
          </h1>

          {/* Excerpt / Lead Intro */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8">
            {article.excerpt}
          </p>

          {/* Author Block */}
          <div className="flex items-center justify-between py-4 border-y border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  {article.author.name}
                </div>
                <div className="text-xs text-slate-500">
                  {article.author.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                Integral Labs
              </span>
            </div>
          </div>
        </header>

        {/* Hero Cover Image */}
        <div className="max-w-4xl mx-auto mb-16 relative aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <Image
            src={article.coverImage}
            alt={article.coverAlt}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Main Content Layout with Sticky Table of Contents */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Article Body */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="prose prose-slate max-w-none">
              {article.sections.map((section, idx) => (
                <section 
                  key={idx} 
                  id={section.heading ? section.heading.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-") : undefined}
                  className="mb-12 scroll-mt-32"
                >
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-slate-950 tracking-tight mb-4 pt-2 border-t border-slate-100 first:border-t-0 first:pt-0">
                      {section.heading}
                    </h2>
                  )}

                  {section.subheading && (
                    <h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">
                      {section.subheading}
                    </h3>
                  )}

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-base text-slate-700 leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}

                  {/* Bullet points if present */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-2.5 my-5">
                      {section.bulletPoints.map((bullet, bIdx) => {
                        const parts = bullet.split(":");
                        const hasLabel = parts.length > 1;
                        return (
                          <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                            <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-1" />
                            <span>
                              {hasLabel ? (
                                <>
                                  <strong className="text-slate-950 font-bold">{parts[0]}:</strong>
                                  {parts.slice(1).join(":")}
                                </>
                              ) : (
                                bullet
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  {/* Callout box if present */}
                  {section.callout && (
                    <div className={`my-6 p-5 rounded-xl border flex items-start gap-3.5 ${
                      section.callout.type === "warning"
                        ? "bg-amber-50/80 border-amber-200 text-amber-900"
                        : section.callout.type === "tip"
                        ? "bg-emerald-50/80 border-emerald-200 text-emerald-900"
                        : "bg-blue-50/80 border-blue-200 text-blue-950"
                    }`}>
                      {section.callout.type === "warning" ? (
                        <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                      ) : section.callout.type === "tip" ? (
                        <Sparkles size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <Info size={20} className="text-blue-600 shrink-0 mt-0.5" />
                      )}
                      <p className="text-sm leading-relaxed font-normal">
                        {section.callout.text}
                      </p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Tags footer */}
            <div className="pt-8 pb-10 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-2">
                <Tag size={13} /> Tags:
              </span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-full transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Contextual Services Box */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs mb-12">
              <span className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-wider block mb-2">
                Engineering Implementation
              </span>
              <h3 className="text-lg font-bold text-slate-950 mb-2">
                Architecting digital systems for modern search and scale
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Integral Labs builds custom software systems and Next.js web applications with built-in semantic schemas, sub-second Core Web Vitals, and modern AEO knowledge graph structures.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#services-section"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Explore Capabilities <ChevronRight size={13} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold hover:bg-blue-100 transition-colors"
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar: Table of Contents & Author Card */}
          <aside className="lg:col-span-4 order-1 lg:order-2 sticky top-28 space-y-6">
            
            {/* Table of Contents */}
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4">
                  Table of Contents
                </div>
                <nav className="space-y-2.5">
                  {article.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-xs text-slate-600 hover:text-blue-600 transition-colors leading-normal"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Author Biography */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-3">
                About the Author
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">
                    {article.author.name}
                  </h4>
                  <div className="text-xs text-slate-500">
                    {article.author.role}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Co-Founder at Integral Labs, overseeing core systems engineering, search architecture, and high-performance digital infrastructure.
              </p>
            </div>
          </aside>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="mt-20 pt-16 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block mb-1">
                  Further Reading
                </span>
                <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
                  Related Technical Analyses
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
              >
                View all articles <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <div
                  key={related.slug}
                  className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-sm mb-3">
                      {related.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-snug mb-2">
                      <Link href={`/blog/${related.slug}`}>
                        {related.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                      {related.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>{related.readingTime}</span>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1"
                    >
                      Read <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </article>
  );
}
