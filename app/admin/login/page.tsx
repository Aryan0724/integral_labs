"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldAlert, ArrowRight } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would be a server action or API call
    // For this agency platform, we use a default "integral_secure_2024"
    if (password === "integral_secure_2024") {
      document.cookie = "admin_auth=authenticated; path=/; max-age=86400"; // 24h
      window.location.href = "/admin";
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 text-white">
      {/* Background blueprint details */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]">
         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[400px] p-10 rounded-[32px] bg-white/[0.02] border border-white/5 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <Lock size={120} />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black font-bold text-xl italic">∫</div>
            <div>
               <h1 className="text-sm font-bold tracking-tight uppercase">Admin Access</h1>
               <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Protocol V2.4 Security</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-3">
              <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Master Key</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full bg-white/[0.03] border ${error ? 'border-red-500/50' : 'border-white/5'} rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/20 transition-all font-mono tracking-widest`}
                  placeholder="••••••••••••"
                />
                {error && (
                  <motion.div 
                    initial={{ x: -10 }} 
                    animate={{ x: 0 }} 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500"
                  >
                    <ShieldAlert size={18} />
                  </motion.div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-between bg-white text-black px-6 py-4 rounded-xl text-xs font-bold hover:bg-gray-200 transition-all shadow-xl group"
            >
              INITIALIZE SESSION
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 flex flex-col items-center gap-2">
             <span className="text-[9px] font-mono text-white/10 uppercase tracking-[0.2em]">Integral Groups Creative Engineering</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
