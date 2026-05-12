"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal, Zap, Shield, Cpu } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visualRef.current) return;

    gsap.to(visualRef.current, {
      scale: 0.8,
      borderRadius: "48px",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(stickyRef.current, {
      opacity: 0,
      y: -100,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "80% top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const headline = "Building Modern Software Systems For Scalable Businesses.";
  const words = headline.split(" ");

  return (
    <section ref={containerRef} className="relative z-10 min-h-[150vh] bg-black overflow-hidden">
      <div ref={stickyRef} className="sticky top-0 h-screen flex flex-col items-center pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Elite Software Engineering Agency
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.05]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-[0.2em]"
              >
                {word === "Software" || word === "Systems" ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 leading-relaxed font-light"
          >
            Integral Labs develops high-performance web applications, SaaS platforms, 
            machine learning systems, and automation infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link
              href="#contact"
              className="group bg-white text-black px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="px-10 py-5 rounded-full font-bold text-lg text-white border border-white/10 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Cinematic Visual Section */}
        <div 
          ref={visualRef}
          className="mt-16 md:mt-24 relative w-full max-w-6xl aspect-[21/9] min-h-[300px] md:min-h-[500px] bg-white/5 border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-20" />
          
          {/* Layered Interactive Mockup Visuals */}
          <div className="grid grid-cols-12 gap-6 w-full h-full p-12 relative z-10 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="col-span-8 space-y-6">
              <div className="h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
                    <Terminal className="text-blue-400" />
                  </div>
                  <div className="h-4 w-48 bg-white/10 rounded-full" />
                </div>
                <div className="space-y-4">
                  <div className="h-8 w-full bg-white/5 rounded-lg" />
                  <div className="h-8 w-3/4 bg-white/5 rounded-lg" />
                  <div className="h-32 w-full bg-white/5 rounded-xl border border-white/5" />
                </div>
              </div>
            </div>
            <div className="col-span-4 space-y-6">
              <div className="h-1/2 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md" />
              <div className="h-1/2 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md" />
            </div>
          </div>

          {/* Floating UI Badges */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 z-30 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center gap-3"
          >
            <Zap className="text-yellow-400 w-5 h-5" />
            <span className="text-xs font-bold text-white/80">99.9% Performance</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 right-20 z-30 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center gap-3"
          >
            <Shield className="text-green-400 w-5 h-5" />
            <span className="text-xs font-bold text-white/80">Enterprise Secure</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
