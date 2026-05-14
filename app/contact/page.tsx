"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Zap, ArrowRight, MessageSquare, Globe } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-0 w-[800px] h-[800px] bg-purple-600/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] left-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Info Side */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
            >
              <MessageSquare className="w-3 h-3 text-purple-500" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/50">Transmission Center</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-display text-5xl md:text-7xl font-black text-white mb-10 leading-[0.9]"
            >
              INITIATE <br />
              <span className="text-gradient-purple italic font-medium">DEPLOYMENT.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/40 leading-relaxed mb-16 font-light tracking-tight"
            >
              Ready to architect the next standard of digital intelligence? 
              Reach out and let&apos;s build the future together.
            </motion.p>

            <div className="space-y-12">
               <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-600/20 group-hover:border-purple-500/50 transition-all">
                     <Mail className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] block mb-1">Email Interface</span>
                     <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">hello@integralgroups.in</span>
                  </div>
               </div>

               <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all">
                     <Globe className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] block mb-1">Global Node</span>
                     <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Based in Bangalore, India</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.6 }}
               className="glass p-10 md:p-20 rounded-[60px] border-white/5 shadow-2xl relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-10">
                   <Zap className="w-10 h-10 text-white/5" />
                </div>

                <form className="space-y-8 relative z-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Full Name</label>
                         <input 
                           type="text" 
                           placeholder="Enter your name"
                           className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-purple-500/50 transition-all"
                         />
                      </div>
                      <div className="space-y-3">
                         <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Email Address</label>
                         <input 
                           type="email" 
                           placeholder="Enter your email"
                           className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-purple-500/50 transition-all"
                         />
                      </div>
                   </div>

                   <div className="space-y-3">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Project Category</label>
                      <div className="flex flex-wrap gap-4">
                         {["Web Dev", "AI/ML", "Automation", "Branding"].map(cat => (
                           <button key={cat} type="button" className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-white/40 hover:border-purple-500/50 hover:text-white transition-all uppercase tracking-widest">{cat}</button>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-3">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Project Brief</label>
                      <textarea 
                        rows={6}
                        placeholder="Describe your vision..."
                        className="w-full bg-white/5 border border-white/10 rounded-[32px] px-8 py-6 text-white placeholder:text-white/10 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                      />
                   </div>

                   <button 
                     type="submit"
                     className="group w-full h-24 bg-white text-black rounded-full flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl overflow-hidden relative"
                   >
                      <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <span className="text-sm font-black uppercase tracking-[0.3em] relative z-10 group-hover:text-white transition-colors">Send Transmission</span>
                      <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:text-white transition-all" />
                   </button>
                </form>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
