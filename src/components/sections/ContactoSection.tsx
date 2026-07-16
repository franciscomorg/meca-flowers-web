"use client";

import { useEffect, useRef, useState } from "react";
import PetalsFalling from "@/components/ui/PetalsFalling";
import { CONTACTO, linkWhatsApp } from "@/config/sitio";

const contactCards = [
  {
    icon: "📞",
    title: "Teléfono",
    lines: CONTACTO.telefonos,
    href: `tel:${CONTACTO.telefonos[0].replace(/\s/g, "")}`,
  },
  {
    icon: "✉️",
    title: "Email",
    lines: [CONTACTO.email],
    href: `mailto:${CONTACTO.email}`,
  },
  {
    icon: "📱",
    title: "Redes Sociales",
    lines: [CONTACTO.instagram],
    href: CONTACTO.instagramUrl,
  },
];

export default function ContactoSection() {
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative bg-verde-oscuro py-24 px-[8%] overflow-hidden"
    >
      <PetalsFalling count={30} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-dorado text-sm tracking-[3px] uppercase mb-3">
            Hablemos
          </p>
          <h2 className="font-[var(--font-playfair)] text-white text-[clamp(32px,5vw,48px)] font-bold mb-4">
            Contacto
          </h2>
          <p className="text-crema/80 text-lg font-light italic max-w-lg mx-auto">
            &ldquo;Cultivamos calidad, exportamos confianza&rdquo;
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-6 mb-14 transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {contactCards.map((card, i) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/[0.08] backdrop-blur-md rounded-2xl p-8 text-center no-underline transition-all duration-500 hover:bg-white/[0.15] hover:-translate-y-2 border border-white/[0.08] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-dorado/20 transition-colors duration-300">
                <span className="text-3xl">{card.icon}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">
                {card.title}
              </h3>
              {card.lines.map((line) => (
                <p key={line} className="text-crema/60 text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <a
            href={linkWhatsApp("Hola Meca Flowers, quiero más información sobre sus productos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-dorado text-white px-10 py-4 rounded-full text-lg font-medium tracking-wide no-underline transition-all duration-300 hover:bg-white hover:text-verde-oscuro hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(201,151,58,0.35)]"
          >
            <span className="text-2xl group-hover:animate-bounce">💬</span>
            Escríbenos al WhatsApp
          </a>
          <p className="text-white/30 text-sm mt-6">
            Respondemos en menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  );
}
