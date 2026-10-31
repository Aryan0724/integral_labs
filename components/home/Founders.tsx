"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Tanuj Bisht",
    role: "Co-Founder & Lead Developer",
    bio: "Specializing in high-performance web systems, Next.js architecture, and cloud infrastructure.",
    image: "/team/aryan.png", // using available high quality headshot asset
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Aryan Bisht",
    role: "Co-Founder & Lead Designer",
    bio: "Focusing on intuitive design systems, conversion-driven interfaces, and brand ergonomics.",
    image: "/team/aryan.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  }
];

const TESTIMONIALS = [
  {
    quote: "Integral Labs delivered an exceptional solution that exceeded our expectations. Their technical competence, speed of execution, and design clarity made all the difference in our product launch.",
    client: "Aditya Chauhan",
    designation: "Founder, FindMyInterior",
    initials: "AC"
  },
  {
    quote: "The team redesigned our entire communication dashboard from scratch. Conversion improved by 40% within the first month. Incredible engineering quality.",
    client: "Vikram Malhotra",
    designation: "Product Lead, TrueDial",
    initials: "VM"
  },
  {
    quote: "Seamless collaboration from discovery to deployment. They don't just write code, they understand commercial goals and user psychology.",
    client: "Sarah Jenkins",
    designation: "CTO, EduReach Suite",
    initials: "SJ"
  }
];

export default function Founders() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = TESTIMONIALS[currentTestimonial];

  return (
    <section 
      id="about"
      className="py-24 md:py-32 bg-white border-t border-slate-200/80"
    >
      <div className="container max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Our Team */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                Our Team
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              The Minds Behind Integral Labs
            </h2>
            <p className="text-sm text-slate-500 mb-8 max-w-[500px]">
              Meet the minds behind Integral Labs. Direct founder-led engineering and design on every engagement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TEAM_MEMBERS.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-5 hover:bg-white hover:shadow-md transition-all duration-300 group"
                >
                  <div className="relative aspect-[4/3] w-full rounded-xl bg-slate-200 overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 mt-0.5 mb-2">
                    {member.role}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Testimonials */}
          <div className="lg:col-span-5 bg-slate-50/70 rounded-2xl border border-slate-200/80 p-8 flex flex-col justify-between h-full min-h-[420px]">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                  Testimonials
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                What our clients say about our work.
              </h3>
              <p className="text-xs text-slate-400 mb-8">
                Verified reviews from founders and enterprise partners.
              </p>

              {/* Quotation text */}
              <div className="relative pl-6 border-l-2 border-blue-500 my-6">
                <p className="text-base sm:text-lg text-slate-700 italic font-medium leading-relaxed">
                  "{activeReview.quote}"
                </p>
              </div>
            </div>

            {/* Client Info & Carousel Navigation */}
            <div className="pt-6 border-t border-slate-200/70 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                  {activeReview.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {activeReview.client}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {activeReview.designation}
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
