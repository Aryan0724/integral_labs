"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-white/[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Modern Engineering Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Building Modern <span className="text-white/40">Software Systems</span> <br />
            For Scalable Businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed"
          >
            Integral Labs develops high-performance web applications, SaaS platforms, 
            machine learning systems, and automation infrastructure for startups and modern businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="#contact"
              className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-white/90 transition-all"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/10 hover:bg-white/5 transition-all"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Technical Visual - Dashboard Preview / Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 relative w-full max-w-5xl aspect-[16/9] rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="ml-4 h-4 w-32 bg-white/10 rounded" />
            </div>
            
            <div className="p-12 pt-20 grid grid-cols-12 gap-6 h-full">
              <div className="col-span-8 flex flex-col gap-6">
                <div className="h-40 w-full rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-1/3 bg-white/20 rounded" />
                      <div className="h-3 w-1/2 bg-white/10 rounded" />
                    </div>
                  </div>
                  <div className="h-12 w-full bg-white/5 rounded-lg border border-white/5" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="h-40 rounded-xl border border-white/10 bg-white/5" />
                  <div className="h-40 rounded-xl border border-white/10 bg-white/5" />
                </div>
              </div>
              <div className="col-span-4 flex flex-col gap-6">
                <div className="flex-1 rounded-xl border border-white/10 bg-white/5" />
              </div>
            </div>

            {/* Floating Terminal Element */}
            <div className="absolute bottom-10 right-10 z-20 w-80 h-48 rounded-xl bg-black border border-white/10 p-4 shadow-2xl animate-float">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-4 h-4 text-white/50" />
                <span className="text-[10px] text-white/50 font-mono">deployment_logs.sh</span>
              </div>
              <div className="space-y-1 font-mono text-[10px]">
                <div className="text-green-400">✔ Initializing system architecture...</div>
                <div className="text-white/70">→ Scaling cluster node-01</div>
                <div className="text-white/70">→ Building production bundle</div>
                <div className="text-green-400">✔ Deployment successful in 2.4s</div>
                <div className="text-white/30">$ waiting for traffic...</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
