"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export default function Marquee({ children, direction = "left", speed = 40, className = "" }: MarqueeProps) {
  return (
    <div className={`flex overflow-hidden select-none ${className}`}>
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-nowrap min-w-full"
      >
        <div className="flex flex-nowrap shrink-0">
          {children}
        </div>
        <div className="flex flex-nowrap shrink-0">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
