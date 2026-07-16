"use client";

import { useRef, useEffect, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndRef = useRef<HTMLDivElement>(null);
  const [contentVisible, setContentVisible] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);
  const [videoDone, setVideoDone] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video) return;

    let playCount = 0;
    video.muted = true;
    video.loop = false;
    video.playsInline = true;

    const start = () => {
      video.play().catch(() => {});
    };
    if (video.readyState >= 2) start();
    else video.addEventListener("loadeddata", start, { once: true });

    const onEnded = () => {
      playCount++;
      if (playCount === 1) {
        video.style.transition = "opacity 300ms ease-in-out";
        video.style.opacity = "0";
        setTimeout(() => {
          video.currentTime = 0;
          video.play().catch(() => {});
          video.style.opacity = "1";
          setContentVisible(true);
        }, 150);
      } else if (playCount >= 2) {
        video.style.transition = "opacity 600ms ease-in-out";
        video.style.opacity = "0.92";
        video.pause();
        setVideoDone(true);
        setScrollVisible(true);
      }
    };
    video.addEventListener("ended", onEnded);

    const onScroll = () => {
      const y = window.scrollY || 0;
      if (wrap) wrap.style.transform = `translateY(${y * 0.4}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      video.removeEventListener("ended", onEnded);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
    >
      {/* Video + overlay parallax layer */}
      <div
        ref={wrapRef}
        className="absolute inset-0 will-change-transform"
        style={{
          background:
            "linear-gradient(135deg, #1A3D16 0%, #2D6A27 50%, #4A8C3F 100%)",
        }}
      >
        <video
          ref={videoRef}
          preload="auto"
          playsInline
          muted
          className={`absolute inset-0 w-full h-full object-cover object-center ${
            videoDone ? "animate-breathe" : ""
          }`}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,61,22,0.15) 0%, transparent 40%, rgba(26,61,22,0.45) 100%)",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex flex-col items-start px-[8%] z-10 max-md:items-center max-md:text-center max-md:px-6">
        <div
          ref={contentRef}
          className={`max-w-[640px] transition-all duration-[1200ms] ease-out ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-dorado/90 text-[13px] tracking-[3px] uppercase mb-4">
            Colombia · Desde 2015
          </p>

          <h1 className="font-[var(--font-playfair)] leading-[1.04] text-[clamp(48px,7vw,88px)] mb-5">
            <span className="block font-light text-white">Cultivamos</span>
            <span className="block font-bold text-white">calidad.</span>
          </h1>

          <p className="text-white/85 text-[clamp(16px,2vw,22px)] font-light tracking-wide mb-10">
            Exportamos confianza al mundo.
          </p>

          <div className="flex gap-4 max-md:flex-col max-md:items-center max-md:w-full">
            <a
              href="#catalogo"
              className="bg-verde-oscuro text-white px-8 py-3.5 rounded-full text-[15px] tracking-wide no-underline transition-all duration-300 hover:bg-dorado hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(45,106,39,0.35)]"
            >
              Ver catálogo
            </a>
            <a
              href="#bouquet"
              className="border border-white/70 text-white px-8 py-3.5 rounded-full text-[15px] tracking-wide no-underline transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Crea tu bouquet →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndRef}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center transition-opacity duration-1000 ${
          scrollVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-white/60 text-[11px] tracking-[2px] uppercase">
          Descubre más
        </span>
        <span className="block w-px bg-white/40 mt-2 animate-scroll-pulse" />
      </div>
    </section>
  );
}
