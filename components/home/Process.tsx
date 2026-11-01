"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  Compass, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Rocket, 
  Activity 
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Track scroll progress through the pinned process section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Synchronize the active milestone step with the horizontal blue progress line
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.16) {
      setActiveStep(0);
    } else if (latest < 0.34) {
      setActiveStep(1);
    } else if (latest < 0.52) {
      setActiveStep(2);
    } else if (latest < 0.70) {
      setActiveStep(3);
    } else if (latest < 0.88) {
      setActiveStep(4);
    } else {
      setActiveStep(5);
    }
  });

  // Enable click-to-jump navigation on stepper nodes
  const handleStepClick = (index: number) => {
    setActiveStep(index);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const currentScrollY = window.scrollY;
    const containerTop = currentScrollY + rect.top;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    if (totalScrollable > 0) {
      const stepProgress = index === 0 ? 0.02 : index === 5 ? 0.98 : (index / 5.2);
      const targetScroll = containerTop + stepProgress * totalScrollable;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section 
      id="process"
      ref={containerRef}
      className="relative lg:h-[280vh] bg-slate-50/70 border-t border-slate-200/80"
    >
      {/* Sticky Container: Pins to viewport while user scrolls through the 280vh section */}
      <div className="lg:sticky lg:top-0 lg:h-screen w-full flex flex-col justify-center py-16 lg:py-0 overflow-hidden">
        <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
          
          {/* Section Header */}
          <div className="max-w-[720px] mb-8 lg:mb-10">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-blue-600 inline-block" />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                Our Process
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              From Idea to Impact
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-[620px] leading-relaxed">
              A streamlined approach from idea to impact. Every project moves through structured milestones with complete engineering transparency.
            </p>
          </div>

          {/* Desktop Timeline Stepper (Horizontal Line that fills as user scrolls) */}
          <div className="relative mb-8 lg:mb-10 hidden lg:block">
            {/* Background Track Line (connecting Week 1 to Ongoing) */}
            <div 
              className="absolute top-5 -translate-y-1/2 left-5 right-5 h-[3px] bg-slate-200/90 rounded-full" 
              aria-hidden="true" 
            />

            {/* Active Horizontal Blue Progress Line */}
            <motion.div 
              className="absolute top-5 -translate-y-1/2 left-5 right-5 h-[3px] bg-blue-600 rounded-full origin-left shadow-[0_0_12px_rgba(37,99,235,0.6)]"
              style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-6 gap-3 sm:gap-4 relative z-10">
              {processSteps.map((step, index) => {
                const isCurrent = activeStep === index;
                const isPast = activeStep > index;
                const isReached = activeStep >= index;

                return (
                  <button
                    key={step.step}
                    onClick={() => handleStepClick(index)}
                    className="text-left group focus:outline-none cursor-pointer"
                  >
                    {/* Step Node */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 mb-2.5 ${
                      isCurrent 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-110 ring-4 ring-blue-100" 
                        : isPast
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-white border-2 border-slate-200 text-slate-500 group-hover:border-blue-400 group-hover:text-blue-600"
                    }`}>
                      {step.step}
                    </div>

                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-0.5 transition-colors ${
                      isReached ? "text-blue-600" : "text-slate-400"
                    }`}>
                      {step.phase}
                    </span>

                    <h4 className={`text-xs sm:text-sm font-bold leading-tight transition-colors ${
                      isCurrent 
                        ? "text-blue-600" 
                        : isPast
                        ? "text-slate-900"
                        : "text-slate-600 group-hover:text-blue-600"
                    }`}>
                      {step.title}
                    </h4>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Process Cards Grid (3x2 on desktop, responsive on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {processSteps.map((step, index) => {
              const isHighlight = activeStep === index;
              const isPast = activeStep > index;

              return (
                <div
                  key={step.step}
                  className={`rounded-2xl p-5 sm:p-5.5 transition-all duration-300 border flex flex-col justify-between ${
                    isHighlight 
                      ? "bg-white border-blue-500 shadow-xl ring-2 ring-blue-500/20 scale-[1.01] z-10" 
                      : isPast
                      ? "bg-white/95 border-slate-200 shadow-xs opacity-90"
                      : "bg-white/80 border-slate-200/80 shadow-2xs opacity-75 hover:opacity-100 hover:border-slate-300"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs font-mono transition-colors ${
                        isHighlight 
                          ? "bg-blue-600 text-white shadow-xs" 
                          : isPast
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "bg-slate-100 text-slate-500"
                      }`}>
                        {step.step}
                      </span>
                      <span className={`text-xs font-mono font-semibold transition-colors ${
                        isHighlight ? "text-blue-600" : "text-slate-400"
                      }`}>
                        {step.phase}
                      </span>
                    </div>

                    <h3 className={`text-base font-bold mb-1.5 transition-colors ${
                      isHighlight ? "text-blue-600" : "text-slate-900"
                    }`}>
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-1">
                      {step.deliverables.map((item) => (
                        <li key={item} className="text-xs text-slate-600 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            isHighlight ? "bg-blue-600" : "bg-slate-300"
                          }`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
