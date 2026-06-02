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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Initial scroll position
    scrollRef.current = window.scrollY;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      // Smooth interpolation for mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const scrollY = scrollRef.current;
      const gridSize = 64;
      const width = canvas.width;
      const height = canvas.height;

      // Draw Dotted Grid
      ctx.fillStyle = "rgba(255, 255, 255, 0.24)";
      
      // Apply parallax Y offset based on scroll position
      const parallaxOffsetY = -(scrollY * 0.15) % gridSize;

      for (let x = 0; x < width; x += gridSize) {
        for (let y = parallaxOffsetY; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw Interactive Mouse Effects
      if (mouse.x > -100 && mouse.x < width + 100) {
        // 1. Soft purple gradient glow
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

        // 2. Blueprint alignment guides
        ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
        ctx.lineWidth = 0.5;

        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(0, mouse.y);
        ctx.lineTo(width, mouse.y);
        ctx.stroke();

        // Vertical line
        ctx.beginPath();
        ctx.moveTo(mouse.x, 0);
        ctx.lineTo(mouse.x, height);
        ctx.stroke();

        // 3. Technical Coordinate tag
        ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
        ctx.font = "9px monospace";
        ctx.letterSpacing = "1px";
        const coordText = `COORD: [X:${Math.round(mouse.x)}, Y:${Math.round(mouse.y + scrollY)}]`;
        ctx.fillText(coordText, mouse.x + 16, mouse.y - 12);
      }

      // 4. Live scroll depth & telemetry metrics at top corner
      ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
      ctx.font = "8px monospace";
      
      const visibleScrollTop = Math.round(scrollY);
      ctx.fillText(`TELEMETRY.SCROLL_Y: ${visibleScrollTop}px`, 24, 32);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const depthPercent = totalHeight > 0 ? Math.min(100, Math.round((scrollY / totalHeight) * 100)) : 0;
      ctx.fillText(`TELEMETRY.PAGE_DEPTH: ${depthPercent}%`, 24, 44);

      // 5. Drafting Ruler Scales (Top & Left Edges)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctx.font = "7px monospace";
      ctx.lineWidth = 0.5;

      // Horizontal scale ruler (Top edge)
      for (let x = 0; x < width; x += 10) {
        const isMajor = x % 50 === 0;
        const tickLen = isMajor ? 6 : 3;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, tickLen);
        ctx.stroke();

        if (isMajor && x > 0 && x < width - 100) {
          ctx.fillText(`${x}`, x - 8, 14);
        }
      }

      // Vertical scale ruler (Left edge) - with scroll parallax!
      const rulerStartY = -(scrollY * 0.15); // aligned with dotted grid
      for (let y = rulerStartY % 10; y < height; y += 10) {
        const virtualY = Math.round(y - rulerStartY);
        const isMajor = virtualY % 50 === 0;
        const tickLen = isMajor ? 6 : 3;
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(tickLen, y);
        ctx.stroke();

        if (isMajor && virtualY > 0 && y > 50) {
          ctx.fillText(`${virtualY}`, 10, y + 2.5);
        }
      }

      // 6. Rotating Technical Compass Dial (Bottom Right)
      const dialX = width - 100;
      const dialY = height - 100;
      const dialRadius = 48;
      
      ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
      ctx.lineWidth = 0.5;
      
      // Concentric rings
      ctx.beginPath();
      ctx.arc(dialX, dialY, dialRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(dialX, dialY, dialRadius - 6, 0, Math.PI * 2);
      ctx.stroke();
      
      // Axis cross
      ctx.beginPath();
      ctx.moveTo(dialX - dialRadius - 8, dialY);
      ctx.lineTo(dialX + dialRadius + 8, dialY);
      ctx.moveTo(dialX, dialY - dialRadius - 8);
      ctx.lineTo(dialX, dialY + dialRadius + 8);
      ctx.stroke();
      
      // Rotating dial ticks
      ctx.save();
      ctx.translate(dialX, dialY);
      const rotationAngle = (scrollY * 0.001) + (Date.now() * 0.00008);
      ctx.rotate(rotationAngle);
      
      ctx.strokeStyle = "rgba(255, 255, 255, 0.28)";
      for (let angle = 0; angle < 360; angle += 15) {
        ctx.beginPath();
        ctx.moveTo(dialRadius - 6, 0);
        ctx.lineTo(dialRadius, 0);
        ctx.stroke();
        ctx.rotate((15 * Math.PI) / 180);
      }
      ctx.restore();

      // Cardinal direction letters
      ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
      ctx.font = "7px monospace";
      ctx.fillText("N", dialX - 2.5, dialY - dialRadius - 10);
      ctx.fillText("S", dialX - 2.5, dialY + dialRadius + 14);
      ctx.fillText("E", dialX + dialRadius + 10, dialY + 2.5);
      ctx.fillText("W", dialX - dialRadius - 15, dialY + 2.5);
      ctx.fillText("SYS_RAD.V4.0", dialX - 28, dialY + 3);

      // 7. Drafting Project Metadata (Top Right)
      ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
      ctx.font = "8px monospace";
      ctx.letterSpacing = "1.5px";
      ctx.fillText("SCALE: 1:1.00", width - 120, 24);
      ctx.fillText("DRAFTING_PROJ: COMP_01", width - 120, 36);
      ctx.fillText("DATUM: ELEVATION_0", width - 120, 48);

      animationFrameId = requestAnimationFrame(draw);
    };

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
