"use client";

import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const COLORS = [
  "rgba(232, 99, 122, 0.6)",
  "rgba(232, 99, 122, 0.4)",
  "rgba(201, 151, 58, 0.4)",
  "rgba(245, 240, 234, 0.5)",
  "rgba(232, 150, 170, 0.5)",
];

export default function PetalsFalling({
  count = 25,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let petals: Petal[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    const createPetal = (startAtTop = false): Petal => ({
      x: Math.random() * canvas.width,
      y: startAtTop ? -20 : Math.random() * canvas.height,
      size: 6 + Math.random() * 10,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: 0.3 + Math.random() * 0.7,
      opacity: 0.3 + Math.random() * 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size * 0.6, p.size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = petals.length - 1; i >= 0; i--) {
        const p = petals[i];
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.3;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 20) {
          petals[i] = createPetal(true);
        }

        drawPetal(p);
      }

      animId = requestAnimationFrame(animate);
    };

    resize();
    petals = Array.from({ length: count }, () => createPetal());
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
