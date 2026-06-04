"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "SaaS Platform",
    message: "",
    phone: "",
  });
  const [phoneError, setPhoneError] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("success");
        setFormState({
          name: "",
          email: "",
          company: "",
          projectType: "SaaS Platform",
          message: "",
          phone: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

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
              <a href="mailto:contact@integralgroups.in" className="text-[18px] text-white hover:text-white/60 transition-colors block">
                contact@integralgroups.in
              </a>
              <div className="text-[14px] text-[#52525b]">Based in Bhimtal, Uttarakhand, India</div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="surface p-8 md:p-12 border-white/[0.06] bg-[#050505] shadow-2xl rounded-2xl min-h-[460px] flex flex-col justify-center"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="flex justify-center">
                  <CheckCircle className="w-16 h-16 text-green-500 animate-pulse" />
                </div>
                <h3 className="text-2xl font-display text-white italic">Inquiry Received!</h3>
                <p className="text-sm text-[#71717a] max-w-[320px] mx-auto leading-relaxed">
                  Thank you. We've routed this proposal straight to our team and we'll be in touch shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-mono text-white/50 hover:text-white border border-white/10 hover:border-white/20 px-4 py-2 rounded-full transition-all"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-wider">Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Aarav Sharma" 
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-white transition-colors outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="aarav.sharma@example.com" 
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-white transition-colors outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-wider">Company</label>
                    <input 
                      type="text" 
                      placeholder="Zenith Tech India" 
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-white transition-colors outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-wider">Project Type</label>
                    <div className="relative">
                      <select 
                        value={formState.projectType}
                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                        className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-white transition-colors outline-none appearance-none cursor-pointer"
                      >
                        <option className="bg-black" value="SaaS Platform">SaaS Platform</option>
                        <option className="bg-black" value="AI System">AI System</option>
                        <option className="bg-black" value="Automation">Automation</option>
                        <option className="bg-black" value="Frontend">Frontend</option>
                        <option className="bg-black" value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-wider">Mobile Number (Optional)</label>
                    <input 
                      type="tel" 
                      placeholder="+91 99999 99999" 
                      value={formState.phone}
                      onChange={(e) => {
                        setFormState({ ...formState, phone: e.target.value });
                        if (phoneError) setPhoneError(false);
                      }}
                      className={`w-full bg-transparent border-b ${phoneError ? 'border-red-500/50' : 'border-white/10'} py-2 text-white focus:border-white transition-colors outline-none`}
                    />
                    {phoneError && (
                      <span className="text-red-500 text-[10px] font-mono block mt-1">Please enter a valid phone number.</span>
                    )}
                  </div>
                  <div className="hidden sm:block" />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-[#3f3f46] uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tell us about your project..." 
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-white transition-colors outline-none resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="text-red-500 text-xs font-mono">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === "loading"}
                  className="group flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-[14px] hover:bg-[#f4f4f5] transition-all hover:scale-[1.02] w-full justify-center disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Inquiry"}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
