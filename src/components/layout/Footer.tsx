"use client";

import Link from "next/link";
import PetalsFalling from "@/components/ui/PetalsFalling";
import { CONTACTO } from "@/config/sitio";

const footerLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Bouquet", href: "/#bouquet" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Footer() {
  return (
    <footer className="relative bg-verde-noche text-white py-16 px-[8%] overflow-hidden">
      <PetalsFalling count={15} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 no-underline mb-4">
              <img
                src="/images/logo.jpg"
                alt="Meca Flowers"
                className="h-12 w-auto rounded-full"
              />
              <span className="font-[var(--font-playfair)] text-3xl tracking-wide">
                <span className="font-bold text-white">Meca</span>
                <span className="italic font-normal text-crema"> Flowers</span>
              </span>
            </Link>
            <p className="text-crema/50 text-sm leading-relaxed">
              Comercializadora de flores colombianas de calidad de exportación.
              Desde Facatativá, Cundinamarca al mundo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-dorado/80 text-sm tracking-[2px] uppercase mb-4">
              Navegación
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-crema/60 text-sm no-underline hover:text-dorado transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dorado/80 text-sm tracking-[2px] uppercase mb-4">
              Contacto
            </h4>
            <div className="flex flex-col gap-3 text-crema/60 text-sm">
              <a
                href={`https://wa.me/${CONTACTO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-crema/60 hover:text-dorado transition-colors"
              >
                WhatsApp: {CONTACTO.telefonos[0]}
              </a>
              <a
                href={`tel:${CONTACTO.telefonos[1].replace(/\s/g, "")}`}
                className="no-underline text-crema/60 hover:text-dorado transition-colors"
              >
                {CONTACTO.telefonos[1]}
              </a>
              <a
                href={`mailto:${CONTACTO.email}`}
                className="no-underline text-crema/60 hover:text-dorado transition-colors"
              >
                {CONTACTO.email}
              </a>
              <a
                href={CONTACTO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-crema/60 hover:text-dorado transition-colors"
              >
                {CONTACTO.instagram}
              </a>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dorado/50 text-sm text-center">
            © 2025 Meca Flowers & Green SAS · Facatativá, Cundinamarca, Colombia
          </p>
          <p className="text-crema/30 text-xs italic">
            Cultivamos calidad, exportamos confianza
          </p>
        </div>
      </div>
    </footer>
  );
}
