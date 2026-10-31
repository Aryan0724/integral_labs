"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, X, CheckCircle, Phone, CornerDownLeft, MessageSquare } from "lucide-react";

export default function ContactSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "", phone: "", hp_field: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", handleOpen);
    return () => window.removeEventListener("open-contact-modal", handleOpen);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.hp_field) return; // honeypot
    if (!formState.name || !formState.email || !formState.message) return;

    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "", phone: "", hp_field: "" });
        setTimeout(() => {
          setIsSubmitted(false);
          setIsOpen(false);
        }, 4000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Side Tab Trigger */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] hidden md:flex flex-col items-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white border-l border-y border-slate-200/90 text-slate-800 py-6 px-2.5 flex flex-col items-center gap-3 rounded-l-2xl shadow-md hover:shadow-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-300 group"
          aria-label="Open contact form"
        >
          <span className="font-bold text-lg text-blue-600 group-hover:scale-110 transition-transform">
            ∫
          </span>
          <div className="h-px w-5 bg-slate-200" />
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] [writing-mode:vertical-lr] font-bold py-1 text-slate-500 group-hover:text-blue-600">
            START PROJECT
          </span>
        </button>
      </div>

      {/* Floating Chat Widget in Bottom Right (Image 3) */}
      <div className="fixed bottom-6 right-6 z-[90]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => setIsOpen(true)}
          className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 pr-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center gap-3 group"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <MessageSquare size={17} />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
          </div>

          <div className="text-left">
            <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              Have a project in mind?
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              Let's discuss it!
            </div>
          </div>
        </motion.div>
      </div>

      {/* Expanded Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center md:justify-end md:p-6 p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="relative w-full max-w-[400px] max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200 z-10 scrollbar-none"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Let's Build Together
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Integral Labs // Engineering &amp; Design Studio
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle size={28} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Inquiry Received</h4>
                  <p className="text-xs text-slate-500 max-w-[240px] mx-auto mt-2 leading-relaxed">
                    Our lead architects will review your specifications and get in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="hp_field"
                    value={formState.hp_field}
                    onChange={(e) => setFormState({ ...formState, hp_field: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                  />

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 / +1 ..."
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Project Scope &amp; Vision *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Briefly describe what you want to build..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                    />
                  </div>

                  {error && (
                    <div className="text-[11px] text-rose-600 bg-rose-50 p-2 rounded-lg">
                      Failed to send. Please retry or email contact@integralgroups.in
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
                    <CornerDownLeft size={14} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
