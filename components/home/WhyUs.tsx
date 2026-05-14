"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="section-padding border-t border-white/[0.04]">
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
            transition={{ delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="text-display text-[32px] sm:text-[44px] text-white mb-10 leading-tight"
          >
            Built With 
            <br />
            Systems Thinking
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[17px] sm:text-[19px] text-[#555] leading-[1.6] max-w-[580px] mx-auto"
          >
            We design software systems focused on{" "}
            <span className="text-white/80">usability</span>,{" "}
            <span className="text-white/80">scalability</span>,{" "}
            <span className="text-white/80">performance</span>, and{" "}
            <span className="text-white/80">long-term maintainability</span>.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
