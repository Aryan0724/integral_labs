"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Content */}
          <div className="max-w-[440px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge mb-6"
            >
              Contact
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-display text-[42px] sm:text-[56px] text-white mb-8"
            >
              Start A
              <br />
              Project.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#71717a] text-[17px] leading-relaxed mb-12"
            >
              Have a software system in mind? We're available for new 
              collaborations and engineering-led product development.
            </motion.p>

            <div className="space-y-4 pt-12 border-t border-white/[0.04]">
              <div className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-[0.2em] mb-4">Direct Inquiries</div>
              <a href="mailto:hello@integrallabs.ai" className="text-[18px] text-white hover:text-white/60 transition-colors block">
                hello@integrallabs.ai
              </a>
              <div className="text-[14px] text-[#52525b]">Based in Bhimtal, Uttarakhand, India</div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="surface p-8 md:p-12 border-white/[0.06] bg-[#050505] shadow-2xl rounded-2xl"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-white transition-colors outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-white transition-colors outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-wider">Company</label>
                  <input 
                    type="text" 
                    placeholder="Acme Corp" 
                    className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-white transition-colors outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-wider">Project Type</label>
                  <select className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-white transition-colors outline-none appearance-none">
                    <option className="bg-black">SaaS Platform</option>
                    <option className="bg-black">AI System</option>
                    <option className="bg-black">Automation</option>
                    <option className="bg-black">Frontend</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-wider">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..." 
                  className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-white transition-colors outline-none resize-none"
                />
              </div>

              <button className="group flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-[14px] hover:bg-[#f4f4f5] transition-all hover:scale-[1.02] w-full justify-center">
                Send Inquiry
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
