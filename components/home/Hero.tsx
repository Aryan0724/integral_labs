"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Marquee from "@/components/shared/Marquee";

// Ghost cursor positions
const ghostCursors = [
  { name: "Tanuj", color: "#a78bfa", x: "25%", y: "20%", delay: 0 },
  { name: "Aryan", color: "#60a5fa", x: "75%", y: "30%", delay: 1.5 },
];

function GhostCursor({ name, color, delay }: { name: string; color: string; delay: number }) {
  return (
    <motion.div
      className="ghost-cursor"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: [0, 15, -10, 5, 0],
        y: [0, -10, 15, -5, 0],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        repeatDelay: 5,
        ease: "easeInOut",
      }}
    >
      <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
        <path d="M0 0L0 14L4 10L7 16L9 15L6 9L11 9Z" fill={color} />
      </svg>
      <div
        className="ghost-cursor-label"
        style={{ background: color + "22", color, border: `1px solid ${color}44` }}
      >
        {name}
      </div>
    </motion.div>
  );
}

function IntegralGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Spinning Integral Sign */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="relative"
      >
        <svg
          width="600"
          height="600"
          viewBox="0 0 100 100"
          className="opacity-[0.12] text-white"
        >
          <text
            x="50"
            y="70"
            fontSize="80"
            textAnchor="middle"
            fill="currentColor"
            style={{ fontStyle: 'italic', fontWeight: 200 }}
          >
            ∫
          </text>
        </svg>
        
        {/* Orbiting elements */}
        {[0, 90, 180, 270].map((angle, i) => (
          <motion.div
            key={angle}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `rotate(${angle}deg) translateX(240px)`,
            }}
          >
             <div className="w-1 h-1 bg-white/20 rounded-full" />
             <div className="blueprint-label mt-2 -ml-4 opacity-40">node_0{i+1}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pulsing rings */}
      {[300, 500, 700].map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full border border-white/[0.03]"
          style={{ width: size, height: size }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [content, setContent] = React.useState<any>(null);

  React.useEffect(() => {
    fetch('/api/cms')
      .then(res => res.json())
      .then(data => setContent(data.hero));
  }, []);

  if (!content) return <div className="min-h-screen bg-black" />;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      <IntegralGraphic />

      {/* Ghost cursors */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {ghostCursors.map((cursor) => (
          <div
            key={cursor.name}
            className="absolute"
            style={{ left: cursor.x, top: cursor.y }}
          >
            <GhostCursor name={cursor.name} color={cursor.color} delay={cursor.delay} />
          </div>
        ))}
      </div>

      <div className="container relative z-10 text-center">
        {/* Editorial headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[60px] sm:text-[90px] md:text-[120px] text-white mb-8 tracking-tighter leading-[0.9]"
        >
          {content.title.split('for').map((part: string, i: number) => (
            <React.Fragment key={i}>
              {part}
              {i === 0 && <br />}
            </React.Fragment>
          ))}
        </motion.h1>

        {/* Agency Identity Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[16px] sm:text-[18px] text-white/40 max-w-[650px] mx-auto mb-12 leading-relaxed"
        >
          {content.subtext}
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="/contact" className="btn-gradient px-10 py-5 w-full sm:w-auto text-center">
              <span>{content.primaryCta}</span>
            </Link>
            <Link 
              href="/work" 
              className="px-10 py-5 border border-purple-500/30 rounded-xl text-white hover:bg-purple-500/5 transition-all w-full sm:w-auto text-center font-bold tracking-tight shadow-[0_0_20px_rgba(139,92,246,0.1)]"
            >
              {content.secondaryCta}
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">
              Operating under Integral Groups Protocol V2.4
            </span>
          </div>
        </motion.div>
      </div>

      {/* Client Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-0 right-0"
      >
        <Marquee speed={60} className="opacity-20 hover:opacity-40 transition-opacity">
          {["INTEGRAL", "AETHER", "VORTEX", "LUMINA", "NEXUS", "QUARTZ", "IONIC", "FLUX"].map((logo) => (
            <div key={logo} className="mx-12 font-display text-lg tracking-[0.3em] font-light text-white">
              {logo}
            </div>
          ))}
        </Marquee>
      </motion.div>

      {/* Blueprint Annotations */}
      <div className="absolute top-1/4 left-12 hidden xl:block">
        <div className="measure-bar">
          <div className="measure-line w-20" />
          <span className="blueprint-label">DEPT:ENGINEERING</span>
        </div>
      </div>
    </section>
  );
}
