import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CornerDownLeft,
  BedDouble,
  CalendarRange,
  Percent,
  CreditCard,
  Link2,
  MessageSquare,
  ClipboardCheck,
  BarChart3,
  WifiOff,
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
  title: "Hotel Booking Website Development Company",
  description:
    "Hotel booking website development for hotels, resorts and homestays that want direct reservations — real-time booking engine, seasonal rates, UPI payments, OTA sync and WhatsApp guest messages. Owned outright, no commission on direct bookings. Fixed milestone quote within 24 hours.",
  alternates: { canonical: "/services/hotel-booking-website" },
  openGraph: {
    title: "Hotel Booking Website Development | Integral Labs",
    description:
      "Direct-booking websites for hotels, resorts and homestays: real-time booking engine, seasonal rate plans, UPI payments, OTA sync and WhatsApp guest messaging — owned outright, no commission on direct bookings.",
    type: "website",
    url: "/services/hotel-booking-website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Booking Website Development | Integral Labs",
    description:
      "Direct-booking websites for hotels, resorts and homestays — owned outright, no commission on direct bookings.",
  },
};

const MODULES = [
  {
    icon: BedDouble,
    name: "Room & Inventory Management",
    text: "Room types, seasonal inventory and housekeeping status in one system — every unit you actually sell mapped exactly, from a six-room homestay to a sixty-room resort.",
  },
  {
    icon: CalendarRange,
    name: "Real-Time Booking Engine",
    text: "Live availability with instant confirmation — a real reservation system, not a contact form wearing a booking costume. Guests book and receive their confirmation without a phone call.",
  },
  {
    icon: Percent,
    name: "Rate Plans & Seasonal Pricing",
    text: "Weekend, festival and peak-season pricing — Char Dham season, Kanwar weeks, long weekends — managed from a dashboard, without calling a developer for every rate change.",
  },
  {
    icon: CreditCard,
    name: "UPI-First Payments",
    text: "UPI, cards and netbanking with instant receipts — plus pay-at-hotel options for the walk-in-and-confirm style of Indian travel. Payment flows built for how guests actually pay.",
  },
  {
    icon: Link2,
    name: "OTA Channel Sync",
    text: "Rates and availability pushed automatically to Booking.com, MakeMyTrip and Airbnb, so the same room is never sold twice — the OTAs keep working without overselling your inventory.",
  },
  {
    icon: MessageSquare,
    name: "Guest CRM & WhatsApp Notices",
    text: "Booking confirmations, pre-arrival messages and return-guest offers through WhatsApp — the channel Indian travellers actually read — with every guest record staying in your database.",
  },
  {
    icon: ClipboardCheck,
    name: "Housekeeping & Front-Desk Board",
    text: "A live room-status board for check-ins, check-outs and cleaning rounds, so the front desk and the floor staff finally work from the same truth instead of shouting across the lobby.",
  },
  {
    icon: BarChart3,
    name: "Occupancy & Revenue Reports",
    text: "Occupancy, average daily rate and the direct-versus-OTA booking mix on one screen — the numbers that tell you whether your margin is recovering month over month.",
  },
];

const FAQS = [
  {
    question: "How much does a hotel booking website cost?",
    answer:
      "It depends on room count, integrations and migration scope — so we don't publish package prices; a number attached to an undescribed scope is marketing, not an estimate. Book a discovery call and walk us through your property, your seasons and how you take bookings today; within 24 hours you receive a fixed, milestone-based quote covering scope, timeline and cost — no commissions on direct bookings, no surprise line items.",
  },
  {
    question: "Will it work alongside Booking.com and MakeMyTrip?",
    answer:
      "Yes — and it should. OTAs are discovery machines and abandoning them is bad advice. What changes is the mechanics: rates and availability sync automatically so you never oversell a room, and a growing share of guests book direct instead of through a commission. On the discovery call we will show you the booking-mix maths for your property honestly.",
  },
  {
    question: "We run a small 10-room property. Is a booking system overkill?",
    answer:
      "Usually the opposite — small properties feel OTA commissions most, because the same percentage comes off every booking with no volume to negotiate against. For many guesthouses the commission recovered in a single season exceeds the build cost. That said, the maths depends on your occupancy and booking mix, and if a simpler setup serves you better we will say so on the call rather than sell you a bigger system.",
  },
  {
    question: "Can guests pay online, and how?",
    answer:
      "Yes — UPI first, because that is what Indian travellers use, plus cards and netbanking. Pay-at-hotel options are supported too, because a confirmed reservation without an online payment is often exactly what a hill-town guest wants. Receipts, refunds and reconciliation flows are built into the booking engine rather than handled in a spreadsheet afterwards.",
  },
  {
    question: "Who owns the website and the guest data?",
    answer:
      "You do — code, database, domain and infrastructure accounts, with documented handover from milestone one. This is the quiet tragedy of OTA dependence: the guest list, the most valuable asset a hospitality business owns, lives on someone else's platform. A direct booking engine keeps every reservation, contact and review under your ownership.",
  },
];

export default function HotelBookingWebsitePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Hotel Booking Website Development", url: "/services/hotel-booking-website" },
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": getAbsoluteUrl("/services/hotel-booking-website#service"),
    name: "Hotel Booking Website Development",
    url: getAbsoluteUrl("/services/hotel-booking-website"),
    description:
      "Direct-booking website development for hotels, resorts and homestays: real-time booking engine, seasonal rate plans, UPI-first payments, OTA channel sync, WhatsApp guest messaging and occupancy reporting — owned outright, no commission on direct bookings.",
    provider: { "@id": getAbsoluteUrl("#organization") },
    serviceType: "Hotel Booking Website Development",
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
        dangerouslySetInnerHTML={{ __html: safeJsonLdReplacer(getFaqJsonLd(FAQS, "/services/hotel-booking-website#faq")) }}
      />

      <main className="min-h-screen bg-white text-slate-900">
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-blue-100/50 via-indigo-50/30 to-emerald-50/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="container relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-7 select-none">
              <Sparkles size={13} className="text-blue-600" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-blue-700 font-semibold">
                Tourism &amp; Hospitality · Direct Booking Systems
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.08] mb-6 max-w-[900px]">
              A Hotel Booking Website That{" "}
              <span className="text-blue-600">Turns Guests Into Direct Bookings.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[780px] mb-9">
              Every reservation that arrives through someone else&apos;s platform pays a
              commission on your own rooms. A purpose-built booking website — real-time
              availability, seasonal rates, UPI payments, OTA sync and WhatsApp guest
              messaging — recovers that margin and keeps the guest list where it belongs:
              with you.
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
                Eight Modules. One Booking Engine.
              </h2>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                Every module ships only if your property needs it — the quote reflects
                your rooms, seasons and staff, not a package. Each is engineered for how
                Indian travellers actually book and pay.
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

        {/* Ownership economics + hill-tourism reality */}
        <section className="py-16 md:py-20 bg-slate-900 text-white border-y border-slate-800">
          <div className="container max-w-[1240px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold block mb-3">
                Ownership Economics
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Pay a Commission Forever, or Own the Channel.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                OTA commissions run on every booking, every season, forever — and
                booking-widget subscriptions rent you a locked box that never becomes
                yours. A direct booking engine is paid once for construction, keeps every
                direct reservation commission-free, and turns your guest list into a
                permanent asset you can market to. On the discovery call we put both
                paths side by side for your property — and when the OTAs should keep
                working as your discovery channel, we say so.
              </p>
              <ul className="space-y-3">
                {[
                  "No commission on direct bookings, ever",
                  "100% code, data and infrastructure ownership from milestone one",
                  "Your guest list, reviews and booking history stay yours",
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
                <h3 className="text-sm font-bold text-white">Built for Hill Tourism Reality</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Metro-built booking sites assume steady traffic and data-centre
                conditions. Uttarakhand tourism provides neither — so we engineer for
                the seasons you actually run:
              </p>
              <ul className="space-y-3">
                {[
                  "Surge-ready for Char Dham season, Kanwar weeks and long weekends",
                  "Fast, compressed pages on the patchy networks hill towns actually have",
                  "Hindi and English guest experience, WhatsApp-first confirmations",
                  "Pay-at-hotel flows alongside UPI, cards and netbanking",
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
                From Discovery Call to First Direct Booking.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  phase: "Day 0",
                  title: "Discovery call",
                  text: "You walk us through the property — room mix, seasons, rate rules, how bookings and OTAs work today, and where the front desk hurts.",
                },
                {
                  phase: "Day 1",
                  title: "Fixed quote",
                  text: "Within 24 hours: a milestone-based quote covering the booking engine, integrations, migration scope, delivery dates and one clearly stated number.",
                },
                {
                  phase: "Milestones",
                  title: "Build & migrate",
                  text: "Staging first, then the booking engine, rates, rooms, photos and OTA sync — with existing reservations migrated and verified, and weekly working demos.",
                },
                {
                  phase: "Go-live",
                  title: "Train & hand over",
                  text: "Front desk and housekeeping trained on live data, OTAs synced and verified, and complete ownership documentation handed over.",
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
                  Your rooms are full. The question is whose margin they fill.
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  Book a discovery call — walk us through your property and seasons, and
                  receive an exact, milestone-based build plan within 24 hours. Direct
                  bookings owned, commissions optional.
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
