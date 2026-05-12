"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export default function WhyIntegralStory() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section ref={containerRef} className="relative py-48 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div style={{ opacity, scale }}>
            <h2 className="text-display text-4xl md:text-7xl font-medium mb-12 leading-none">
              Why Integral <br /> <span className="text-white/40 italic">Exists.</span>
            </h2>
            <div className="space-y-8">
              <ProblemText text="Most startups operate independently." delay={0.1} />
              <ProblemText text="Execution becomes fragmented." delay={0.2} />
              <ProblemText text="Systems become disconnected." delay={0.3} />
              <ProblemText text="Talent becomes underutilized." delay={0.4} />
            </div>
            <p className="mt-12 text-lg text-white/50 font-light leading-relaxed max-w-xl">
              Integral Group was created as a modular execution ecosystem where specialized divisions collaborate through shared systems, technology, strategy, and infrastructure.
            </p>
          </motion.div>

          <div className="relative aspect-square glass rounded-[60px] border-white/5 overflow-hidden flex items-center justify-center">
            {/* Animated Architecture Diagram / Integration Visual */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]"
              />
              
              {/* Central Core */}
              <div className="relative z-10 w-24 h-24 glass rounded-3xl border-white/20 flex items-center justify-center shadow-2xl">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-black rotate-45" />
                </div>
              </div>

              {/* Connecting Nodes */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <div key={i} className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      x: [Math.cos(angle * Math.PI / 180) * 100, Math.cos(angle * Math.PI / 180) * 150, Math.cos(angle * Math.PI / 180) * 100],
                      opacity: [0.1, 0.4, 0.1]
                    }}
                    transition={{ duration: 5 + i, repeat: Infinity }}
                    className="w-12 h-12 glass border-white/10 rounded-2xl flex items-center justify-center"
                  >
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemText({ text, delay }: { text: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
      className="flex items-center gap-4 text-xl md:text-2xl text-white/40 font-light"
    >
      <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
      {text}
    </motion.div>
  );
}
