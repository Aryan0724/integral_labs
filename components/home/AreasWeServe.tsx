import Link from "next/link";
import { MapPin, ArrowRight, Globe } from "lucide-react";
import { CITIES } from "@/lib/data/cities";

const CITY_LINK_LABEL: Record<string, string> = {
  dehradun: "Web development in Dehradun",
  haldwani: "App & web development in Haldwani",
  rudrapur: "Custom software in Rudrapur & SIDCUL",
  nainital: "Website design in Nainital & Bhimtal",
  haridwar: "Web development in Haridwar",
};

/**
 * Homepage "Areas We Serve" strip — local intent section anchoring the
 * Uttarakhand city pages. Server component; matches the light (slate/blue)
 * design language used across the home page.
 */
export default function AreasWeServe() {
  return (
    <section id="areas-we-serve" className="py-16 md:py-24 border-t border-slate-100 bg-white">
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="max-w-[680px] mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
            Areas We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            Engineering Uttarakhand — From the Hills to the World.
          </h2>
          <p className="text-base text-slate-500 mt-3 leading-relaxed">
            We&apos;re based in Bhimtal, Uttarakhand, and serve every major city in the state
            remotely — with on-site visits where they count — alongside clients in the US, UK &amp; UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                    <MapPin size={12} className="text-blue-500" />
                    <span className="font-mono uppercase tracking-wider">{city.heroLabel}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                    {city.city}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5 max-w-[340px]">
                    {CITY_LINK_LABEL[city.slug]}
                  </p>
                </div>
                <ArrowRight
                  size={17}
                  className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1"
                />
              </div>
            </Link>
          ))}

          {/* Global reach card */}
          <Link
            href="/contact"
            className="group rounded-2xl border border-slate-900 bg-gradient-to-r from-slate-900 to-slate-950 p-6 text-white hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                  <Globe size={12} className="text-blue-400" />
                  <span className="font-mono uppercase tracking-wider">Beyond the state</span>
                </div>
                <h3 className="text-lg font-extrabold tracking-tight">
                  India-wide &amp; international delivery
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1.5 max-w-[420px]">
                  Remote-first for clients across India, the United States, United Kingdom &amp; UAE —
                  the same senior engineering pipeline, the same 24-hour response.
                </p>
              </div>
              <ArrowRight
                size={17}
                className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-1"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
