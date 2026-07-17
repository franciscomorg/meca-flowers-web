"use client";

import { useEffect, useRef, useState } from "react";

const valores = [
  {
    title: "Quiénes somos",
    text: "Somos Meca Flowers & Green SAS, una comercializadora de flores colombianas con sede en Facatativá, Cundinamarca. Desde 2015, conectamos la riqueza floral de Colombia con mercados internacionales, ofreciendo productos frescos y de la más alta calidad.",
    icon: "🌿",
  },
  {
    title: "Misión",
    text: "Comercializar flores colombianas de calidad excepcional, fortaleciendo las relaciones con nuestros clientes y proveedores mediante un servicio confiable, puntual y comprometido con la excelencia en cada tallo.",
    icon: "🎯",
  },
  {
    title: "Visión",
    text: "Ser reconocidos como la comercializadora de flores colombianas más confiable del mercado, expandiendo nuestra presencia internacional mientras mantenemos nuestro compromiso con la calidad y la sostenibilidad.",
    icon: "🔭",
  },
  {
    title: "Compromiso ambiental",
    text: "Trabajamos de la mano con productores que implementan prácticas sostenibles de cultivo, minimizando el impacto ambiental y promoviendo el uso responsable de recursos naturales en toda nuestra cadena de valor.",
    icon: "🌱",
  },
];

const cifras = [
  { valor: "2015", label: "Año de fundación" },
  { valor: "19+", label: "Variedades de flores" },
  { valor: "10+", label: "Años de experiencia" },
  { valor: "🌎", label: "Exportación mundial" },
];

export default function NosotrosSection() {
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
      id="nosotros"
      ref={sectionRef}
      className="bg-crema py-24 px-[8%] relative overflow-hidden"
    >
      {/* Botanical decorations */}
      <div className="absolute top-10 left-0 text-6xl opacity-[0.07] select-none pointer-events-none rotate-12">
        🍃
      </div>
      <div className="absolute bottom-10 right-0 text-7xl opacity-[0.07] select-none pointer-events-none -rotate-12">
        🌺
      </div>
      <div className="absolute top-1/3 right-10 text-5xl opacity-[0.05] select-none pointer-events-none">
        🌸
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-dorado text-sm tracking-[3px] uppercase mb-3">
            Conócenos
          </p>
          <h2 className="font-[var(--font-playfair)] text-verde-oscuro text-[clamp(32px,5vw,48px)] font-bold mb-4">
            Sobre Meca Flowers
          </h2>
          <p className="text-verde-noche/60 text-lg max-w-2xl mx-auto">
            Más de 10 años llevando la belleza de las flores colombianas al mundo, con calidad y compromiso en cada tallo.
          </p>
        </div>

        {/* Cifras / stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          {cifras.map((c) => (
            <div
              key={c.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="font-[var(--font-playfair)] text-verde-oscuro text-3xl font-bold mb-1">
                {c.valor}
              </div>
              <div className="text-verde-noche/50 text-sm">{c.label}</div>
            </div>
          ))}
        </div>

        {/* Valores cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {valores.map((card, i) => (
            <div
              key={card.title}
              className={`bg-white rounded-2xl p-8 shadow-sm transition-all duration-700 hover:shadow-md hover:-translate-y-1 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${(i + 2) * 150}ms` : "0ms" }}
            >
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="font-[var(--font-playfair)] text-verde-oscuro text-xl font-semibold mb-3">
                {card.title}
              </h3>
              <p className="text-verde-noche/70 leading-relaxed text-[15px]">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Ubicación */}
        <div
          className={`transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">
              {/* Map */}
              <div className="h-72 md:h-auto min-h-[300px] bg-verde-oscuro/5 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63620.04897404493!2d-74.39!3d4.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f7e3e9c8e3e3d%3A0x3e3e3e3e3e3e3e3e!2sFacatativ%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1700000000000"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Meca Flowers"
                />
              </div>

              {/* Location info */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="text-dorado text-sm tracking-[3px] uppercase mb-3">
                  Nuestra ubicación
                </p>
                <h3 className="font-[var(--font-playfair)] text-verde-oscuro text-2xl font-bold mb-4">
                  Facatativá, Cundinamarca
                </h3>
                <p className="text-verde-noche/60 leading-relaxed mb-6">
                  Ubicados en el corazón de la sabana de Bogotá, una de las regiones
                  con las condiciones climáticas más favorables del mundo para el
                  cultivo de flores. Altitud, luminosidad y temperatura ideales
                  para producir flores de calidad de exportación durante todo el año.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-verde-noche/70">
                    <span className="text-lg">📍</span>
                    <span className="text-sm">Facatativá, Cundinamarca, Colombia</span>
                  </div>
                  <div className="flex items-center gap-3 text-verde-noche/70">
                    <span className="text-lg">🌡️</span>
                    <span className="text-sm">Altitud: 2,586 m.s.n.m. · Clima ideal para flores</span>
                  </div>
                  <div className="flex items-center gap-3 text-verde-noche/70">
                    <span className="text-lg">✈️</span>
                    <span className="text-sm">Cercanía al Aeropuerto El Dorado — logística directa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
