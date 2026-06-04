"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Briefcase, Globe, Phone, Calendar, Mail, X, CheckCircle } from "lucide-react";

export default function ContactSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    if (formState.phone) {
      const cleaned = formState.phone.replace(/[\s\-()]/g, "");
      const phoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
      if (!phoneRegex.test(cleaned)) {
        setPhoneError(true);
        return;
      }
    }
    setPhoneError(false);
    
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "", phone: "" });
        // Auto-hide success page after 3.5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3500);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-end">
      {/* The "Pill" Trigger - Glassmorphism, premium dark styling */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#050505]/75 border-l border-y border-white/10 backdrop-blur-xl text-white/80 py-8 px-2.5 flex flex-col items-center gap-4 rounded-l-2xl shadow-3xl hover:bg-white/[0.03] hover:text-white hover:border-white/20 transition-all duration-300 group"
      >
        <span className="font-bold text-xl tracking-tighter leading-none group-hover:scale-110 transition-transform text-purple-400">∫</span>
        <div className="h-px w-6 bg-white/10" />
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] [writing-mode:vertical-lr] font-bold py-2">
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
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 mr-2 sm:mr-12 w-[calc(100vw-32px)] sm:w-[340px] max-h-[85vh] overflow-y-auto bg-[#080808]/90 border border-white/10 rounded-3xl p-6 md:p-8 shadow-3xl backdrop-blur-2xl scrollbar-none"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-display text-white italic">Let's build.</h3>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setIsSubmitted(false);
                }} 
                className="text-white/20 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {isSubmitted ? (
              /* Success State */
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <CheckCircle size={44} className="text-green-500 animate-pulse" />
                <h4 className="font-display text-xl text-white italic">Inquiry Received!</h4>
                <p className="text-xs text-white/40 max-w-[200px] leading-relaxed">
                  Our engineering team will review your project and get back to you shortly.
                </p>
              </motion.div>
            ) : (
              /* Form State */
              <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest block">Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Aarav Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/10 focus:border-purple-500/50 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest block">Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="aarav@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/10 focus:border-purple-500/50 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest block">Phone (Optional)</label>
                    <input 
                      type="tel" 
                      placeholder="+91 99999 99999"
                      value={formState.phone}
                      onChange={(e) => {
                        setFormState({ ...formState, phone: e.target.value });
                        if (phoneError) setPhoneError(false);
                      }}
                      className={`w-full bg-white/[0.02] border ${phoneError ? 'border-red-500/50' : 'border-white/5'} rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/10 focus:border-purple-500/50 outline-none transition-all`}
                    />
                    {phoneError && (
                      <span className="text-red-500 text-[9px] font-mono block mt-1">Please enter a valid phone number.</span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest block">Message</label>
                    <textarea 
                      rows={3}
                      required
                      placeholder="Briefly describe your project details..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/10 focus:border-purple-500/50 outline-none transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-[11px] font-mono">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full btn-gradient py-3 rounded-xl text-center text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-opacity"
                  >
                    {loading ? "Sending..." : "Send Quick Inquiry"}
                    {!loading && <Send size={12} />}
                  </button>
                </form>

                {/* Divider */}
                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-white/5"></div>
                  <span className="flex-shrink mx-4 text-[9px] font-mono text-white/20 uppercase tracking-widest">Or Reach Directly</span>
                  <div className="flex-grow border-t border-white/5"></div>
                </div>

                {/* Direct Options */}
                <div className="space-y-3">
                  <a href="mailto:contact@integralgroups.in" className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/[0.01] transition-all text-white/50 hover:text-white">
                    <Mail size={16} className="text-purple-400" />
                    <span className="text-xs font-mono">contact@integralgroups.in</span>
                  </a>
                  
                  <a href="tel:+919470650991" className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/[0.01] transition-all text-white/50 hover:text-white">
                    <Phone size={16} className="text-blue-400" />
                    <span className="text-xs font-mono">+91 94706 50991</span>
                  </a>
                  <a href="tel:+919389307062" className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/[0.01] transition-all text-white/50 hover:text-white">
                    <Phone size={16} className="text-blue-400" />
                    <span className="text-xs font-mono">+91 93893 07062</span>
                  </a>

                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white text-black hover:bg-white/90 transition-all font-bold"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar size={16} />
                      <span className="text-xs tracking-tight">Book Strategy Call</span>
                    </div>
                    <span className="text-xs">→</span>
                  </a>
                </div>
              </div>
            )}

            {/* Footer indicator */}
            <div className="mt-8 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] text-white/20 font-mono uppercase tracking-widest">Active Response State</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
