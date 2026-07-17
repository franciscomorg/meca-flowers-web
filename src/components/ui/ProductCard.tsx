"use client";

import { useState } from "react";
import { linkWhatsApp } from "@/config/sitio";

interface ProductCardProps {
  nombre: string;
  grados: string[];
  categoria: string;
  disponible: boolean;
  colorPlaceholder: string;
  imagenUrl?: string;
  colores?: string[];
  /**
   * Fotos del producto ya verificadas en el servidor (la principal primero).
   * Con una sola foto la tarjeta se ve igual que siempre; vacía muestra el 🌸.
   */
  imagenes?: string[];
}

export default function ProductCard({
  nombre,
  grados,
  disponible,
  colorPlaceholder,
  imagenUrl,
  colores,
  imagenes,
}: ProductCardProps) {
  const fotos = imagenes ?? (imagenUrl ? [imagenUrl] : []);
  const [actual, setActual] = useState(0);
  const variasFotos = fotos.length > 1;
  const foto = fotos[actual];

  const whatsappUrl = linkWhatsApp(`Hola, me interesa consultar sobre: ${nombre} (${grados.join(", ")})`);

  // Los botones van encima del enlace de WhatsApp que cubre la foto: hay que frenar el clic.
  const mover = (e: React.MouseEvent, salto: number) => {
    e.preventDefault();
    e.stopPropagation();
    setActual((i) => (i + salto + fotos.length) % fotos.length);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg border border-gray-100">
      <div
        className="relative h-56 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: foto ? "#fafafa" : colorPlaceholder }}
      >
        {foto ? (
          <img
            src={foto}
            alt={nombre}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-5xl opacity-30">🌸</span>
        )}

        <span
          className={`absolute top-3 right-3 z-20 text-xs px-3 py-1 rounded-full font-medium ${
            disponible
              ? "bg-verde-medio/90 text-white"
              : "bg-gray-400/90 text-white"
          }`}
        >
          {disponible ? "Disponible" : "Agotado"}
        </span>

        {/*
          En pantallas táctiles no existe el hover: el botón y las flechas se muestran
          siempre. En pantallas con mouse se mantiene el efecto de aparecer al pasar.
        */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-end justify-end p-2.5 transition-opacity duration-300 [@media(hover:hover)]:items-center [@media(hover:hover)]:justify-center [@media(hover:hover)]:p-0 [@media(hover:hover)]:bg-verde-oscuro/60 [@media(hover:hover)]:opacity-0 group-hover:opacity-100"
        >
          <span className="bg-white/90 text-verde-oscuro px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm [@media(hover:hover)]:bg-white [@media(hover:hover)]:px-6 [@media(hover:hover)]:py-2.5 [@media(hover:hover)]:text-sm [@media(hover:hover)]:shadow-none">
            Consultar
          </span>
        </a>

        {variasFotos && (
          <>
            <button
              onClick={(e) => mover(e, -1)}
              aria-label={`Foto anterior de ${nombre}`}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/85 text-verde-oscuro flex items-center justify-center text-lg leading-none pb-0.5 shadow-sm transition-opacity duration-300 [@media(hover:hover)]:opacity-0 group-hover:opacity-100 hover:bg-white cursor-pointer"
            >
              ‹
            </button>
            <button
              onClick={(e) => mover(e, 1)}
              aria-label={`Foto siguiente de ${nombre}`}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/85 text-verde-oscuro flex items-center justify-center text-lg leading-none pb-0.5 shadow-sm transition-opacity duration-300 [@media(hover:hover)]:opacity-0 group-hover:opacity-100 hover:bg-white cursor-pointer"
            >
              ›
            </button>

            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
              {fotos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActual(i);
                  }}
                  aria-label={`Ver foto ${i + 1} de ${nombre}`}
                  className={`h-1.5 rounded-full drop-shadow-[0_0_2px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer ${
                    i === actual ? "w-4 bg-white" : "w-1.5 bg-white/60 hover:bg-white/90"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-[var(--font-playfair)] text-verde-noche font-semibold text-lg mb-1">
          {nombre}
        </h3>
        <p className="text-verde-noche/50 text-sm mb-2">
          Grado: {grados.join(" · ")}
        </p>
        {colores && colores.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {colores.map((c) => (
              <span
                key={c}
                className="text-[11px] px-2 py-0.5 rounded-full bg-crema text-verde-noche/60"
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
