"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="section-padding py-32 border-t border-white/[0.04]">
      <div className="container">
        <div className="surface bg-[#050505] rounded-[32px] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden">
          {/* Signature Depth */}
          <div className="ambient-beam top-0 left-1/2 -translate-x-1/2 opacity-20" />
          
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-8"
          >
            Get Started
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display text-[36px] sm:text-[56px] text-white mb-6"
          >
            Build Better
            <br />
            Software Systems.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#71717a] text-[16px] mb-12 max-w-[480px]"
          >
            Modern products engineered for usability, scalability, and performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-[15px] hover:bg-[#f4f4f5] transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Start A Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
