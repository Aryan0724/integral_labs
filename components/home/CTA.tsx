"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-40 overflow-hidden bg-[#0f0f0f]">
      {/* Background Pulsing Circles - Central hub feel */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        {[400, 600, 800].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-purple-500/20"
            style={{ width: size, height: size }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 text-center">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex justify-center"
          >
             <div className="px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">Ready to scale?</span>
             </div>
          </motion.div>

          <h2 className="text-[40px] md:text-[80px] font-display text-white mb-12 tracking-tighter leading-[0.9]">
            Let's build your next
            <br />
            <span className="italic opacity-40">digital advantage.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="btn-gradient px-10 py-5 w-full sm:w-auto text-center">
              <span>Start Your Project</span>
            </Link>
            <Link 
              href="https://calendly.com" 
              className="px-10 py-5 border border-white/10 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all w-full sm:w-auto text-center font-bold tracking-tight"
            >
              Book Strategy Call
            </Link>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-4">
             <div className="h-px w-24 bg-white/10" />
             <p className="text-[11px] font-mono text-white/20 uppercase tracking-[0.2em]">
                Integral Groups Agency Department — Protocol V2.4
             </p>
          </div>
        </div>
      </div>

      {/* Crosshair nodes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] pointer-events-none opacity-20">
         <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full" />
         <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full" />
         <div className="absolute bottom-0 left-0 w-1 h-1 bg-white rounded-full" />
         <div className="absolute bottom-0 right-0 w-1 h-1 bg-white rounded-full" />
      </div>
    </section>
  );
}
