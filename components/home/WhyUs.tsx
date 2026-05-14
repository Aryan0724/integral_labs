"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="container">
        <div className="max-w-[720px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-10"
          >
            Philosophy
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display text-[32px] sm:text-[48px] text-white mb-10 leading-[1.1]"
          >
            Built With 
            <br />
            Systems Thinking
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[18px] sm:text-[22px] text-[#888] leading-[1.6] tracking-tight"
          >
            We design software systems focused on{" "}
            <span className="text-white">usability</span>,{" "}
            <span className="text-white">clarity</span>,{" "}
            <span className="text-white">scalability</span>, and{" "}
            <span className="text-white">long-term adaptability</span>.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
