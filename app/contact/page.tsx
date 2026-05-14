"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Send, MessageSquare, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Info Side */}
          <div className="lg:w-[400px]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge mb-6"
            >
              Contact Us
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="text-display text-[40px] sm:text-[52px] text-white mb-8 leading-[1.1]"
            >
              Start A
              <br />
              Project.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-[15px] text-[#888] leading-[1.8] mb-12"
            >
              Ready to architect the next standard of digital systems? 
              Reach out and let&apos;s build better software together.
            </motion.p>

            <div className="space-y-8">
               <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-[#111] border border-white/8 flex items-center justify-center group-hover:border-white/15 transition-all">
                     <Mail className="w-4 h-4 text-[#6366f1]" />
                  </div>
                  <div>
                     <span className="text-[11px] font-medium text-[#444] uppercase tracking-wider block mb-1">Email</span>
                     <span className="text-[15px] font-medium text-white group-hover:text-[#6366f1] transition-colors">hello@integralgroups.in</span>
                  </div>
               </div>

               <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-[#111] border border-white/8 flex items-center justify-center group-hover:border-white/15 transition-all">
                     <Globe className="w-4 h-4 text-[#6366f1]" />
                  </div>
                  <div>
                     <span className="text-[11px] font-medium text-[#444] uppercase tracking-wider block mb-1">Location</span>
                     <span className="text-[15px] font-medium text-white group-hover:text-[#6366f1] transition-colors">Bangalore, India</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="surface-2 p-8 md:p-12 rounded-2xl border border-white/6"
             >
                <form className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2.5">
                         <label className="text-[11px] font-medium text-[#444] uppercase tracking-wider ml-1">Full Name</label>
                         <input 
                           type="text" 
                           placeholder="John Doe"
                           className="w-full bg-[#080808] border border-white/8 rounded-xl px-5 py-4 text-[14px] text-white placeholder:text-[#333] focus:outline-none focus:border-[#6366f1]/50 transition-all"
                         />
                      </div>
                      <div className="space-y-2.5">
                         <label className="text-[11px] font-medium text-[#444] uppercase tracking-wider ml-1">Email Address</label>
                         <input 
                           type="email" 
                           placeholder="john@company.com"
                           className="w-full bg-[#080808] border border-white/8 rounded-xl px-5 py-4 text-[14px] text-white placeholder:text-[#333] focus:outline-none focus:border-[#6366f1]/50 transition-all"
                         />
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[11px] font-medium text-[#444] uppercase tracking-wider ml-1">What can we help with?</label>
                      <div className="flex flex-wrap gap-2">
                         {["SaaS Platforms", "AI Products", "Automation", "Interface Design"].map(cat => (
                           <button key={cat} type="button" className="px-4 py-2 rounded-lg border border-white/8 bg-[#080808] text-[12px] font-medium text-[#555] hover:border-[#6366f1]/40 hover:text-white transition-all">{cat}</button>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-2.5">
                      <label className="text-[11px] font-medium text-[#444] uppercase tracking-wider ml-1">Project Brief</label>
                      <textarea 
                        rows={5}
                        placeholder="Tell us about your goals and timeline..."
                        className="w-full bg-[#080808] border border-white/8 rounded-xl px-5 py-4 text-[14px] text-white placeholder:text-[#333] focus:outline-none focus:border-[#6366f1]/50 transition-all resize-none"
                      />
                   </div>

                   <button 
                     type="submit"
                     className="btn-primary w-full py-4 text-[14px] flex justify-center"
                   >
                      Send Message
                      <ArrowUpRight className="w-4 h-4" />
                   </button>
                </form>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
