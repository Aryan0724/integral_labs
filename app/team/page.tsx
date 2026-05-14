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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "Pioneering researcher in neural networks and distributed artificial intelligence systems.",
    socials: { github: "#", twitter: "#", linkedin: "#" }
  },
  {
    name: "Sarah L.",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    bio: "Strategic operational lead ensuring the industrial-grade deployment of all studio projects.",
    socials: { github: "#", twitter: "#", linkedin: "#" }
  }
];

export default function TeamPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <Users className="w-3 h-3 text-purple-500" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/50">Studio Collective</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9]"
          >
            THE <span className="text-gradient-purple italic">ARCHITECTS</span> <br />
            OF INNOVATION.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-2xl font-light tracking-tight"
          >
            A high-performance unit of engineers and designers operating at the intersection of intelligence and aesthetics.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 bg-white/5 mb-8 transition-all duration-700 group-hover:border-purple-500/50 group-hover:shadow-[0_0_50px_-12px_rgba(124,58,237,0.3)]">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                   <div className="flex gap-4">
                      <Link href={member.socials.github} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <GitHub className="w-5 h-5" />
                      </Link>
                      <Link href={member.socials.twitter} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <Twitter className="w-5 h-5" />
                      </Link>
                      <Link href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <LinkedIn className="w-5 h-5" />
                      </Link>
                   </div>
                </div>
              </div>

              <div className="px-4">
                 <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.4em] mb-2 block">{member.role}</span>
                 <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-purple-400 transition-colors">{member.name}</h3>
                 <p className="text-white/40 text-sm leading-relaxed font-light tracking-tight group-hover:text-white/60 transition-colors">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="mt-40 glass p-16 md:p-24 rounded-[60px] border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">WANT TO <span className="text-gradient-purple italic">JOIN THE LAB?</span></h2>
              <p className="text-white/40 text-lg font-light leading-relaxed">We are always looking for the world&apos;s most talented engineers and architects.</p>
           </div>
           <Link 
            href="/careers"
            className="group h-24 bg-white text-black px-12 rounded-full flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl whitespace-nowrap"
           >
              <span className="text-sm font-black uppercase tracking-widest">Apply for Node</span>
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                 <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
           </Link>
        </div>
      </div>
    </div>
  );
}
