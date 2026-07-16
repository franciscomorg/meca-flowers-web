"use client";

import { useEffect, useRef, useState } from "react";
import { linkWhatsApp } from "@/config/sitio";

interface BouquetItem {
  flor: string;
  cantidad: number;
  longitud: string;
}

interface Bouquet {
  nombre: string;
  descripcion: string;
  flores: BouquetItem[];
  longitud: string;
  colorAccent: string;
}

const bouquets: Bouquet[] = [
  {
    nombre: "Bouquet Clásico Rosa",
    descripcion: "Elegancia atemporal con rosas premium colombianas",
    longitud: "60 cm",
    colorAccent: "#fce4ec",
    flores: [
      { flor: "Rosa Mondial", cantidad: 12, longitud: "60 cm" },
      { flor: "Eucalyptus Parvifolia", cantidad: 5, longitud: "55 cm" },
      { flor: "Ruscus", cantidad: 3, longitud: "60 cm" },
    ],
  },
  {
    nombre: "Bouquet Campestre",
    descripcion: "Mezcla silvestre llena de color y textura",
    longitud: "55 cm",
    colorAccent: "#fff8e1",
    flores: [
      { flor: "Alstroemeria Purple", cantidad: 8, longitud: "55 cm" },
      { flor: "Craspedia", cantidad: 5, longitud: "60 cm" },
      { flor: "Solidago", cantidad: 4, longitud: "55 cm" },
      { flor: "Helecho", cantidad: 3, longitud: "50 cm" },
    ],
  },
  {
    nombre: "Bouquet Imperial",
    descripcion: "Hortensias y rosas para ocasiones especiales",
    longitud: "65 cm",
    colorAccent: "#e8eaf6",
    flores: [
      { flor: "Hidrangea", cantidad: 3, longitud: "55 cm" },
      { flor: "Rosa Freedom", cantidad: 10, longitud: "60 cm" },
      { flor: "Hypericum", cantidad: 5, longitud: "60 cm" },
      { flor: "Eucalyptus Parvifolia", cantidad: 4, longitud: "55 cm" },
    ],
  },
  {
    nombre: "Bouquet Tropical",
    descripcion: "Colores vibrantes que evocan la naturaleza colombiana",
    longitud: "60 cm",
    colorAccent: "#d1c4e9",
    flores: [
      { flor: "Clavel Superselect", cantidad: 10, longitud: "60 cm" },
      { flor: "Eryngium", cantidad: 6, longitud: "60 cm" },
      { flor: "Brillantina", cantidad: 4, longitud: "55 cm" },
      { flor: "Ruscus Tinturado", cantidad: 3, longitud: "50 cm" },
    ],
  },
];

export default function BouquetsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-crema py-24 px-[8%]">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-dorado text-sm tracking-[3px] uppercase mb-3">
            Listos para enviar
          </p>
          <h2 className="font-[var(--font-playfair)] text-verde-oscuro text-[clamp(28px,4vw,42px)] font-bold mb-4">
            Bouquets Pre-Armados
          </h2>
          <p className="text-verde-noche/60 max-w-xl mx-auto">
            Combinaciones diseñadas por nuestro equipo. Cada bouquet incluye flores frescas de exportación.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-6 transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {bouquets.map((b) => {
            const isOpen = expanded === b.nombre;
            const totalFlores = b.flores.reduce((sum, f) => sum + f.cantidad, 0);
            const whatsappUrl = linkWhatsApp(`Hola, me interesa el ${b.nombre} (${totalFlores} tallos, ${b.longitud})`);

            return (
              <div
                key={b.nombre}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Header visual */}
                <div
                  className="h-40 flex items-center justify-center relative"
                  style={{ backgroundColor: b.colorAccent }}
                >
                  <span className="text-6xl opacity-30">💐</span>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-verde-oscuro">
                    {totalFlores} tallos · {b.longitud}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-[var(--font-playfair)] text-verde-noche text-xl font-semibold mb-1">
                    {b.nombre}
                  </h3>
                  <p className="text-verde-noche/50 text-sm mb-4">
                    {b.descripcion}
                  </p>

                  {/* Expandable flower list */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : b.nombre)}
                    className="text-verde-oscuro text-sm font-medium cursor-pointer hover:text-dorado transition-colors mb-3"
                  >
                    {isOpen ? "Ocultar detalle ▲" : "Ver composición ▼"}
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 pt-3 mb-4 space-y-2">
                      {b.flores.map((f) => (
                        <div
                          key={f.flor}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="text-verde-noche/70">{f.flor}</span>
                          <span className="text-verde-noche/50">
                            {f.cantidad} tallos · {f.longitud}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-verde-oscuro text-white py-2.5 rounded-full text-sm font-medium no-underline transition-all duration-300 hover:bg-dorado"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
