"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, UserCheck, ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function Founders() {
  return (
    <section 
      className="relative py-32 overflow-hidden bg-transparent"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="container relative z-10">
        {/* Section Overline */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="h-px w-6 bg-white/20" />
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/30">
            Leadership
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          {/* Left Side: Story & Vision */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display text-[42px] sm:text-[60px] text-white leading-[0.9] mb-10 tracking-tighter">
                Meet the
                <br />
                <span className="italic opacity-40">Founders.</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white/40 text-base sm:text-lg leading-relaxed mb-8 font-light"
            >
              Integral Labs was founded with a single, clear objective: to bridge the gap between absolute visual excellence and robust, production-grade engineering. We believe software should not only execute perfectly under heavy loads but also delight users through fluid, organic interactive design.
            </motion.p>

            {/* Founder Quote */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 relative mb-12"
            >
              <span className="absolute -top-4 -left-2 text-6xl font-display text-purple-500/20 pointer-events-none">“</span>
              <p className="text-white/70 italic text-sm leading-relaxed mb-6 font-light">
                "We don't build temporary code or short-lived systems. We design highly performant, custom-tailored visual infrastructures that survive time, scaling alongside your operational needs while maintaining extreme frame rates."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">Tanuj & Aryan</h4>
                  <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mt-1">Founding Partners & Creative Engineers</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/10 bg-purple-500/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-[8px] font-mono text-purple-400 uppercase tracking-wider">FOUNDER_AUTH_TOKEN: ACTIVE</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Outer technical borders */}
            <div className="absolute -inset-4 border border-white/[0.03] rounded-[24px] pointer-events-none" />
            
            {/* Photo container */}
            <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-sm overflow-hidden group shadow-2xl">
              
              {/* Actual Founders Photo */}
              <Image 
                src="/founders.png" 
                alt="Founders Tanuj & Aryan" 
                fill 
                className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 420px"
                priority
              />

              {/* Subtle tech grid overlay on top of photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Corner crosshair nodes */}
              <div className="absolute top-3 left-3 font-mono text-[8px] text-white/30 select-none pointer-events-none z-10">+</div>
              <div className="absolute top-3 right-3 font-mono text-[8px] text-white/30 select-none pointer-events-none z-10">+</div>
              <div className="absolute bottom-3 left-3 font-mono text-[8px] text-white/30 select-none pointer-events-none z-10">+</div>
              <div className="absolute bottom-3 right-3 font-mono text-[8px] text-white/30 select-none pointer-events-none z-10">+</div>

              {/* Technical label overlay */}
              <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-lg border border-white/5 bg-black/60 backdrop-blur-md flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                 <span className="font-mono text-[8px] text-white/60 uppercase tracking-[0.15em]">CORE_SYS.FOUNDERS: ONLINE</span>
              </div>
            </div>

            {/* Scale indicator at bottom right of the photo frame */}
            <div className="absolute bottom-4 right-4 translate-x-8 translate-y-8 hidden md:flex items-center gap-2 pointer-events-none">
              <span className="font-mono text-[8px] text-white/20 tracking-wider">GRID_REF: IMG_SEC_04</span>
              <div className="w-8 h-px bg-white/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
