"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <div className="max-w-[720px] mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge mb-10"
          >
            Philosophy
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display text-[40px] sm:text-[64px] text-white mb-12 leading-tight"
          >
            Modern Software
            <br />
            Engineering With 
            <br />
            Product Thinking.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[18px] sm:text-[22px] text-[#71717a] leading-[1.6] max-w-[640px] mx-auto"
          >
            Integral Labs combines software engineering, product systems, 
            frontend development, automation, and modern UX architecture 
            to build scalable digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04] border border-white/[0.04] rounded-2xl overflow-hidden mb-32 shadow-2xl">
          {[
            { title: "Architectural Clarity", detail: "We prioritize systems that are easy to understand, maintain, and scale as requirements evolve." },
            { title: "Engineering First", detail: "Our focus is on technical quality and performance, ensuring every interface is backed by a robust core." },
            { title: "Product Mindset", detail: "We build with the end-user in mind, balancing technical complexity with practical usability." },
            { title: "Continuous Evolution", detail: "Software is never finished. We design for long-term adaptability and iterative growth." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="bg-black p-12 group"
            >
              <h2 className="text-[18px] font-semibold text-white mb-4 group-hover:text-white/80 transition-colors">{item.title}</h2>
              <p className="text-[14px] text-[#52525b] leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-[540px] mx-auto text-center border-t border-white/[0.04] pt-24">
           <p className="text-[14px] text-[#3f3f46] leading-relaxed">
             Integral Labs was founded on the belief that modern software development 
             requires a unified approach between engineering, design, and product strategy. 
             We are a studio focused on quality over volume.
           </p>
        </div>
      </div>
    </div>
  );
}
