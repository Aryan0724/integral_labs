"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SystemSandbox() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = container.offsetWidth);
    let height = (canvas.height = 240);

    const mouse = { x: -1000, y: -1000, active: false };

    // Particles system
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      radius: number;
      color: string;
      alpha: number;
      targetAlpha: number;
    }

    const particles: Particle[] = [];
    const PARTICLE_COUNT = 40;

    const COLORS = [
      "rgba(168, 85, 247, ",  // purple
      "rgba(96, 165, 250, ",  // blue
      "rgba(255, 255, 255, ", // white
    ];

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          baseRadius: Math.random() * 2 + 1,
          radius: 0,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 0,
          targetAlpha: Math.random() * 0.4 + 0.1,
        });
      }
    }

    // Ripple waves
    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      alpha: number;
    }
    const ripples: Ripple[] = [];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background terminal lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 0.5;
      for (let i = 40; i < width; i += 80) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p) => {
        // Fade in
        p.alpha += (p.targetAlpha - p.alpha) * 0.05;
        p.radius += (p.baseRadius - p.radius) * 0.1;

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction (Gravitational pull / attraction)
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 1.5;
          }
        }

        // Draw particle
        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            const connectionAlpha = (1 - dist / 80) * 0.15 * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = `rgba(168, 85, 247, ${connectionAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Update and draw ripples
      ripples.forEach((r, idx) => {
        r.radius += r.speed;
        r.alpha -= 0.02;

        if (r.alpha <= 0) {
          ripples.splice(idx, 1);
          return;
        }

        // Ripple line
        ctx.strokeStyle = `rgba(168, 85, 247, ${r.alpha * 0.3})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Secondary outer soft ring
        ctx.strokeStyle = `rgba(96, 165, 250, ${r.alpha * 0.1})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius * 1.2, 0, Math.PI * 2);
        ctx.stroke();

        // Push particles away with shockwave force
        particles.forEach((p) => {
          const dx = p.x - r.x;
          const dy = p.y - r.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const diff = dist - r.radius;

          if (Math.abs(diff) < 20 && dist > 10) {
            const pushForce = (20 - Math.abs(diff)) * 0.15 * r.alpha;
            p.x += (dx / dist) * pushForce * 3;
            p.y += (dy / dist) * pushForce * 3;
          }
        });
      });

      // Mouse interactive HUD locator
      if (mouse.active) {
        ctx.strokeStyle = "rgba(168, 85, 247, 0.2)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 15, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = "rgba(255,255,255,0.3)";
        ctx.font = "8px monospace";
        ctx.fillText(`PROBE_X: ${Math.round(mouse.x)}`, mouse.x + 20, mouse.y - 5);
        ctx.fillText(`PROBE_Y: ${Math.round(mouse.y)}`, mouse.x + 20, mouse.y + 5);
      }

      animationId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = container.offsetWidth;
      height = canvas.height = 240;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      ripples.push({
        x: clickX,
        y: clickY,
        radius: 0,
        maxRadius: 150,
        speed: 4,
        alpha: 1.0,
      });

      setPulseCount((prev) => prev + 1);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    initParticles();
    draw();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full h-[240px] bg-black/10 border-y border-white/[0.02] flex items-center justify-center overflow-hidden cursor-crosshair group transition-colors duration-500 hover:bg-purple-950/[0.01]"
    >
      {/* Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />

      {/* Decorative Grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Out of the box HUD overlays */}
      <div className="absolute inset-x-6 top-4 z-20 flex justify-between pointer-events-none font-mono text-[8px] text-white/20 select-none uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
          <span>Interactive_Quantum_Field_Sandbox</span>
        </div>
        <div>Active_Pulses: {pulseCount}</div>
      </div>

      <div className="absolute inset-x-6 bottom-4 z-20 flex justify-between pointer-events-none font-mono text-[8px] text-white/20 select-none uppercase tracking-widest">
        <span>Attraction_Force: {hovered ? "ACTIVE" : "STANDBY"}</span>
        <span>Click to fire shockwave pulse</span>
      </div>

      {/* Centered glowing hint */}
      <div className={`z-20 text-center pointer-events-none transition-all duration-700 ${hovered ? "opacity-0 scale-95" : "opacity-35 scale-100"}`}>
        <p className="font-mono text-[10px] text-white uppercase tracking-[0.25em] mb-1">Quantum Probe Field</p>
        <p className="text-[9px] text-purple-400/80 font-light">Hover cursor to attract nodes • Click to emit pulse wave</p>
      </div>
    </div>
  );
}
