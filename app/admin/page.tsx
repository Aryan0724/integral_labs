"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Settings, 
  Layout, 
  FileText, 
  Briefcase, 
  Globe, 
  Save, 
  RefreshCw, 
  CheckCircle2,
  ChevronRight,
  Database,
  Terminal,
  Activity,
  Zap,
  LogOut
} from "lucide-react";
import { SiteContent } from "@/lib/cms";

const pages = [
  { id: "hero", title: "Hero Section", icon: <Zap size={18} />, color: "text-yellow-400" },
  { id: "services", title: "Services", icon: <Layout size={18} />, color: "text-purple-400" },
  { id: "portfolio", title: "Portfolio Hub", icon: <Briefcase size={18} />, color: "text-blue-400" },
  { id: "groups", title: "Integral Groups", icon: <Globe size={18} />, color: "text-emerald-400" },
];

export default function AdminDashboard() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [activePage, setActivePage] = useState("hero");
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    fetch('/api/cms')
      .then(res => res.json())
      .then(data => setContent(data));
  }, []);

  const handleSave = async () => {
    if (!content) return;
    setIsSaving(true);
    setStatus("idle");
    
    try {
      const res = await fetch('/api/cms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      
      if (res.ok) {
        setStatus("success");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (e) {
      setStatus("error");
    } finally {
      setIsSaving(false);
    }
  };

  const updateField = (section: keyof SiteContent, field: string, value: any) => {
    if (!content) return;
    setContent({
      ...content,
      [section]: {
        ...(content[section] as any),
        [field]: value
      }
    });
  };

  if (!content) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
       <RefreshCw className="text-white/20 animate-spin" size={40} />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-[#0a0a0a] border-r border-white/5 p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-bold">∫</div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">Admin_Terminal_V2</span>
          </div>

          <nav className="space-y-2">
            <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] mb-6 px-4">Workspace</div>
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setActivePage(page.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                  activePage === page.id ? "bg-white/[0.05] text-white" : "text-white/30 hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={activePage === page.id ? page.color : "text-white/20"}>
                    {page.icon}
                  </div>
                  <span className="text-xs font-bold tracking-tight">{page.title}</span>
                </div>
                {activePage === page.id && <ChevronRight size={14} className="opacity-40" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-white/5">
           <div className="flex items-center gap-3 text-white/20 mb-6">
              <Database size={14} />
              <span className="text-[10px] font-mono tracking-widest uppercase">System: Local_Store</span>
           </div>
           <button 
             onClick={() => {
                document.cookie = "admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                window.location.href = "/";
             }}
             className="flex items-center gap-3 text-white/20 hover:text-red-400 transition-colors"
           >
              <LogOut size={14} />
              <span className="text-[10px] font-mono tracking-widest uppercase">Logout</span>
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Header bar */}
        <header className="h-20 border-b border-white/5 px-12 flex items-center justify-between bg-[#080808]/50 backdrop-blur-xl">
           <div className="flex items-center gap-6">
              <h2 className="text-sm font-bold tracking-tight uppercase">
                {pages.find(p => p.id === activePage)?.title}
              </h2>
              <div className="h-px w-8 bg-white/10" />
              <div className="flex items-center gap-2">
                 <Activity size={12} className="text-green-500" />
                 <span className="text-[10px] font-mono text-white/20 uppercase">Environment: Production</span>
              </div>
           </div>

           <div className="flex items-center gap-4">
              {status === "success" && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 text-green-400 text-[10px] font-mono uppercase tracking-widest">
                   <CheckCircle2 size={14} /> Commit Successful
                </motion.div>
              )}
              <button 
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-3 bg-white text-black px-6 py-2 rounded-lg text-xs font-bold hover:bg-gray-200 disabled:opacity-50 transition-all shadow-xl"
              >
                {isSaving ? <RefreshCw size={14} className="animate-spin" /> : <Save size={14} />}
                Deploy Changes
              </button>
           </div>
        </header>

        {/* Scrollable editor area */}
        <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
           <div className="max-w-[800px] mx-auto space-y-12">
              
              {/* Dynamic Form Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-10 pb-20"
                >
                  {activePage === "hero" && (
                    <div className="space-y-8">
                       <FieldGroup title="Core Narrative">
                          <TextInput 
                            label="Primary Headline" 
                            value={content.hero.title} 
                            onChange={(v) => updateField("hero", "title", v)} 
                          />
                          <TextArea 
                            label="Department Subtext" 
                            value={content.hero.subtext} 
                            onChange={(v) => updateField("hero", "subtext", v)} 
                          />
                       </FieldGroup>
                       <FieldGroup title="Action Systems">
                          <TextInput 
                            label="Primary CTA (Contact)" 
                            value={content.hero.primaryCta} 
                            onChange={(v) => updateField("hero", "primaryCta", v)} 
                          />
                          <TextInput 
                            label="Secondary CTA (Portfolio)" 
                            value={content.hero.secondaryCta} 
                            onChange={(v) => updateField("hero", "secondaryCta", v)} 
                          />
                       </FieldGroup>
                    </div>
                  )}

                  {activePage === "services" && (
                    <div className="space-y-8">
                       <FieldGroup title="Capabilities Overview">
                          <TextInput 
                            label="Section Label" 
                            value={content.services.title} 
                            onChange={(v) => updateField("services", "title", v)} 
                          />
                          <TextArea 
                            label="Capabilities Description" 
                            value={content.services.description} 
                            onChange={(v) => updateField("services", "description", v)} 
                          />
                       </FieldGroup>
                       <FieldGroup title="Service Architecture (Read-Only)">
                          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                             {content.services.list.map(s => (
                               <div key={s.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                  <span className="text-xs font-bold text-white/60">{s.title}</span>
                                  <span className="text-[10px] font-mono text-white/20">NODE_ID: {s.id}</span>
                               </div>
                             ))}
                          </div>
                       </FieldGroup>
                    </div>
                  )}

                  {activePage === "portfolio" && (
                    <div className="space-y-8">
                       <FieldGroup title="Portfolio Presentation">
                          <TextInput 
                            label="Main Heading" 
                            value={content.portfolio.title} 
                            onChange={(v) => updateField("portfolio", "title", v)} 
                          />
                          <TextArea 
                            label="Portfolio Description" 
                            value={content.portfolio.description} 
                            onChange={(v) => updateField("portfolio", "description", v)} 
                          />
                       </FieldGroup>
                    </div>
                  )}

                  {activePage === "groups" && (
                    <div className="space-y-8">
                       <FieldGroup title="Group Identity">
                          <TextInput 
                            label="Main Heading" 
                            value={content.groups.title} 
                            onChange={(v) => updateField("groups", "title", v)} 
                          />
                          <TextArea 
                            label="Ecosystem Description" 
                            value={content.groups.description} 
                            onChange={(v) => updateField("groups", "description", v)} 
                          />
                       </FieldGroup>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
           </div>
        </div>
      </main>

      {/* Terminal Footer */}
      <div className="fixed bottom-0 left-0 right-0 h-8 bg-black border-t border-white/5 px-4 flex items-center justify-between z-[100] md:left-72">
         <div className="flex items-center gap-4">
            <Terminal size={12} className="text-white/20" />
            <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">root@integral_labs:~# dashboard initialized</span>
         </div>
         <div className="flex items-center gap-4 opacity-40">
            <span className="text-[9px] font-mono uppercase tracking-widest">UTF-8</span>
            <span className="text-[9px] font-mono uppercase tracking-widest">JS / TSX</span>
         </div>
      </div>
    </div>
  );
}

function FieldGroup({ title, children }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{title}</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}

function TextInput({ label, value, onChange }: any) {
  return (
    <div className="space-y-3">
      <label className="text-[11px] font-bold text-white/40 uppercase tracking-tight">{label}</label>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/20 transition-all font-light"
      />
    </div>
  );
}

function TextArea({ label, value, onChange }: any) {
  return (
    <div className="space-y-3">
      <label className="text-[11px] font-bold text-white/40 uppercase tracking-tight">{label}</label>
      <textarea 
        rows={4}
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/20 transition-all font-light resize-none leading-relaxed"
      />
    </div>
  );
}
