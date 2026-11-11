import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CornerDownLeft,
  GraduationCap,
  IndianRupee,
  Users,
  ClipboardCheck,
  Bus,
  Smartphone,
  CalendarCheck,
  WifiOff,
  ShieldCheck,
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
  title: "School Management Software Development Company",
  description:
    "Custom school management software built around how your school actually runs — admissions, fees, attendance, exams, transport and a parent app. Owned outright, no per-student licences. Fixed milestone quote within 24 hours.",
  alternates: { canonical: "/services/school-management-software" },
  openGraph: {
    title: "School Management Software Development | Integral Labs",
    description:
      "Purpose-built school ERP: admissions, fees, attendance, exams, transport and parent app — engineered for hill-area connectivity, owned outright by your institution.",
    type: "website",
    url: "/services/school-management-software",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Management Software Development | Integral Labs",
    description:
      "Purpose-built school ERP: admissions, fees, attendance, exams, transport and parent app — owned outright by your institution.",
  },
};

const MODULES = [
  {
    icon: Users,
    name: "Admissions & Enquiry CRM",
    text: "Every enquiry captured and followed to closure — walk-ins, calls, referral cards — with counsellor-wise pipelines, follow-up reminders and conversion reports you can actually act on.",
  },
  {
    icon: IndianRupee,
    name: "Fee Management",
    text: "Class-wise and concession-wise fee structures, due-date tracking, part payments, instant receipts and defaulter lists that go out automatically before anyone has to ask.",
  },
  {
    icon: ClipboardCheck,
    name: "Attendance",
    text: "Period-wise or day-wise attendance in under a minute per class, biometric-device friendly for staff, and automatic parent notifications for absences.",
  },
  {
    icon: GraduationCap,
    name: "Exams & Report Cards",
    text: "Your exact examination scheme — unit tests, terminals, weightages, grace rules — built in once, so report cards generate in minutes instead of teacher-weekends.",
  },
  {
    icon: CalendarCheck,
    name: "Timetable & Substitute Planning",
    text: "Conflict-free timetables with teacher-load balancing, room allocation and one-click substitute assignment when someone is on leave.",
  },
  {
    icon: Bus,
    name: "Transport & Routes",
    text: "Route-wise student mapping, driver and vehicle records, transport-fee integration, and pickup/drop visibility for the transport desk.",
  },
  {
    icon: Smartphone,
    name: "Parent App & WhatsApp Notices",
    text: "A clean parent-facing app for fees, homework, results and notices — plus WhatsApp-based circulars, because that is what parents actually read.",
  },
  {
    icon: ShieldCheck,
    name: "HR, Payroll-lite & Records",
    text: "Staff records, leave tracking, salary sheets your accountant can use directly, and a permanent, exportable digital archive of student documents.",
  },
];

const FAQS = [
  {
    question: "How much does custom school management software cost?",
    answer:
      "It depends on your modules, student volume and integrations — so we don't publish package prices, because a number attached to an undescribed scope is marketing, not an estimate. Book a discovery call and describe how your school runs; within 24 hours you receive a fixed, milestone-based quote covering scope, timeline and cost — no per-student recurring licences, no surprise line items.",
  },
  {
    question: "Why not just buy an existing school SaaS subscription?",
    answer:
      "Off-the-shelf products rent you their workflow: you pay per student, every year, forever, and your processes bend around their software. With a custom build you pay once for construction, own the code and data outright, get exactly your fee structures and report-card schemes, and stop the licence meter entirely. For most schools the ownership maths wins within a few billing cycles — we will show you the comparison honestly on the call, including when it doesn't.",
  },
  {
    question: "We run on low bandwidth and face power cuts. Will it still work?",
    answer:
      "Yes — this is where our engineering differs from metro-built products. We build offline-tolerant flows, aggressively compressed pages, and attendance/entry screens that work on poor connections. Your office runs on what the hill area actually provides, not on a data-centre assumption.",
  },
  {
    question: "Can you migrate our existing records from Excel or another system?",
    answer:
      "Yes. Student registers, fee ledgers, staff records and previous-year results are cleaned, mapped and migrated during the build, with a verification pass before go-live. Migration scope is quoted in the milestone plan, not discovered later as a surprise.",
  },
  {
    question: "Who owns the software and the data?",
    answer:
      "You do — code, database, domain and infrastructure accounts, with documented handover from milestone one. No licence hostages, no 'hosted with us' dependency. Your institution's records are a permanent asset; we engineer it so they stay that way.",
  },
];

export default function SchoolManagementSoftwarePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "School Management Software Development", url: "/services/school-management-software" },
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": getAbsoluteUrl("/services/school-management-software#service"),
    name: "School Management Software Development",
    url: getAbsoluteUrl("/services/school-management-software"),
    description:
      "Custom school ERP development: admissions CRM, fee management, attendance, exams and report cards, timetable, transport, parent app and WhatsApp notices — owned outright by the institution, engineered for low-bandwidth campuses.",
    provider: { "@id": getAbsoluteUrl("#organization") },
    serviceType: "School Management Software Development",
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
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(getFaqJsonLd(FAQS, "/services/school-management-software#faq")) }}
      />

      <main className="min-h-screen bg-white text-slate-900">
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-blue-100/50 via-indigo-50/30 to-emerald-50/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-7 select-none">
              <Sparkles size={13} className="text-blue-600" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-blue-700 font-semibold">
                Vertical SaaS · Schools &amp; Coaching Institutes
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.08] mb-6 max-w-[900px]">
              School Management Software Built Around{" "}
              <span className="text-blue-600">Your School&apos;s Actual Workflow.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[780px] mb-9">
              Not a rented subscription that bends your institution around its modules — a
              purpose-built ERP for admissions, fees, attendance, exams, transport and parent
              communication, matching your fee structures and report-card schemes exactly.
              Owned outright by your school, with no per-student licence meter running forever.
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
                Eight Modules. One System. Zero Licence Meter.
              </h2>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                Every module below ships only if your school needs it — the quote reflects
                your institution, not a package. Each is engineered to your real forms,
                fee rules and academic scheme.
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

        {/* Custom vs SaaS + hill-area reality */}
        <section className="py-16 md:py-20 bg-slate-900 text-white border-y border-slate-800">
          <div className="container max-w-[1240px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold block mb-3">
                Ownership Economics
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Rent a Workflow, or Own the Machine.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Per-student subscriptions compound for decades and never end. A custom build
                is paid once, matches your institution exactly, and becomes a permanent asset
                you can extend, sell or hand over. On the discovery call we put both paths
                side by side — and if a subscription genuinely suits you better, we say so.
              </p>
              <ul className="space-y-3">
                {[
                  "100% code, data and infrastructure ownership from milestone one",
                  "Your fee structures, concessions and report-card schemes built in exactly",
                  "No per-student recurring licence, ever",
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
                <WifiOff size={18} className="text-blue-400" />
                <h3 className="text-sm font-bold text-white">Built for Hill-Area Reality</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Metro-built school software assumes data-centre conditions. Uttarakhand
                campuses don&apos;t always provide them — so we engineer for the network you
                actually have:
              </p>
              <ul className="space-y-3">
                {[
                  "Offline-tolerant attendance and fee entry on poor connections",
                  "Aggressively compressed pages that load on 3G-grade bandwidth",
                  "Hindi-first parent interfaces, with English where the office needs it",
                  "WhatsApp-first notices — the channel parents actually read",
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
                From Discovery Call to Digital Archive.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  phase: "Day 0",
                  title: "Discovery call",
                  text: "You describe how the school runs — admissions season, fee rules, exam scheme, transport desk. We ask the uncomfortable questions.",
                },
                {
                  phase: "Day 1",
                  title: "Fixed quote",
                  text: "Within 24 hours: a milestone-based quote covering scope, build sequence, delivery dates and one clearly stated number.",
                },
                {
                  phase: "Milestones",
                  title: "Build & migrate",
                  text: "Staging first, then modules in priority order — with your records migrated and verified, and weekly working demos.",
                },
                {
                  phase: "Go-live",
                  title: "Train & hand over",
                  text: "Office staff trained in person or on call, parents onboarded via WhatsApp, and complete ownership documentation handed over.",
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
                  Your fee ledgers deserve better than spreadsheets.
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  Book a discovery call — describe how your school runs, and receive an
                  exact, milestone-based build plan within 24 hours. Ownership included,
                  licences excluded.
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
