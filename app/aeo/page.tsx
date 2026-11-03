import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CornerDownLeft,
  Search,
  FileCode2,
  Network,
  Gauge,
  MessageSquareQuote,
  Share2,
  Check,
  Sparkles,
} from "lucide-react";
import {
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  safeJsonLdReplacer,
} from "@/lib/json-ld";
import { getAbsoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Answer Engine Optimization Agency — Get Cited by AI Search",
  description:
    "Integral Labs is an AEO/GEO agency that engineers entities, content and retrieval structure so ChatGPT, Perplexity, Gemini and Claude can find, trust and cite your business. Start with a free AI-visibility snapshot.",
  alternates: { canonical: "/aeo" },
  openGraph: {
    title: "Answer Engine Optimization (AEO) & GEO | Integral Labs",
    description:
      "Engineered AI-search visibility: entity graphs, llms.txt, machine-readable Q&A and citation-share measurement so AI assistants recommend you.",
    type: "website",
    url: "/aeo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Answer Engine Optimization (AEO) & GEO | Integral Labs",
    description:
      "Engineered AI-search visibility: entity graphs, llms.txt, machine-readable Q&A and citation-share measurement.",
  },
};

const TRACKING_ENGINES = ["ChatGPT", "Perplexity", "Gemini", "Claude", "Google AI Overviews"];

const WORKSTREAMS = [
  {
    icon: Gauge,
    name: "AI-Visibility Audit",
    text: "We run the prompt panels your buyers actually use across every major engine and document exactly where you're cited, where you're ignored, and which competitors own your category's answers. Everything is measured against this baseline.",
  },
  {
    icon: Network,
    name: "Entity Engineering",
    text: "Answer engines reason over entities, not websites. We build your canonical entity graph: Organization schema with @id interconnection, consistent NAP, alternateName hygiene, external profile alignment, and Wikidata-ready facts.",
  },
  {
    icon: MessageSquareQuote,
    name: "Citation-Worthy Content",
    text: "We re-architect content into claim-first, quotable structures: definitive answers, concrete specifications, FAQPage schema and Q&A hubs that models can extract verbatim without ambiguity.",
  },
  {
    icon: FileCode2,
    name: "Technical Retrieval Layer",
    text: "Server-rendered HTML that agents can fetch under latency budgets, plus the machine-readable discovery layer: llms.txt, ai.txt, and IndexNow pings to Bing — the index Perplexity and ChatGPT search lean on.",
  },
  {
    icon: Share2,
    name: "Off-Site Consensus Layer",
    text: "Models borrow consensus from the places they already trust. We plan and coordinate placements across review platforms, industry roundups, directories and community answering (Reddit/Quora) so third-party sources corroborate your positioning.",
  },
  {
    icon: Sparkles,
    name: "Citation-Share Measurement",
    text: "Monthly per-engine reporting: recommendation share across your tracked prompt portfolio, movement deltas, competitor benchmarking, and the specific fixes that produced each change. You see the channel grow, or we explain plainly why.",
  },
];

const ENGAGEMENT_PHASES = [
  {
    phase: "Weeks 1–2",
    title: "Baseline audit",
    text: "Prompt panels defined and run across all tracked engines. You receive your citation-share baseline and a prioritized gap list.",
  },
  {
    phase: "Weeks 2–4",
    title: "Entity + retrieval fixes",
    text: "Schema graph upgrades, llms.txt/ai.txt deployment, retrieval-friendly rendering fixes, and citation-worthy content restructuring.",
  },
  {
    phase: "Month 2+",
    title: "Off-site consensus",
    text: "Coordinated placements on the review platforms, roundups and communities your category's answers are actually synthesized from.",
  },
  {
    phase: "Ongoing",
    title: "Measurement & iteration",
    text: "Monthly citation-share reports, new prompt tracking as your category evolves, and continuous content/entity maintenance.",
  },
];

const AEO_FAQS = [
  {
    question: "Can you guarantee ChatGPT will recommend my business?",
    answer:
      "No — and you should distrust any agency that claims to. Nobody controls what a model says. What we do is engineer every controllable input: unambiguous entity data, retrieval-ready structure, citation-worthy content and third-party consensus — then measure your citation share against that baseline every month so the movement is visible.",
  },
  {
    question: "Is AEO different from SEO?",
    answer:
      "They share foundations — clean crawlability, semantic HTML, authority. AEO adds what classic SEO never covered: entity precision instead of keyword strings, the off-site consensus layer models retrieve from, machine-readable discovery files (llms.txt, ai.txt), and a fundamentally different measurement model — citations in answers, not rankings on pages. Google's own guidance notes AI-search optimization is still built on SEO; we treat them as one discipline with two outputs.",
  },
  {
    question: "Which AI engines do you track?",
    answer:
      "ChatGPT (including its web-search mode), Perplexity, Gemini, Claude, and Google's AI Overviews — each carries different retrieval behaviour: ChatGPT Search and Perplexity lean on Bing-style indexes, Perplexity additionally reads community sources, and Gemini correlates strongly with Google Business Profile data. Your tracked prompt panels cover all of them.",
  },
  {
    question: "What does an AEO engagement cost?",
    answer:
      "It depends on market breadth, content depth and the off-site scope your category actually needs. Book a discovery call and you'll receive an exact, milestone-based engagement quote within 24 hours — no packages padded with reporting you don't need.",
  },
  {
    question: "How long until citations appear?",
    answer:
      "The baseline audit lands in weeks 1–2, and retrieval-layer fixes (schema, llms.txt, rendering) are live within the first month. Citation movement typically becomes visible within 1–3 months and compounds as the off-site consensus layer matures — which is why we measure monthly rather than promising a single launch moment.",
  },
];

export default function AeoPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "AEO & GEO Services", url: "/aeo" },
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": getAbsoluteUrl("/aeo#service"),
    name: "Answer Engine Optimization (AEO) & Generative Engine Optimization (GEO)",
    url: getAbsoluteUrl("/aeo"),
    description:
      "Engineered AI-search visibility: entity graphs, llms.txt and machine-readable Q&A architecture, off-site consensus planning, and citation-share measurement across ChatGPT, Perplexity, Gemini and Claude.",
    provider: { "@id": getAbsoluteUrl("#organization") },
    serviceType: "Answer Engine Optimization",
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(getFaqJsonLd(AEO_FAQS, "/aeo#faq")) }}
      />

      <main className="min-h-screen bg-white text-slate-900">
        {/* ═══ Hero ═══ */}
        <section className="relative pt-32 pb-16 md:pt-40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-blue-100/50 via-indigo-50/30 to-emerald-50/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-7 select-none">
              <Sparkles size={13} className="text-blue-600" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-blue-700 font-semibold">
                AEO · GEO · AI Search Architecture
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.08] mb-6 max-w-[900px]">
              Answer Engine Optimization That Gets You{" "}
              <span className="text-blue-600">Cited.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[780px] mb-9">
              When a buyer asks ChatGPT, Perplexity or Gemini for a recommendation, the generative
              answer collapses ten blue links into a single verdict — and the buyer moves on it
              without ever visiting your site. Integral Labs engineers the entities, content
              structure and retrieval layer that put your brand inside that verdict, then measures
              your citation share engine by engine.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group"
              >
                <span>Book a Discovery Call</span>
                <CornerDownLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#free-audit"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base px-7 py-4 rounded-full border border-slate-200 shadow-2xs hover:shadow-xs transition-all duration-200 group"
              >
                <span>Get the Free AI-Visibility Snapshot</span>
                <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-9">
              {TRACKING_ENGINES.map((engine) => (
                <span
                  key={engine}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs text-slate-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {engine}
                </span>
              ))}
              <span className="text-xs text-slate-400 self-center">— tracked per prompt, reported monthly</span>
            </div>
          </div>
        </section>

        {/* ═══ Workstreams ═══ */}
        <section className="py-16 md:py-20 border-t border-slate-100">
          <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-[680px] mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                What the Work Includes
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Six Workstreams. One Measurable Outcome.
              </h2>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                AEO isn&apos;t a bolt-on analytics dashboard. It&apos;s entity precision, retrieval
                engineering and consensus-building — run as an engineering discipline with a
                monthly number attached.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WORKSTREAMS.map((ws) => {
                const Icon = ws.icon;
                return (
                  <div
                    key={ws.name}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 hover:shadow-md hover:border-slate-300 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">{ws.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{ws.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ Proof: we run this on ourselves ═══ */}
        <section className="py-16 md:py-20 bg-slate-900 text-white border-y border-slate-800">
          <div className="container max-w-[1240px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold block mb-3">
                Our Own Site Is the Case Study
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                We Don&apos;t Sell What We Don&apos;t Run.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mt-4">
                This very site ships the full workstation we deploy for clients — and every claim
                on this page is visible in the source. Ask us anything about it on the call.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                {
                  label: "Machine-readable fact files",
                  href: "/llms.txt",
                  text: "llms.txt + ai.txt served at the root for AI crawlers",
                },
                {
                  label: "Ontology-grade entity graph",
                  href: null,
                  text: "Organization → services → articles → case studies, linked by stable @id URIs",
                },
                {
                  label: "Q&A extraction architecture",
                  href: null,
                  text: "FAQPage + HowTo-style answers on every public page pair",
                },
                {
                  label: "Instant Bing retrieval",
                  href: "/api/indexnow",
                  text: "IndexNow pings fire on every content publish — the index ChatGPT Search & Perplexity retrieve from",
                },
              ].map((row) => (
                <li
                  key={row.label}
                  className="rounded-2xl border border-slate-700/70 bg-slate-800/40 p-5 flex items-start gap-4"
                >
                  <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    {row.href ? (
                      <a href={row.href} className="text-sm font-bold text-white hover:text-blue-400 transition-colors underline decoration-dotted">
                        {row.label}
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-white">{row.label}</span>
                    )}
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{row.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ Engagement phases ═══ */}
        <section className="py-16 md:py-20">
          <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-[680px] mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                How the Engagement Runs
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                From Baseline to Compounding Citations.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {ENGAGEMENT_PHASES.map((phase) => (
                <div
                  key={phase.phase}
                  className="rounded-2xl border border-slate-200/80 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-bold mb-3">
                    {phase.phase}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{phase.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{phase.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Free audit band ═══ */}
        <section id="free-audit" className="pb-16 md:pb-20 scroll-mt-24">
          <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="rounded-3xl border-2 border-blue-200 bg-blue-50/50 p-8 sm:p-12">
              <div className="max-w-[760px]">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                  Free Lead Magnet · No Package Attached
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
                  Free AI-Visibility Snapshot.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  Book a discovery call and mention the free snapshot. We&apos;ll run a starter
                  prompt panel for your category across ChatGPT and Perplexity, and show you
                  exactly where you stand today — which engines name you, which name your
                  competitors instead, and the three fixes with the highest first-month leverage.
                  Yours to keep whether we work together or not.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold uppercase tracking-wider transition-all shadow-md group"
                >
                  <span>Claim Your Free Snapshot</span>
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="pb-20">
          <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-[840px] space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Straight Answers First.
              </h2>
              {AEO_FAQS.map((faq) => (
                <div key={faq.question} className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Final CTA ═══ */}
        <section className="pb-24">
          <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-10 sm:p-14 text-white">
              <div className="max-w-[680px]">
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
                  The AI answer for your category is being written. With you in it, or without you.
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  Book a discovery call — you&apos;ll get an honest read of where you stand in
                  today&apos;s answers, plus an exact, milestone-based engagement plan within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold uppercase tracking-wider transition-all shadow-md group"
                >
                  <span>Book Your Discovery Call</span>
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
