"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Compass, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Rocket, 
  Activity,
  ArrowRight
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    phase: "Week 1",
    title: "Discovery & Strategy",
    description: "Deep dive into business goals, system requirements, architecture mapping, and user journey definition.",
    icon: Compass,
    deliverables: ["Product Roadmap", "Tech Stack Decision", "Scope Specifications"]
  },
  {
    step: "02",
    phase: "Week 2-3",
    title: "Design & Prototyping",
    description: "High-fidelity Figma wireframes, component design systems, and clickable interactive prototypes.",
    icon: Layers,
    deliverables: ["Figma Design System", "Interactive Prototype", "Usability Validation"]
  },
  {
    step: "03",
    phase: "Week 4-8",
    title: "Development Sprint",
    description: "Agile engineering sprints, modern frontend, resilient API backend, and clean database integrations.",
    icon: Cpu,
    deliverables: ["Fullstack Source Code", "API Documentation", "Staging Environments"]
  },
  {
    step: "04",
    phase: "Week 9-10",
    title: "Testing & QA",
    description: "End-to-end automated testing, cross-browser compatibility, security audits, and performance tuning.",
    icon: CheckCircle2,
    deliverables: ["Security Regression Suite", "Speed & Core Web Vitals", "QA Sign-off"]
  },
  {
    step: "05",
    phase: "Week 11",
    title: "Deployment & Launch",
    description: "Production launch with zero-downtime deployment, DNS configuration, and automated observability.",
    icon: Rocket,
    deliverables: ["Production Release", "Edge Routing & CDN", "Monitoring Dashboards"]
  },
  {
    step: "06",
    phase: "Ongoing",
    title: "Support & Growth",
    description: "Continuous operational monitoring, feature iteration, model retraining, and scale optimizations.",
    icon: Activity,
    deliverables: ["SLA Maintenance", "Performance Telemetry", "Feature Enhancements"]
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section 
      id="process"
      className="py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/80"
    >
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[720px] mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Our Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Idea to Impact
          </h2>
          <p className="text-base text-slate-500 mt-3 max-w-[620px]">
            A streamlined approach from idea to impact. Every project moves through structured milestones with complete engineering transparency.
          </p>
        </div>

        {/* Timeline Desktop Stepper */}
        <div className="relative mb-16 hidden lg:block">
          {/* Connecting Line */}
          <div className="absolute top-6 left-6 right-6 h-0.5 bg-slate-200 -z-0" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {processSteps.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(index)}
                  className="text-left group focus:outline-none"
                >
                  {/* Step Node */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 mb-4 ${
                    isSelected 
                      ? "bg-blue-600 text-white shadow-md scale-110 ring-4 ring-blue-100" 
                      : "bg-white border-2 border-slate-200 text-slate-600 group-hover:border-blue-400 group-hover:text-blue-600"
                  }`}>
                    {step.step}
                  </div>

                  <span className="text-[11px] font-mono text-blue-600 font-bold uppercase tracking-wider block mb-1">
                    {step.phase}
                  </span>

                  <h4 className={`text-sm font-bold transition-colors ${
                    isSelected ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"
                  }`}>
                    {step.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Process Cards Grid (Mobile + Detail View) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isHighlight = activeStep === index;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`rounded-2xl p-7 transition-all duration-300 border flex flex-col justify-between ${
                  isHighlight 
                    ? "bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20" 
                    : "bg-white border-slate-200/80 hover:border-slate-300 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs font-mono">
                      {step.step}
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1">
                    {step.deliverables.map((item) => (
                      <li key={item} className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
