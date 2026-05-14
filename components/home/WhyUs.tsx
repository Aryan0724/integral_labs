"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="container">
        <div className="max-w-[680px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-8"
          >
            Philosophy
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-display text-[32px] sm:text-[44px] text-white mb-8 leading-[1.1]"
          >
            Built With
            <br />Systems Thinking
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="space-y-5"
          >
            <p className="text-[15px] text-[#888] leading-[1.8]">
              We design software systems that reduce friction, improve usability,
              and scale with modern operational needs.
            </p>
            <p className="text-[15px] text-[#888] leading-[1.8]">
              Our focus is not just features — but{" "}
              <span className="text-white font-medium">clarity</span>,{" "}
              <span className="text-white font-medium">performance</span>, and{" "}
              <span className="text-white font-medium">long-term adaptability</span>.
              We build products that engineering teams are proud to maintain.
            </p>
          </motion.div>

          {/* Principles row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { title: "Composable", body: "Every module is designed to be reused, extended, and composed into larger systems." },
              { title: "Observable", body: "Telemetry, logging, and monitoring are first-class concerns, not afterthoughts." },
              { title: "Scalable", body: "Architecture decisions consider the 100x growth case from day one." },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="surface-2 rounded-xl p-5 border border-white/5"
              >
                <h4 className="text-[13px] font-semibold text-white mb-2">{p.title}</h4>
                <p className="text-[12px] text-[#666] leading-[1.65]">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
