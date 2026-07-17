"use client";

import { useEffect, useRef, useState } from "react";
import FlowerSelector from "@/components/ui/FlowerSelector";
import { linkWhatsApp } from "@/config/sitio";

interface FlorData {
  id: string;
  nombre: string;
  color: string;
  emoji: string;
}

// ============================================================
// LISTA DE FLORES DEL "CREA TU BOUQUET" — edita aquí.
// Para agregar una flor: copia una línea y cambia id/nombre/emoji.
//   - id: identificador único, sin espacios (ej: "tulipan")
//   - nombre: lo que ve el cliente
//   - emoji: el ícono (elige uno de https://emojipedia.org o copia de otra línea)
//   - color: color de fondo suave del ícono (hex)
// Para quitar una flor: borra su línea.
// ============================================================
const flores: FlorData[] = [
  { id: "rosa", nombre: "Rosa", color: "#fce4ec", emoji: "🌹" },
  { id: "rosa-amarilla", nombre: "Rosa Amarilla", color: "#fff9c4", emoji: "🌻" },
  { id: "clavel", nombre: "Clavel", color: "#f3e5f5", emoji: "🌸" },
  { id: "hidrangea", nombre: "Hidrangea", color: "#e8eaf6", emoji: "💐" },
  { id: "alstroemeria", nombre: "Alstroemeria", color: "#d1c4e9", emoji: "🌺" },
  { id: "girasol", nombre: "Girasol", color: "#fff8e1", emoji: "🌻" },
  { id: "lirio", nombre: "Lirio", color: "#fce4ec", emoji: "🌷" },
  { id: "gerbera", nombre: "Gerbera", color: "#ffe0b2", emoji: "🌼" },
  { id: "craspedia", nombre: "Craspedia", color: "#fff8e1", emoji: "🟡" },
  { id: "eryngium", nombre: "Eryngium", color: "#e3f2fd", emoji: "🔵" },
  { id: "gypsophila", nombre: "Gypsophila", color: "#fafafa", emoji: "🤍" },
  { id: "eucalyptus", nombre: "Eucalyptus", color: "#e8f5e9", emoji: "🍃" },
  { id: "ruscus", nombre: "Ruscus", color: "#c8e6c9", emoji: "🌿" },
  { id: "brillantina", nombre: "Brillantina", color: "#f0f4c3", emoji: "✨" },
];

export default function BouquetSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [seleccion, setSeleccion] = useState<Record<string, number>>({});
  const [busqueda, setBusqueda] = useState("");

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

  const handleCambiar = (id: string, cantidad: number) => {
    setSeleccion((prev) => {
      const next = { ...prev };
      if (cantidad === 0) delete next[id];
      else next[id] = cantidad;
      return next;
    });
  };

  const seleccionadas = Object.entries(seleccion)
    .map(([id, cant]) => ({ flor: flores.find((f) => f.id === id)!, cant }))
    .filter((x) => x.flor);

  const totalFlores = seleccionadas.reduce((s, x) => s + x.cant, 0);

  const floresFiltradas = flores.filter(
    (f) => busqueda === "" || f.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const cotizar = () => {
    const lista = seleccionadas.map((x) => `${x.cant} ${x.flor.nombre}`).join(", ");
    window.open(linkWhatsApp(`Hola, quiero cotizar un bouquet con: ${lista}.`), "_blank");
  };

  return (
    <section
      id="bouquet"
      ref={sectionRef}
      className="py-24 px-[8%]"
      style={{ background: "linear-gradient(180deg, #F0F5F0 0%, #E8F0E8 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-dorado text-sm tracking-[3px] uppercase mb-3">Personaliza</p>
          <h2 className="font-[var(--font-playfair)] text-verde-oscuro text-[clamp(32px,5vw,48px)] font-bold">
            Crea tu Bouquet
          </h2>
          <p className="text-verde-noche/60 mt-3 max-w-lg mx-auto">
            Elige tus flores y cantidades, y te cotizamos por WhatsApp al instante.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Panel izquierdo — selector */}
          <div>
            <h3 className="text-verde-oscuro font-semibold mb-3">1. Elige tus flores</h3>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Buscar flor..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-verde-oscuro/15 text-verde-noche text-sm focus:outline-none focus:border-verde-oscuro/40 transition-colors bg-white"
              />
            </div>
            <FlowerSelector
              flores={floresFiltradas}
              seleccion={seleccion}
              onCambiar={handleCambiar}
            />
          </div>

          {/* Panel derecho — lista del bouquet */}
          <div className="bg-white rounded-2xl shadow-sm border border-verde-oscuro/5 p-6 flex flex-col">
            <h3 className="text-verde-oscuro font-semibold mb-4">2. Tu bouquet</h3>

            {seleccionadas.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center text-verde-noche/30 py-10">
                <span className="text-5xl mb-4">💐</span>
                <p className="text-lg">Aún no has agregado flores</p>
                <p className="text-sm mt-1">Selecciónalas en el panel de la izquierda</p>
              </div>
            ) : (
              <div className="flex-1 space-y-2 mb-4">
                {seleccionadas.map(({ flor, cant }) => (
                  <div
                    key={flor.id}
                    className="flex items-center justify-between bg-crema/60 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{flor.emoji}</span>
                      <span className="text-verde-noche font-medium">{flor.nombre}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-verde-oscuro font-semibold">×{cant}</span>
                      <button
                        onClick={() => handleCambiar(flor.id, 0)}
                        className="text-rosa-coral text-sm cursor-pointer hover:underline"
                      >
                        quitar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {totalFlores > 0 && (
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between text-sm text-verde-noche/60 mb-4">
                  <span>Total de tallos</span>
                  <span className="font-semibold text-verde-noche">{totalFlores}</span>
                </div>
                <button
                  onClick={cotizar}
                  className="w-full bg-verde-oscuro text-white py-3.5 rounded-full text-[15px] font-medium tracking-wide cursor-pointer transition-all duration-300 hover:bg-dorado hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  💬 Cotizar por WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
