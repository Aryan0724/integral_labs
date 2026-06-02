"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Globe, Cpu, Zap, ArrowUpRight, Network } from "lucide-react";
import Link from "next/link";

const divisions = [
  {
    title: "Integral Labs",
    role: "Creative Engineering",
    description: "Our high-end digital studio building world-class SaaS, AI interfaces, and automation systems.",
    icon: <Cpu className="text-purple-400" size={24} />,
    active: true,
  },
  {
    title: "Integral Infrastructure",
    role: "Global Network",
    description: "Distributed computing and server-side infrastructure for enterprise scale.",
    icon: <Globe className="text-blue-400" size={24} />,
    active: false,
  },
  {
    title: "Integral Security",
    role: "Protocol Defense",
    description: "Advanced cybersecurity systems and cryptographic audit protocols.",
    icon: <Shield className="text-emerald-400" size={24} />,
    active: false,
  },
];

export default function GroupsPage() {
  const [content, setContent] = React.useState<any>(null);

  React.useEffect(() => {
    fetch('/api/cms')
      .then(res => res.json())
      .then(data => setContent(data.groups));
  }, []);

  if (!content) return <div className="min-h-screen bg-black" />;

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-40 pb-24 text-white">
      <div className="container relative">
        {/* Decorative Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
           <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-[800px] mx-auto text-center mb-32">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-10"
           >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-purple-400 uppercase">Parent Organization</span>
           </motion.div>

           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
             className="text-[60px] md:text-[100px] font-display tracking-tighter leading-[0.85] mb-12"
           >
             {content.title.split('.').map((part: string, i: number) => (
                <React.Fragment key={i}>
                   {part}
                   {i === 0 && <span className="italic opacity-40">.</span>}
                </React.Fragment>
             ))}
           </motion.h1>

           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="text-white/30 text-xl leading-relaxed max-w-[600px] mx-auto font-light"
           >
             {content.description}
           </motion.p>
        </div>

        {/* Divisions Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto mb-40">
          {divisions.map((div, i) => (
            <motion.div
              key={div.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-3xl border transition-all duration-500 group ${
                div.active 
                  ? "bg-white/[0.03] border-white/10 hover:border-purple-500/30" 
                  : "bg-transparent border-white/5 opacity-50 grayscale"
              }`}
            >
              <div className="mb-10 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                {div.icon}
              </div>
              
              <div className="mb-8">
                 <h3 className="text-2xl font-display text-white mb-2">{div.title}</h3>
                 <span className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase">{div.role}</span>
              </div>

              <p className="text-white/40 text-sm leading-relaxed mb-12">
                {div.description}
              </p>

              {div.active ? (
                <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-purple-400 group/link">
                   VISIT DIVISION
                   <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </Link>
              ) : (
                <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">Coming Soon</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="max-w-[1000px] mx-auto p-16 rounded-[40px] border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-10">
              <Network size={120} />
           </div>
           
           <div className="relative z-10">
              <div className="measure-bar mb-12">
                 <div className="measure-line w-20" />
                 <span className="blueprint-label">GROUP_PHILOSOPHY</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display tracking-tighter text-white mb-10 max-w-[600px]">
                United by 
                <span className="italic opacity-40"> Protocol.</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 <p className="text-white/40 leading-relaxed font-light">
                    At Integral Groups, we believe that the future of engineering is not just about building better software, but about creating more robust, ethical, and performant ecosystems. Each division operates with the same core values: surgical precision, architectural integrity, and a relentless focus on user impact.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <Zap size={16} className="text-yellow-400" />
                       <span className="text-sm font-bold tracking-tight text-white/80">Performance First Infrastructure</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <Shield size={16} className="text-emerald-400" />
                       <span className="text-sm font-bold tracking-tight text-white/80">Security-by-Design Protocols</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <Cpu size={16} className="text-purple-400" />
                       <span className="text-sm font-bold tracking-tight text-white/80">Intelligent Digital Systems</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
