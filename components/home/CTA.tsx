"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="container">
        <div className="relative rounded-2xl border border-white/6 bg-[#0d0d0d] overflow-hidden p-12 md:p-20 text-center">
          {/* Subtle background accent */}
          <div className="absolute inset-0 grid-texture opacity-60 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#6366f1]/5 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-[480px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge mb-6 mx-auto"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
              Ready when you are
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="text-display text-[32px] sm:text-[44px] text-white mb-5"
            >
              Build Better
              <br />Software Systems.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="text-[15px] text-[#666] leading-[1.7] mb-8"
            >
              Modern products engineered for usability,
              scalability, and performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
            >
              <Link href="/contact" className="btn-primary text-[14px] px-6 py-3 inline-flex">
                Start A Project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
