"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CarruselProductos from "@/components/ui/CarruselProductos";

export default function CatalogoPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="catalogo"
      ref={sectionRef}
      className="bg-white py-24 px-[8%]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-dorado text-sm tracking-[3px] uppercase mb-3">
            Nuestros productos
          </p>
          <h2 className="font-[var(--font-playfair)] text-verde-oscuro text-[clamp(32px,5vw,48px)] font-bold mb-4">
            Flores de Exportación
          </h2>
          <p className="text-verde-noche/60 text-lg max-w-xl mx-auto">
            Más de 19 variedades cultivadas con los más altos estándares de calidad.
          </p>
        </div>

        <div
          className={`transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <CarruselProductos />
        </div>

        <div
          className={`text-center mt-12 transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <Link
            href="/catalogo"
            className="inline-block bg-verde-oscuro text-white px-10 py-4 rounded-full text-lg font-medium tracking-wide no-underline transition-all duration-300 hover:bg-dorado hover:-translate-y-0.5 hover:shadow-lg"
          >
            Ver catálogo completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
