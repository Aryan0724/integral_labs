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
            transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-display text-[32px] sm:text-[48px] text-white mb-10 leading-tight"
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
            className="text-[17px] sm:text-[19px] text-[#555] leading-[1.6] max-w-[620px] mx-auto"
          >
            Integral Labs develops software systems focused on{" "}
            <span className="text-white/80">clarity</span>,{" "}
            <span className="text-white/80">scalability</span>,{" "}
            <span className="text-white/80">usability</span>, and{" "}
            <span className="text-white/80">operational efficiency</span>.
            <br /><br />
            We combine modern engineering, product thinking, and frontend precision 
            to build software designed for long-term adaptability.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
