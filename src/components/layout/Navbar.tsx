"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Crea tu Bouquet", href: "/#bouquet" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[8%] py-5 transition-all duration-400 ease-in-out ${
        scrolled
          ? "bg-crema/96 backdrop-blur-[12px] shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex items-center gap-2 no-underline">
        <img
          src="/images/logo.jpg"
          alt="Meca Flowers"
          className="h-10 w-auto rounded-full"
          style={{ mixBlendMode: scrolled ? "normal" : "normal" }}
        />
        <span className="font-[var(--font-playfair)] text-2xl tracking-wide hidden sm:inline">
          <span className={`font-bold ${scrolled ? "text-verde-oscuro" : "text-verde-oscuro"}`}>
            Meca
          </span>
          <span className={`italic font-normal ${scrolled ? "text-verde-oscuro" : "text-white"}`}>
            {" "}Flowers
          </span>
        </span>
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-7">
        {navLinks.map((link) =>
          link.href.startsWith("/") && !link.href.startsWith("/#") ? (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] tracking-wide no-underline transition-all duration-300 hover:opacity-70 ${
                scrolled ? "text-verde-oscuro" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.href}
              href={link.href}
              className={`text-[15px] tracking-wide no-underline transition-all duration-300 hover:opacity-70 ${
                scrolled ? "text-verde-oscuro" : "text-white"
              }`}
            >
              {link.label}
            </a>
          )
        )}
      </div>

      {/* Mobile hamburger */}
      <button
        className={`md:hidden text-2xl leading-none cursor-pointer ${
          scrolled ? "text-verde-oscuro" : "text-white"
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-crema/98 backdrop-blur-xl shadow-lg md:hidden flex flex-col items-center gap-4 py-6">
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-verde-oscuro text-lg no-underline hover:text-dorado transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-verde-oscuro text-lg no-underline hover:text-dorado transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
}
