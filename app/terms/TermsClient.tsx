"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white pt-28 pb-16">
      <div className="container relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-px bg-white/[0.03] pointer-events-none" />

        {/* Back Link */}
        <div className="mb-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-black/50 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all"
          >
            <ArrowLeft size={14} />
            BACK_TO_HOME
          </Link>
        </div>

        <div className="max-w-[800px] mx-auto space-y-12">
          <div>
            <div className="measure-bar mb-6">
              <div className="measure-line w-12" />
              <span className="blueprint-label uppercase tracking-[0.3em]">Terms of Service</span>
            </div>
            <h1 className="text-[50px] font-display text-white tracking-tighter leading-none mb-6">
              Terms of <span className="italic opacity-40">Service.</span>
            </h1>
            <p className="text-white/40 font-mono text-[10px] uppercase tracking-wider">
              Last Updated: June 4, 2026 | Document Ref: TS-2026.01
            </p>
          </div>

          <div className="prose prose-invert text-white/50 space-y-8 font-light text-[15px] leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-lg font-mono text-white/95 uppercase tracking-wider border-b border-white/5 pb-2">1. Scope of Agreement</h2>
              <p>
                Welcome to the digital portal of Integral Labs. By browsing this website, you agree to comply with 
                our visual licensing and service terms. We design and deliver custom software engineering infrastructures 
                under separate, client-specific Service Level Agreements (SLAs).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-mono text-white/95 uppercase tracking-wider border-b border-white/5 pb-2">2. Intellectual Property</h2>
              <p>
                All interface designs, motion flows, Canvas telemetry modules, logo marks, and code libraries showcased 
                on this website are the intellectual property of Integral Labs. Unauthorized replication or extraction 
                of assets is strictly prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-mono text-white/95 uppercase tracking-wider border-b border-white/5 pb-2">3. Disclaimers</h2>
              <p>
                The project showcases represent authentic visual and functional designs delivered to our clients. 
                Third-party sites and links are owned and operated by their respective companies, and Integral Labs 
                bears no liability for external platform updates or downtime.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-mono text-white/95 uppercase tracking-wider border-b border-white/5 pb-2">4. Support & Contacts</h2>
              <p>
                For custom licensing requests or terms inquiries, please reach out to our team at 
                <a href="mailto:contact@integralgroups.in" className="text-purple-400 hover:underline">contact@integralgroups.in</a>.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Background blueprint dots */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[-1]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
    </main>
  );
}
