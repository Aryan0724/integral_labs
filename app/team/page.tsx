"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Mail, ArrowUpRight } from "lucide-react";
import { GitHub, Twitter, LinkedIn } from "@/components/shared/SocialIcons";
import Link from "next/link";
import Image from "next/image";

const team = [
  {
    name: "Aryan S.",
    role: "Chief Engineering Officer",
    image: "/team/aryan.png",
    bio: "Visionary engineer specialized in autonomous systems and industrial-scale software architecture.",
    socials: { github: "#", twitter: "#", linkedin: "#" }
  },
  {
    name: "Elena V.",
    role: "Director of Digital Design",
    image: "/team/elena.png",
    bio: "Award-winning designer focused on high-end motion systems and cinematic user experiences.",
    socials: { github: "#", twitter: "#", linkedin: "#" }
  },
  {
    name: "Marcus K.",
    role: "Lead AI Architect",
    image: "/team/marcus.png",
    bio: "Pioneering researcher in neural networks and distributed artificial intelligence systems.",
    socials: { github: "#", twitter: "#", linkedin: "#" }
  },
  {
    name: "Sarah L.",
    role: "Head of Operations",
    image: "/team/marcus.png", // Reusing placeholder
    bio: "Strategic operational lead ensuring the industrial-grade deployment of all studio projects.",
    socials: { github: "#", twitter: "#", linkedin: "#" }
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-[560px] mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge mb-4"
          >
            Studio Collective
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="text-display text-[36px] sm:text-[48px] text-white mb-6"
          >
            The Architects
            <br />
            of Systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-[14px] text-[#666] leading-[1.7]"
          >
            A high-performance unit of engineers and designers operating at the intersection of intelligence and aesthetics.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/6 bg-[#111] mb-5 transition-all duration-300 group-hover:border-white/12">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
                />
                
                {/* Social Overlay - Minimalist */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                   <div className="flex gap-2.5">
                      <Link href={member.socials.github} className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <GitHub className="w-4 h-4" />
                      </Link>
                      <Link href={member.socials.twitter} className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <Twitter className="w-4 h-4" />
                      </Link>
                      <Link href={member.socials.linkedin} className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <LinkedIn className="w-4 h-4" />
                      </Link>
                   </div>
                </div>
              </div>

              <div className="px-1">
                 <span className="text-[11px] font-medium text-[#6366f1] mb-1.5 block tracking-wide">{member.role}</span>
                 <h3 className="text-[15px] font-semibold text-white mb-2">{member.name}</h3>
                 <p className="text-[13px] text-[#555] leading-[1.6] line-clamp-2">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Us CTA - Redesigned for new system */}
        <div className="relative rounded-2xl border border-white/6 bg-[#0d0d0d] overflow-hidden p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />
           <div className="relative z-10 max-w-xl text-center md:text-left">
              <h2 className="text-display text-[28px] md:text-[36px] text-white mb-4">Want to Join the Lab?</h2>
              <p className="text-[14px] text-[#666] leading-[1.7]">We are always looking for the world&apos;s most talented engineers and architects who thrive at the intersection of complex systems and refined design.</p>
           </div>
           <Link 
            href="/contact"
            className="btn-primary relative z-10 py-3 px-8 text-[14px] whitespace-nowrap"
           >
              Apply for Node
              <ArrowUpRight className="w-4 h-4" />
           </Link>
        </div>
      </div>
    </div>
  );
}
