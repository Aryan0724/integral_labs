"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.02] -skew-y-6 transform origin-top-left" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Need a modern software system <br />
              <span className="text-muted-foreground italic">built properly?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg">
              Ready to scale your engineering capability? Schedule a technical consultation 
              with our team today.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Us</div>
                  <div className="text-white font-bold">engineering@integrallabs.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">WhatsApp</div>
                  <div className="text-white font-bold">+1 (555) 000-LABS</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 ml-1">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 ml-1">Project Type</label>
                <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-all appearance-none">
                  <option>Web Development</option>
                  <option>SaaS Platform</option>
                  <option>Machine Learning</option>
                  <option>Automation System</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 ml-1">Project Brief</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your technical requirements..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-all resize-none"
                />
              </div>

              <button className="w-full bg-white text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-all">
                Send Inquiry
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
