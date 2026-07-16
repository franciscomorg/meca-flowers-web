"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { productos, categorias, type Categoria } from "@/data/productos";
import { linkWhatsApp } from "@/config/sitio";

interface CatalogoSectionProps {
  /** Fotos por producto (id → lista de rutas), detectadas en el servidor. Ver src/lib/galeria.ts */
  galerias?: Record<string, string[]>;
  /** Foto general por categoría (solo las que ya tienen archivo subido). */
  portadas?: Partial<Record<Categoria, string>>;
}

const PEDIDO_ESPECIAL = linkWhatsApp(
  "Hola, estoy buscando un producto que no vi en el catálogo:"
);

function BotonPedidoEspecial({ compacto = false }: { compacto?: boolean }) {
  if (compacto) {
    return (
      <a
        href={PEDIDO_ESPECIAL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-verde-oscuro no-underline hover:text-dorado transition-colors"
      >
        ¿No encuentras lo que buscas?{" "}
        <span className="font-semibold underline underline-offset-4">
          Pregúntanos y lo conseguimos →
        </span>
      </a>
    );
  }

  return (
    <div className="mt-14 bg-crema rounded-2xl px-8 py-10 text-center">
      <h3 className="font-[var(--font-playfair)] text-verde-oscuro text-2xl font-bold mb-2">
        ¿No encuentras lo que buscas?
      </h3>
      <p className="text-verde-noche/60 mb-6 max-w-xl mx-auto">
        Trabajamos con más variedades de las que alcanzamos a mostrar aquí. Cuéntanos qué
        necesitas y lo conseguimos para ti.
      </p>
      <a
        href={PEDIDO_ESPECIAL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-verde-oscuro text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide no-underline hover:bg-verde-medio transition-colors"
      >
        Pregúntanos por WhatsApp
      </a>
    </div>
  );
}

export default function CatalogoSection({ galerias, portadas }: CatalogoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [filtro, setFiltro] = useState<Categoria>("Todas");
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const filtrados = productos.filter((p) => {
    const matchCategoria =
      filtro === "Todas" ||
      p.categoria === filtro ||
      p.categorias?.includes(filtro);
    const matchBusqueda =
      busqueda === "" ||
      p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

  // La portada solo tiene sentido en la vista de una categoría, sin búsqueda encima.
  const portada = filtro !== "Todas" && busqueda === "" ? portadas?.[filtro] : undefined;

  return (
    <section
      id="catalogo"
      ref={sectionRef}
      className="bg-white py-16 px-[8%]"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-10 transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Buscar por nombre..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full px-5 py-3 rounded-full border border-verde-oscuro/20 text-verde-noche text-sm focus:outline-none focus:border-verde-oscuro/50 transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFiltro(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    filtro === cat
                      ? "bg-verde-oscuro text-white"
                      : "bg-crema text-verde-oscuro hover:bg-verde-oscuro/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-verde-noche/40 text-sm">
              {filtrados.length} {filtrados.length === 1 ? "producto" : "productos"}
            </p>
            <BotonPedidoEspecial compacto />
          </div>
        </div>

        {portada && (
          <div className="relative h-52 md:h-72 rounded-2xl overflow-hidden mb-8">
            <img src={portada} alt={filtro} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-verde-noche/70 to-verde-noche/10 flex items-end">
              <h2 className="font-[var(--font-playfair)] text-white text-3xl md:text-4xl font-bold p-6 md:p-8">
                {filtro}
              </h2>
            </div>
          </div>
        )}

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filtrados.map((producto) => (
            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              grados={producto.grados}
              categoria={producto.categoria}
              disponible={producto.disponible}
              colorPlaceholder="#f5f0ea"
              imagenUrl={producto.imagen}
              imagenes={galerias?.[producto.id]}
              colores={producto.colores}
            />
          ))}
        </div>

        {filtrados.length === 0 && (
          <p className="text-center text-verde-noche/50 mt-12 text-lg">
            No se encontraron productos con ese criterio.
          </p>
        )}

        <BotonPedidoEspecial />
      </div>
    </section>
  );
}
