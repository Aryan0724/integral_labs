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
      className={`flex flex-col justify-center max-w-[340px] pointer-events-auto ${
        i === 0 ? "justify-self-start self-start text-left" :
        i === 1 ? "justify-self-end self-start text-right" :
        i === 2 ? "justify-self-start self-end text-left" :
        "justify-self-end self-end text-right"
      }`}
    >
      <div className={`measure-bar mb-6 opacity-40 ${i % 2 === 1 ? "flex-row-reverse" : ""}`}>
        <div className="measure-line w-12" />
        <span className="blueprint-label">0{i+1}.SERVICE</span>
      </div>
      <h3 className="text-[28px] md:text-[44px] lg:text-[52px] font-display text-white mb-6 tracking-tighter leading-[0.85]">
        {q.title}
      </h3>
      <p className="text-[14px] md:text-[16px] text-white/30 leading-relaxed font-light">
        {q.description}
      </p>
    </motion.div>
  );
}

export default function IntegralStandard() {
  const [content, setContent] = useState<any>(null);
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

  return (
    <section 
      ref={sectionRef} 
      className="relative h-[450vh] bg-[#0f0f0f] overflow-visible"
    >
      {content && (
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Main Rotating Assembly */}
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

          {/* Content Layer */}
          <div className="container relative z-10 w-full h-full pointer-events-none">
            <div className="grid grid-cols-2 grid-rows-2 w-full h-full p-12 md:p-24 lg:p-32">
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
      )}
    </section>
  );
}
