import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CornerDownLeft,
  Users,
  Database,
  BellRing,
  FileText,
  BarChart3,
  MessageSquare,
  Lock,
  Smartphone,
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
  title: "Custom CRM Development Company",
  description:
    "Custom CRM development for teams that outgrew Excel and won't bend to generic SaaS — pipeline, follow-ups, quotations, GST-ready invoicing and WhatsApp integration, owned outright. Fixed milestone quote within 24 hours.",
  alternates: { canonical: "/services/custom-crm-development" },
  openGraph: {
    title: "Custom CRM Development | Integral Labs",
    description:
      "A CRM built around your sales process: lead pipelines, follow-up automation, quotations, GST-ready invoicing and WhatsApp integration — owned outright, no per-seat licences.",
    type: "website",
    url: "/services/custom-crm-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CRM Development | Integral Labs",
    description:
      "A CRM built around your sales process — owned outright, no per-seat licences.",
  },
};

const MODULES = [
  {
    icon: Users,
    name: "Contacts & Company Records",
    text: "One clean record per customer and account — every call note, quotation, payment and follow-up attached, searchable in seconds instead of hunted across WhatsApp threads and spreadsheets.",
  },
  {
    icon: Database,
    name: "Lead Capture & Pipelines",
    text: "Enquiries from your website, calls, walk-ins and referral cards land in one funnel, staged exactly the way your team sells — with source tracking that shows what marketing actually pays off.",
  },
  {
    icon: BellRing,
    name: "Follow-up Reminders",
    text: "No deal dies of silence. Every record gets a next-action date, overdue items escalate visibly, and managers see who is chasing and who is coasting.",
  },
  {
    icon: FileText,
    name: "Quotations & Invoicing",
    text: "Quotations generated from live records with your terms, GST breakdowns and numbering — convertible to invoices without re-typing, exportable for your accountant.",
  },
  {
    icon: MessageSquare,
    name: "WhatsApp & Email Integration",
    text: "Follow-ups and circulars sent through the channels Indian buyers actually read, with delivery visibility — the conversation history stays attached to the customer record.",
  },
  {
    icon: BarChart3,
    name: "Reports & Dashboards",
    text: "Conversion by source, salesperson and stage; pipeline value by month; outstanding payments — the numbers owners need on one screen, not in a spreadsheet ritual.",
  },
  {
    icon: Lock,
    name: "Roles & Permissions",
    text: "Salespeople see their pipeline, managers see the team's, accounts sees payments — sensitive records and margins stay behind role walls with full audit trails.",
  },
  {
    icon: Smartphone,
    name: "Mobile-first Field Use",
    text: "Built to be used on the road on mid-range Android phones on patchy networks — because the person who meets the customer is rarely at a desk.",
  },
];

const FAQS = [
  {
    question: "How much does custom CRM development cost?",
    answer:
      "It depends on team size, modules and integrations — so we don't publish package prices; a number attached to an undescribed scope is marketing, not an estimate. Book a discovery call and walk us through how your sales actually run today; within 24 hours you receive a fixed, milestone-based quote covering scope, timeline and cost — no per-seat recurring licences, no surprise line items.",
  },
  {
    question: "Why not just buy Zoho, HubSpot or Salesforce?",
    answer:
      "For many teams a subscription genuinely is the right answer, and we say so on the call when it is. Custom wins when your sales process has real structure the generic tools can't hold — your quotation formats, approval chains, GST and Tally workflows, dealer hierarchies — and when per-seat fees compound faster than your team grows. We build the comparison honestly for your team size before recommending either path.",
  },
  {
    question: "Can it integrate with WhatsApp, Tally and GST invoicing?",
    answer:
      "Yes — these are the integrations we build most. Follow-ups and notices through WhatsApp Business with the history attached to each record, invoice exports your Tally workflow accepts, and GST-compliant quotation and invoice numbering from day one. Integration scope is quoted in the milestone plan, not discovered after launch.",
  },
  {
    question: "Our data lives in Excel and WhatsApp. Can you migrate it?",
    answer:
      "Yes — messy spreadsheets, contact dumps and chat exports are normal starting points. We clean, de-duplicate and map your records into the new system, and run a verification pass with your team before go-live so nobody loses a customer in the move. Migration is a quoted milestone, not a hidden extra.",
  },
  {
    question: "Who owns the CRM after it's built?",
    answer:
      "You do — code, database, domain and infrastructure accounts, documented handover from milestone one. No per-seat hostages, no dependency on the agency that built it. Your customer database is the most valuable asset your business owns; we engineer it so it stays yours.",
  },
];

export default function CustomCrmDevelopmentPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Custom CRM Development", url: "/services/custom-crm-development" },
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": getAbsoluteUrl("/services/custom-crm-development#service"),
    name: "Custom CRM Development",
    url: getAbsoluteUrl("/services/custom-crm-development"),
    description:
      "Custom CRM development: lead capture and pipelines, follow-up reminders, quotations and GST-ready invoicing, WhatsApp and Tally integration, role-based access and mobile-first field use — owned outright, no per-seat licences.",
    provider: { "@id": getAbsoluteUrl("#organization") },
    serviceType: "Custom CRM Development",
    areaServed: "India",
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
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(getFaqJsonLd(FAQS, "/services/custom-crm-development#faq")) }}
      />

      <main className="min-h-screen bg-white text-slate-900">
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-blue-100/50 via-indigo-50/30 to-emerald-50/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-7 select-none">
              <Sparkles size={13} className="text-blue-600" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-blue-700 font-semibold">
                Sales Systems · Built to Be Owned
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.08] mb-6 max-w-[900px]">
              A CRM Shaped Around{" "}
              <span className="text-blue-600">How Your Team Actually Sells.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[780px] mb-9">
              For teams that outgrew Excel and WhatsApp threads but won&apos;t bend their
              process around generic SaaS: your pipelines, your quotation formats, your GST
              and Tally workflow — built once, owned outright, with no per-seat licence meter
              running for the next decade.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group"
              >
                <span>Book a Discovery Call</span>
                <CornerDownLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
              </Link>
              <span className="text-sm text-slate-500">
                Fixed, milestone-based quote within 24 hours of the call.
              </span>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-16 md:py-20 border-t border-slate-100">
          <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-[680px] mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                What Gets Built
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Eight Modules. One System of Record.
              </h2>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                Every module ships only if your sales process needs it — the quote reflects
                your team, not a package. Each is engineered around your real forms, terms
                and approval chains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {MODULES.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.name}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 hover:shadow-md hover:border-slate-300 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">{m.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{m.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ownership economics + Indian sales floor */}
        <section className="py-16 md:py-20 bg-slate-900 text-white border-y border-slate-800">
          <div className="container max-w-[1240px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold block mb-3">
                Ownership Economics
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Rent Seats, or Own the Machine.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Per-seat subscriptions compound as your team grows — forever. A custom CRM
                is paid once for construction, fits your process exactly, and becomes a
                permanent asset you can extend or hand over. On the discovery call we put
                both paths side by side for your team size — and if a subscription suits
                you better, we say so.
              </p>
              <ul className="space-y-3">
                {[
                  "100% code, data and infrastructure ownership from milestone one",
                  "Your quotation formats, approval chains and dealer hierarchies built in",
                  "No per-seat recurring licence, ever",
                  "Documented handover — no hostage hosting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-800/40 p-7">
              <div className="flex items-center gap-2.5 mb-4">
                <MessageSquare size={18} className="text-blue-400" />
                <h3 className="text-sm font-bold text-white">Built for the Indian Sales Floor</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Global CRMs assume a desk, a stable network and an English-first buyer. Your
                team sells differently, so we engineer for how deals actually close here:
              </p>
              <ul className="space-y-3">
                {[
                  "WhatsApp-first follow-ups — the channel your buyers actually read",
                  "GST-ready quotations and invoicing from day one",
                  "Exports that fit your Tally/accountant workflow without re-typing",
                  "Works on mid-range Androids and patchy networks, in the field",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20">
          <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-[680px] mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                How It Runs
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                From Excel Chaos to One Screen.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  phase: "Day 0",
                  title: "Discovery call",
                  text: "You walk us through a real deal, end to end — where enquiries come from, who follows up, how quotations and approvals actually happen.",
                },
                {
                  phase: "Day 1",
                  title: "Fixed quote",
                  text: "Within 24 hours: a milestone-based quote covering modules, integrations, migration scope, delivery dates and one clearly stated number.",
                },
                {
                  phase: "Milestones",
                  title: "Build & migrate",
                  text: "Staging first, then modules in priority order — with your Excel and chat records cleaned, mapped and verified, and weekly working demos.",
                },
                {
                  phase: "Go-live",
                  title: "Train & hand over",
                  text: "Your team trained on live data, managers watching real dashboards, and complete ownership documentation handed over.",
                },
              ].map((p) => (
                <div key={p.phase} className="rounded-2xl border border-slate-200/80 p-6 hover:shadow-md transition-shadow">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-bold mb-3">
                    {p.phase}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-20">
          <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-[840px] space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Straight Answers First.
              </h2>
              {FAQS.map((faq) => (
                <div key={faq.question} className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-24">
          <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-10 sm:p-14 text-white">
              <div className="max-w-[680px]">
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
                  Your customer list is your most valuable asset. It deserves a system, not a spreadsheet.
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  Book a discovery call — walk us through one real deal, and receive an
                  exact, milestone-based build plan within 24 hours. Ownership included,
                  seat licences excluded.
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
