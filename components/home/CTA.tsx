"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="section-padding py-32 border-t border-white/5">
      <div className="container">
        <div className="surface rounded-[32px] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#6366f1]/10 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-8 bg-white/5 text-white/60"
          >
            Ready to build?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display text-[36px] sm:text-[56px] text-white mb-10 leading-tight max-w-[600px]"
          >
            Build Better
            <br />
            Software Systems.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-[15px] hover:bg-[#eee] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
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
