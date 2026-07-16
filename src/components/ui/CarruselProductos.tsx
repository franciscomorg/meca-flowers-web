"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { productos } from "@/data/productos";

const destacados = productos.filter((p) => p.destacado);

export default function CarruselProductos() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % destacados.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {destacados.map((prod) => (
            <div key={prod.id} className="w-full flex-shrink-0 px-2">
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <img
                    src={prod.imagen}
                    alt={prod.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-verde-noche/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-[var(--font-playfair)] text-white text-3xl md:text-4xl font-bold mb-2">
                    {prod.nombre}
                  </h3>
                  <p className="text-white/70 text-lg mb-4">
                    {prod.grados.join(" · ")}
                  </p>
                  <Link
                    href="/catalogo"
                    className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 rounded-full text-sm font-medium no-underline border border-white/30 transition-all duration-300 hover:bg-white/30"
                  >
                    Ver en catálogo →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {destacados.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? "bg-verde-oscuro w-8"
                : "bg-verde-oscuro/30 w-2.5 hover:bg-verde-oscuro/50"
            }`}
            aria-label={`Ir a producto ${i + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => goTo((current - 1 + destacados.length) % destacados.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-verde-oscuro flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-lg text-lg"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={() => next()}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-verde-oscuro flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-lg text-lg"
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
}
