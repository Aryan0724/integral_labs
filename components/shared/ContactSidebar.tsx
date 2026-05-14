"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Briefcase, Globe, Phone, Calendar, Mail, X } from "lucide-react";

export default function ContactSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-end">
      {/* The "Pill" Trigger */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-black py-8 px-2 flex flex-col items-center gap-4 rounded-l-2xl shadow-2xl hover:bg-gray-100 transition-colors group"
      >
        <span className="font-bold text-xl tracking-tighter leading-none group-hover:scale-110 transition-transform">∫</span>
        <div className="h-px w-6 bg-black/10" />
        <span className="font-mono text-[10px] uppercase tracking-widest [writing-mode:vertical-lr] font-bold py-2">
          Contact Agency
        </span>
      </motion.button>

      {/* Expanded Contact Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 mr-12 w-[320px] bg-[#111] border border-white/10 rounded-3xl p-8 shadow-3xl backdrop-blur-xl"
          >
            <div className="flex justify-between items-center mb-10">
               <h3 className="text-xl font-display text-white italic">Let's build.</h3>
               <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors">
                  <X size={20} />
               </button>
            </div>

            <div className="space-y-8">
               {/* Call Booking CTA */}
               <a 
                 href="https://calendly.com" 
                 target="_blank" 
                 className="flex items-center justify-between p-5 rounded-2xl bg-white text-black group hover:bg-white/90 transition-all"
               >
                  <div className="flex items-center gap-4">
                     <Calendar size={20} />
                     <span className="text-sm font-bold tracking-tight">Book a Strategy Call</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                     <span className="text-xs">→</span>
                  </div>
               </a>

               {/* Direct Options */}
               <div className="space-y-4">
                  <a href="mailto:hello@integralgroups.in" className="flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/[0.02] transition-all text-white/60 hover:text-white">
                     <Mail size={18} />
                     <span className="text-sm">hello@integralgroups.in</span>
                  </a>
                  <a href="tel:+1234567890" className="flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/[0.02] transition-all text-white/60 hover:text-white">
                     <Phone size={18} />
                     <span className="text-sm">+1 (234) 567 890</span>
                  </a>
               </div>

               {/* Socials - Using generic high-quality icons as lucide-react excludes brand logos */}
               <div className="pt-4">
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] block mb-6">Our Ecosystem</span>
                  <div className="flex items-center gap-6">
                     <a href="#" className="text-white/40 hover:text-white transition-colors" title="Twitter">
                        <Send size={20} />
                     </a>
                     <a href="#" className="text-white/40 hover:text-white transition-colors" title="LinkedIn">
                        <Briefcase size={20} />
                     </a>
                     <a href="#" className="text-white/40 hover:text-white transition-colors" title="GitHub">
                        <Globe size={20} />
                     </a>
                  </div>
               </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-white/20 font-mono uppercase tracking-widest">Available for new projects</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
