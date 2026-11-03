import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock, Handshake, Layers, ShieldCheck } from "lucide-react";
import { getBreadcrumbJsonLd, getFaqJsonLd, safeJsonLdReplacer } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Pricing & Packages | Web, Custom Software, SEO & AEO Costs",
  description:
    "Transparent engagement pricing from Integral Labs: Next.js web platforms from ₹85,000, custom SaaS & business software from ₹2,50,000, and SEO + AEO growth retainers from ₹35,000/month.",
  openGraph: {
    title: "Pricing & Packages | Integral Labs",
    description:
      "Web platforms, custom SaaS software, and SEO + AEO growth engagements with transparent starting prices and fixed-inclusion deliverables.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Packages | Integral Labs",
    description:
      "Web platforms, custom SaaS software, and SEO + AEO growth engagements with transparent starting prices.",
  },
};

const PACKAGES = [
  {
    name: "Web Platform Launch",
    price: "₹85,000+",
    usd: "~$1,000+",
    cadence: "one-time",
    duration: "2–4 weeks",
    blurb: "High-performance marketing sites, portfolios, and product landing pages engineered for conversion and Core Web Vitals.",
    includes: [
      "Custom Next.js / React platform",
      "Design system & responsive layouts",
      "Sub-second Core Web Vitals tuning",
      "Schema.org JSON-LD + sitemap infra",
      "30-day post-launch warranty",
    ],
    highlight: false,
  },
  {
    name: "Custom Software & SaaS",
    price: "₹2,50,000+",
    usd: "~$3,000+",
    cadence: "one-time",
    duration: "3–10 weeks",
    blurb: "Bespoke business systems, multi-tenant SaaS platforms, and API architectures. You own 100% of the codebase.",
    includes: [
      "Fullstack architecture (Next.js / Node / PostgreSQL)",
      "Auth, RBAC & role-based dashboards",
      "REST / GraphQL API development",
      "Third-party & headless integrations",
      "30-day warranty + handoff repository",
    ],
    highlight: true,
  },
  {
    name: "SEO + AEO Growth",
    price: "₹35,000+",
    usd: "~$420+",
    cadence: "per month",
    duration: "3-month minimum",
    blurb: "Ongoing technical SEO and Answer Engine Optimization so you rank on Google and get cited by ChatGPT, Perplexity & Claude.",
    includes: [
      "Technical SEO audit & crawl architecture",
      "Entity & knowledge-graph structuring",
      "AI-citation (llms.txt, ai.txt, Q&A schema)",
      "Core Web Vitals monitoring & fixes",
      "Monthly search performance reporting",
    ],
    highlight: false,
  },
];

const COST_FACTORS = [
  { icon: Layers, label: "Integrations", text: "Payment gateways, CRMs, headless CMS, ERPs, and legacy systems each add controlled scope." },
  { icon: ShieldCheck, label: "Auth & Permissions", text: "Simple email auth ships included; enterprise SSO, multi-role RBAC, and audit trails are additive." },
  { icon: Clock, label: "Data Migration", text: "Importing your existing catalogue, users, or course data is scoped precisely after a discovery call." },
  { icon: Handshake, label: "AI / ML Features", text: "Recommendation engines, LLM pipelines, and custom model training are quoted per pipeline stage." },
];

const PRICING_FAQS = [
  {
    question: "How much does custom software development cost in India?",
    answer:
      "At Integral Labs, a focused web platform starts at ₹85,000 (~$1,000), while custom multi-tenant SaaS and business software engagements start at ₹2,50,000 (~$3,000) and scale with integrations, authentication complexity, data migration, and AI features. Every engagement begins with a free scoping call so the final quote matches your exact scope — no surprise line items.",
  },
  {
    question: "How long does it take to deliver a project?",
    answer:
      "Lean MVPs and marketing platforms launch in 2–4 weeks. Fullstack SaaS platforms with custom architectures ship in 6–10 weeks, delivered through structured weekly milestones with direct senior engineering attention.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Fixed-scope engagements run on a 40/40/20 milestone split: 40% to start, 40% at the mid-development checkpoint, and the remaining 20% on final delivery and handoff. Monthly SEO + AEO retainers are billed at the start of each cycle with a 3-month minimum for compounding technical work.",
  },
  {
    question: "Do I own the code and design files when the project ends?",
    answer:
      "Yes — completely. On final milestone approval, 100% of the IP, the private GitHub repository, design assets, and production deployment credentials transfer to you. There is zero vendor lock-in or recurring-per-seat fee.",
  },
];

export default function PricingPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Pricing", url: "/pricing" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(getFaqJsonLd(PRICING_FAQS)) }}
      />

      <main className="min-h-screen bg-white pt-36 pb-24 text-slate-900">
        <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">

          {/* Hero */}
          <div className="max-w-[760px] mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold mb-6 select-none">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Transparent Engagement Pricing</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-5">
              Pricing Built for Scope, Not Surprise.
            </h1>
            <p className="text-base text-slate-600 leading-relaxed max-w-[640px]">
              Every engagement starts from a structured scope, not a guessing game. Choose a starting point below — we&apos;ll return an exact milestone-based quote within 24 hours of your enquiry.
            </p>
          </div>

          {/* Package cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-20">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-gradient-to-b from-slate-900 to-slate-950 text-white border-slate-800 shadow-xl lg:-mt-4 lg:mb-4"
                    : "bg-slate-50/80 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-slate-300"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" /> Most Requested
                  </span>
                )}

                <div>
                  <h2 className={`text-lg font-extrabold tracking-tight mb-1 ${pkg.highlight ? "text-white" : "text-slate-900"}`}>
                    {pkg.name}
                  </h2>
                  <div className={`text-[11px] font-mono uppercase tracking-wider mb-5 ${pkg.highlight ? "text-slate-400" : "text-slate-400"}`}>
                    {pkg.duration} · {pkg.cadence}
                  </div>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className={`text-4xl font-extrabold tracking-tight ${pkg.highlight ? "text-white" : "text-slate-900"}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-xs font-mono ${pkg.highlight ? "text-slate-400" : "text-slate-400"}`}>
                      {pkg.usd}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-6 ${pkg.highlight ? "text-slate-300" : "text-slate-600"}`}>
                    {pkg.blurb}
                  </p>
                </div>

                <div>
                  <div className={`text-[10px] font-mono uppercase tracking-widest font-bold mb-3 ${pkg.highlight ? "text-slate-400" : "text-slate-400"}`}>
                    Included
                  </div>
                  <ul className="space-y-2.5 mb-8">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          className={`mt-0.5 shrink-0 ${pkg.highlight ? "text-blue-400" : "text-blue-600"}`}
                        />
                        <span className={`text-xs leading-relaxed ${pkg.highlight ? "text-slate-300" : "text-slate-600"}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.99] ${
                      pkg.highlight
                        ? "bg-blue-600 hover:bg-blue-500 text-white"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    <span>Request Exact Quote</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* What affects cost */}
          <section className="mb-20">
            <div className="max-w-[640px] mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Scope Drivers</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What Moves Your Quote Up or Down
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Starting prices cover the complete, self-contained deliverables above. These four factors are the honest levers that adjust the final number.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {COST_FACTORS.map((factor) => {
                const Icon = factor.icon;
                return (
                  <div key={factor.label} className="bg-white rounded-2xl border border-slate-200/80 p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{factor.label}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{factor.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* FAQ */}
          <section id="pricing-faq" className="mb-20 max-w-[840px]">
            <div className="max-w-[640px] mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">FAQ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Pricing Questions, Answered
              </h2>
            </div>

            <div className="space-y-4">
              {PRICING_FAQS.map((faq) => (
                <div key={faq.question} className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-10 sm:p-14 text-white">
            <div className="max-w-[640px]">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Get an Exact, Milestone-Based Quote in 24 Hours.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Tell us what you&apos;re building. We&apos;ll reply within 24 hours with architectural feedback, a fixed milestone plan, and a precise number — not a ballpark.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Request Your Quote</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
