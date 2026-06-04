"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // ── Signal Traces (Circuit Pulses) ───────────────────────────────────────
    interface Trace {
      x: number;
      y: number;
      length: number;
      speed: number;
      axis: "h" | "v";
      progress: number;
      opacity: number;
      targetOpacity: number;
      color: { r: number; g: number; b: number };
      pause: number;
    }

    const TRACE_COUNT = 15;
    const traces: Trace[] = [];

    const COLORS = [
      { r: 139, g: 92, b: 246 }, // purple
      { r: 255, g: 255, b: 255 }, // white
      { r: 96, g: 165, b: 250 }, // blue
    ];

    const formatRGBA = (c: typeof COLORS[0], opacity: number) => {
      const safeOpacity = Math.max(0, Math.min(1, isNaN(opacity) ? 0 : opacity));
      return `rgba(${c.r}, ${c.g}, ${c.b}, ${safeOpacity.toFixed(3)})`;
    };

    function makeTrace(): Trace {
      const axis: "h" | "v" = Math.random() > 0.45 ? "h" : "v";
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const gridSize = 64;

      const w = canvas!.width || 1920;
      const h = canvas!.height || 1080;

      return {
        x: axis === "h" ? 0 : Math.round(Math.random() * (w / gridSize)) * gridSize,
        y: axis === "v" ? 0 : Math.round(Math.random() * (h / gridSize)) * gridSize,
        length: Math.random() * 120 + 60,
        speed: Math.random() * 1.2 + 0.4,
        axis,
        progress: Math.random(),
        opacity: 0,
        targetOpacity: Math.random() * 0.2 + 0.05,
        color,
        pause: Math.floor(Math.random() * 200),
      };
    }

    function initTraces() {
      traces.length = 0;
      for (let i = 0; i < TRACE_COUNT; i++) {
        traces.push(makeTrace());
      }
    }

    // ── Floating Technical Targets (HUD Crosshairs) ──────────────────────────
    interface HUDTarget {
      x: number;
      y: number;
      size: number;
      angle: number;
      rotationSpeed: number;
      pulseProgress: number;
      pulseSpeed: number;
    }

    const TARGET_COUNT = 4;
    const hudTargets: HUDTarget[] = [];

    function makeTarget(): HUDTarget {
      const w = canvas!.width || 1920;
      const h = canvas!.height || 1080;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 60 + 30,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        pulseProgress: Math.random() * Math.PI,
        pulseSpeed: Math.random() * 0.01 + 0.005,
      };
    }

    function initTargets() {
      hudTargets.length = 0;
      for (let i = 0; i < TARGET_COUNT; i++) {
        hudTargets.push(makeTarget());
      }
    }

    initTraces();
    initTargets();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      // Smooth interpolation for mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const scrollY = scrollRef.current;
      const gridSize = 64;
      const width = canvas.width || 1920;
      const height = canvas.height || 1080;

      // ── 1. Dotted Grid (Increased Opacity: 0.45) ─────────────────────────────
      ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
      const parallaxOffsetY = -(scrollY * 0.15) % gridSize;

      for (let x = 0; x < width; x += gridSize) {
        for (let y = parallaxOffsetY; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 0.85, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ── 2. Signal / Circuit Traces ───────────────────────────────────────────
      ctx.save();
      ctx.lineWidth = 0.8;
      ctx.lineCap = "round";

      for (const trace of traces) {
        if (trace.pause > 0) {
          trace.pause--;
          continue;
        }

        trace.opacity += (trace.targetOpacity - trace.opacity) * 0.05;

        const safeW = Math.max(1, width);
        const safeH = Math.max(1, height);

        if (trace.axis === "h") {
          const head = trace.progress * (safeW + trace.length);
          const tail = head - trace.length;

          const grad = ctx.createLinearGradient(Math.max(0, tail), trace.y, Math.min(safeW, head), trace.y);
          grad.addColorStop(0, formatRGBA(trace.color, 0));
          grad.addColorStop(0.3, formatRGBA(trace.color, trace.opacity));
          grad.addColorStop(1, formatRGBA(trace.color, 0));

          ctx.strokeStyle = grad;
          ctx.beginPath();
          ctx.moveTo(Math.max(0, tail), trace.y);
          ctx.lineTo(Math.min(safeW, head), trace.y);
          ctx.stroke();

          if (head > 0 && head < safeW) {
            ctx.fillStyle = formatRGBA(trace.color, trace.opacity * 2.5);
            ctx.beginPath();
            ctx.arc(head, trace.y, 1.8, 0, Math.PI * 2);
            ctx.fill();
          }

          trace.progress += trace.speed / safeW;
        } else {
          const head = trace.progress * (safeH + trace.length);
          const tail = head - trace.length;

          const grad = ctx.createLinearGradient(trace.x, Math.max(0, tail), trace.x, Math.min(safeH, head));
          grad.addColorStop(0, formatRGBA(trace.color, 0));
          grad.addColorStop(0.3, formatRGBA(trace.color, trace.opacity));
          grad.addColorStop(1, formatRGBA(trace.color, 0));

          ctx.strokeStyle = grad;
          ctx.beginPath();
          ctx.moveTo(trace.x, Math.max(0, tail));
          ctx.lineTo(trace.x, Math.min(safeH, head));
          ctx.stroke();

          if (head > 0 && head < safeH) {
            ctx.fillStyle = formatRGBA(trace.color, trace.opacity * 2.5);
            ctx.beginPath();
            ctx.arc(trace.x, head, 1.8, 0, Math.PI * 2);
            ctx.fill();
          }

          trace.progress += trace.speed / safeH;
        }

        if (trace.progress > 1) {
          Object.assign(trace, makeTrace());
          trace.progress = 0;
          trace.pause = Math.floor(Math.random() * 120);
        }
      }
      ctx.restore();

      // ── 3. Floating HUD Targets (New Themed Element) ──────────────────────────
      ctx.save();
      ctx.lineWidth = 0.5;

      for (const target of hudTargets) {
        target.angle += target.rotationSpeed;
        target.pulseProgress += target.pulseSpeed;

        const currentOpacity = (Math.sin(target.pulseProgress) * 0.04 + 0.05);
        ctx.strokeStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        
        // Render concentric dotted radar ring
        ctx.beginPath();
        ctx.arc(target.x, target.y - (scrollY * 0.08), target.size, 0, Math.PI * 2);
        ctx.setLineDash([2, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Render solid cross inside target
        ctx.beginPath();
        const lineLen = 8;
        ctx.moveTo(target.x - lineLen, target.y - (scrollY * 0.08));
        ctx.lineTo(target.x + lineLen, target.y - (scrollY * 0.08));
        ctx.moveTo(target.x, target.y - (scrollY * 0.08) - lineLen);
        ctx.lineTo(target.x, target.y - (scrollY * 0.08) + lineLen);
        ctx.stroke();

        // Outer bracket notches
        ctx.save();
        ctx.translate(target.x, target.y - (scrollY * 0.08));
        ctx.rotate(target.angle);
        for (let j = 0; j < 4; j++) {
          ctx.beginPath();
          ctx.arc(0, 0, target.size + 4, -0.15, 0.15);
          ctx.stroke();
          ctx.rotate(Math.PI / 2);
        }
        ctx.restore();
      }
      ctx.restore();

      // ── 4. Interactive Mouse Effects ─────────────────────────────────────────
      if (mouse.x > -100 && mouse.x < width + 100) {
        // Soft purple gradient glow
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          240
        );
        gradient.addColorStop(0, "rgba(139, 92, 246, 0.12)");
        gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.04)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 240, 0, Math.PI * 2);
        ctx.fill();

        // Blueprint crosshair
        ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
        ctx.lineWidth = 0.5;

        ctx.beginPath();
        ctx.moveTo(0, mouse.y);
        ctx.lineTo(width, mouse.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(mouse.x, 0);
        ctx.lineTo(mouse.x, height);
        ctx.stroke();

        // Technical Coordinate tag
        ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
        ctx.font = "9px monospace";
        const coordText = `COORD: [X:${Math.round(mouse.x)}, Y:${Math.round(mouse.y + scrollY)}]`;
        ctx.fillText(coordText, mouse.x + 16, mouse.y - 12);
      }



      // ── 6. Drafting Project Metadata (Top Right) ────────────────────────────
      ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
      ctx.font = "8px monospace";
      ctx.fillText("SCALE: 1:1.00", width - 120, 24);
      ctx.fillText("DRAFTING_PROJ: COMP_01", width - 120, 36);
      ctx.fillText("DATUM: ELEVATION_0", width - 120, 48);

      animationFrameId = requestAnimationFrame(draw);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initTraces();
      initTargets();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    scrollRef.current = window.scrollY;

    resizeCanvas();

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}
