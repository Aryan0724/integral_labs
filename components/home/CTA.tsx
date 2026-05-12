"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="relative z-[70] py-40 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-8"
            >
              <Sparkles className="text-blue-400 w-8 h-8" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tight leading-[0.95]"
            >
              Ready to <br />
              <span className="text-white/30">Scale Up?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/50 mb-12 max-w-lg font-light leading-relaxed"
            >
              Partner with a modern engineering agency to build high-performance software systems.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md"
              >
                <Mail className="text-blue-400 w-6 h-6 mb-4" />
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Direct Line</div>
                <div className="text-white font-bold text-sm">engineering@integrallabs.com</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md"
              >
                <MessageSquare className="text-purple-400 w-6 h-6 mb-4" />
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Instant Support</div>
                <div className="text-white font-bold text-sm">+1 (555) LABS-SYS</div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[50px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[50px]" />
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Engineering Lead"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="name@company.io"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Objective</label>
                <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer">
                  <option className="bg-black">SaaS Infrastructure</option>
                  <option className="bg-black">AI/ML Integration</option>
                  <option className="bg-black">Custom Web System</option>
                  <option className="bg-black">Automation Engine</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Details</label>
                <textarea 
                  rows={4}
                  placeholder="Describe your technical requirements..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none placeholder:text-white/10"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-xl"
              >
                Launch Discovery
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
