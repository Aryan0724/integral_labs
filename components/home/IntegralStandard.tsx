"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

function QuadrantCard({ q, i, smoothProgress }: { q: { title: string, description: string }, i: number, smoothProgress: MotionValue<number> }) {
  const opacity = useTransform(smoothProgress, [0.1 + i * 0.2, 0.2 + i * 0.2, 0.25 + i * 0.2, 0.35 + i * 0.2], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0.1 + i * 0.2, 0.2 + i * 0.2, 0.25 + i * 0.2, 0.35 + i * 0.2], [0.95, 1, 1, 0.95]);
  const yMove = useTransform(smoothProgress, [0.1 + i * 0.2, 0.2 + i * 0.2, 0.25 + i * 0.2, 0.35 + i * 0.2], [20, 0, 0, -20]);

  return (
    <motion.div
      style={{ opacity, scale, y: yMove }}
      className={`flex flex-col justify-center max-w-[340px] pointer-events-auto col-start-1 row-start-1 md:col-start-auto md:row-start-auto justify-self-center self-center text-center ${
        i === 0 ? "md:justify-self-start md:self-start md:text-left" :
        i === 1 ? "md:justify-self-end md:self-start md:text-right" :
        i === 2 ? "md:justify-self-start md:self-end md:text-left" :
        "md:justify-self-end md:self-end md:text-right"
      }`}
    >
      <div className={`measure-bar mb-4 md:mb-6 opacity-40 justify-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""} ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
        <div className="measure-line w-12" />
        <span className="blueprint-label">0{i+1}.SERVICE</span>
      </div>
      <h3 className="text-[24px] sm:text-[28px] md:text-[44px] lg:text-[52px] font-display text-white mb-4 md:mb-6 tracking-tighter leading-[0.85]">
        {q.title}
      </h3>
      <p className="text-[13px] md:text-[16px] text-white/30 leading-relaxed font-light">
        {q.description}
      </p>
    </motion.div>
  );
}

export default function IntegralStandard() {
  const [content, setContent] = useState<any>(null);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/cms')
      .then(res => res.json())
      .then(data => setContent(data.services));
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const rotation = useTransform(smoothProgress, [0, 1], [0, 360]);

  // Tech-themed blueprint schematics for each mobile tab
  const renderSchematic = (index: number) => {
    const strokeColor = "rgba(168, 85, 247, 0.4)"; // purple-500/40
    switch (index) {
      case 0: // SaaS Platform
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
            <rect x="10" y="35" width="20" height="30" rx="3" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <rect x="40" y="20" width="20" height="60" rx="3" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <rect x="70" y="35" width="20" height="30" rx="3" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <line x1="30" y1="50" x2="40" y2="50" stroke={strokeColor} strokeWidth="1" strokeDasharray="3 3" />
            <line x1="60" y1="50" x2="70" y2="50" stroke={strokeColor} strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="50" cy="35" r="3" fill="#a855f7" />
            <circle cx="50" cy="50" r="3" fill="#a855f7" />
            <circle cx="50" cy="65" r="3" fill="#a855f7" />
            <text x="50" y="95" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6" fontFamily="monospace">CLUSTER_SYS_NODE</text>
          </svg>
        );
      case 1: // AI Systems
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
            <circle cx="50" cy="50" r="12" fill="none" stroke="#a855f7" strokeWidth="1.5" />
            <circle cx="20" cy="30" r="6" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <circle cx="20" cy="70" r="6" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <circle cx="80" cy="30" r="6" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <circle cx="80" cy="70" r="6" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <line x1="26" y1="34" x2="39" y2="44" stroke={strokeColor} strokeWidth="1" />
            <line x1="26" y1="66" x2="39" y2="56" stroke={strokeColor} strokeWidth="1" />
            <line x1="74" y1="34" x2="61" y2="44" stroke={strokeColor} strokeWidth="1" />
            <line x1="74" y1="66" x2="61" y2="56" stroke={strokeColor} strokeWidth="1" />
            <circle cx="50" cy="50" r="4" fill="#a855f7" className="animate-pulse" />
            <text x="50" y="95" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6" fontFamily="monospace">NEURAL_NET_V2</text>
          </svg>
        );
      case 2: // Automation
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
            <rect x="15" y="25" width="70" height="50" rx="5" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <line x1="15" y1="38" x2="85" y2="38" stroke={strokeColor} strokeWidth="1.5" />
            <circle cx="25" cy="31" r="2" fill="#a855f7" />
            <circle cx="33" cy="31" r="2" fill="#a855f7" />
            <circle cx="41" cy="31" r="2" fill="#a855f7" />
            <line x1="25" y1="48" x2="50" y2="48" stroke={strokeColor} strokeWidth="1" />
            <line x1="25" y1="56" x2="65" y2="56" stroke={strokeColor} strokeWidth="1" />
            <line x1="25" y1="64" x2="40" y2="64" stroke={strokeColor} strokeWidth="1" />
            <text x="50" y="95" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6" fontFamily="monospace">CRON_PROC_LOG</text>
          </svg>
        );
      default: // Frontend
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
            <rect x="10" y="20" width="80" height="60" rx="4" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <line x1="10" y1="32" x2="90" y2="32" stroke={strokeColor} strokeWidth="1.5" />
            <rect x="20" y="42" width="20" height="26" rx="2" fill="none" stroke={strokeColor} strokeWidth="1" />
            <line x1="48" y1="45" x2="80" y2="45" stroke={strokeColor} strokeWidth="1" />
            <line x1="48" y1="53" x2="75" y2="53" stroke={strokeColor} strokeWidth="1" />
            <line x1="48" y1="61" x2="68" y2="61" stroke={strokeColor} strokeWidth="1" />
            <text x="50" y="95" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="6" fontFamily="monospace">UI_WIRE_LAYOUT</text>
          </svg>
        );
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-transparent overflow-visible">
      {content && (
        <>
          {/* LAPTOP / DESKTOP FRONTEND (Scroll-driven rotating assembly) */}
          <div className="hidden md:block relative h-[450vh]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
              {/* Rotating Assembly Lines */}
              <motion.div 
                style={{ rotate: rotation }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="absolute w-[200vw] h-px bg-white/[0.03]" />
                <div className="absolute h-[200vw] w-px bg-white/[0.03]" />
                
                {[0, 90, 180, 270].map((angle, i) => (
                   <div 
                     key={angle}
                     className="absolute"
                     style={{ transform: `rotate(${angle}deg) translateY(-350px)` }}
                   >
                     <span className="blueprint-label -rotate-90 origin-center opacity-40">
                       ALIGN_COORD_P{i}
                     </span>
                   </div>
                ))}
              </motion.div>

              {/* Content Grid Layer */}
              <div className="container relative z-10 w-full h-full pointer-events-none flex items-center justify-center">
                <div className="grid grid-cols-2 grid-rows-2 w-full max-w-[1200px] h-full p-24 lg:p-32">
                  {content.list.map((q: any, i: number) => (
                    <QuadrantCard 
                      key={q.title} 
                      q={q} 
                      i={i} 
                      smoothProgress={smoothProgress} 
                    />
                  ))}
                </div>
              </div>

              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="absolute inset-0 -m-64 bg-[#0f0f0f] rounded-full [mask-image:radial-gradient(circle,transparent_40%,black_100%)] pointer-events-none opacity-50" />
                
                <motion.div
                  style={{ rotate: rotation }}
                  className="relative w-36 h-36 flex items-center justify-center rounded-full bg-[#0f0f0f] border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.08)]"
                >
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white">
                      <text x="12" y="16" fontSize="16" textAnchor="middle" fill="currentColor" style={{ fontStyle: 'italic', fontWeight: 200 }}>∫</text>
                  </svg>
                  
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                      <div 
                        key={angle}
                        className="absolute w-1 h-1 bg-white/50 rounded-full"
                        style={{ transform: `rotate(${angle}deg) translateX(72px)` }}
                      />
                  ))}
                </motion.div>
                
                <div className="absolute inset-0 -m-12 border border-white/[0.05] rounded-full pointer-events-none" />
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-12 right-12">
                <div className="flex flex-col items-end gap-2">
                    <span className="blueprint-label text-purple-400">AGENCY_MODE:ACTIVE</span>
                    <div className="w-12 h-px bg-purple-400/20" />
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE FRONTEND (Interactive Terminal Tabs) */}
          <div className="block md:hidden py-24 px-6 relative z-10 max-w-lg mx-auto">
            <div className="space-y-12">
              {/* Heading */}
              <div className="text-center space-y-4">
                <div className="inline-block px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-[9px] font-bold tracking-[0.2em] text-purple-400 uppercase">
                  Capabilities Assembly
                </div>
                <h2 className="text-3xl font-display text-white tracking-tighter">
                  Our Engineering Systems.
                </h2>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-4 gap-2 bg-white/[0.02] border border-white/5 p-1.5 rounded-2xl">
                {content.list.map((q: any, i: number) => {
                  const label = i === 0 ? "SaaS" : i === 1 ? "AI" : i === 2 ? "Auto" : "UI";
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`py-3 text-center rounded-xl font-mono text-[10px] uppercase tracking-wider font-bold transition-all ${
                        activeTab === i 
                          ? "bg-purple-500/10 border border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]" 
                          : "text-white/30 border border-transparent"
                      }`}
                    >
                      0{i+1} <span className="block mt-0.5 text-[8px] opacity-65">{label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Card Terminal Container */}
              <div className="relative surface border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl overflow-hidden min-h-[360px] flex flex-col justify-between">
                
                {/* Tech/Blueprint corner graphic */}
                <div className="absolute top-4 right-4 w-28 h-28 pointer-events-none">
                  {renderSchematic(activeTab)}
                </div>

                <div className="space-y-6 z-10">
                  {/* Blueprint label */}
                  <div className="flex items-center gap-3 opacity-40">
                    <span className="text-[9px] font-mono text-white/50">SYS_EXEC_NODE://0{activeTab+1}</span>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] font-display text-white leading-tight pr-24 tracking-tight">
                    {content.list[activeTab].title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/45 leading-relaxed font-light">
                    {content.list[activeTab].description}
                  </p>
                </div>

                {/* Micro Terminal Output logs at the bottom of the card */}
                <div className="mt-8 pt-4 border-t border-white/5 font-mono text-[9px] text-purple-400/50 space-y-1">
                  <div>&gt; initialize_assembly_sequence(node_0{activeTab+1})</div>
                  <div className="text-green-500/40">&gt; state: READY_TO_COLLABORATE</div>
                  <div className="text-white/10">&gt; align_coord_p{activeTab}: SUCCESS</div>
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
