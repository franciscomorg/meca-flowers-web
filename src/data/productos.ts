export type Categoria = "Todas" | "Rosas" | "Flores" | "Follajes" | "Tinturados";

export interface Producto {
  id: string;
  nombre: string;
  categoria: Categoria;
  /** Categorías adicionales: p. ej. el Solidago se vende como flor y como follaje. */
  categorias?: Categoria[];
  grados: string[];
  precio?: number;
  disponible: boolean;
  /** Ruta de la foto. Si el archivo todavía no existe, la tarjeta muestra un 🌸 hasta que lo subas. */
  imagen: string;
  colores?: string[];
  destacado?: boolean;
}

export const categorias: Categoria[] = [
  "Todas",
  "Rosas",
  "Flores",
  "Follajes",
  "Tinturados",
];

/**
 * Foto general de cada categoría: sale como portada arriba cuando se filtra por
 * esa categoría, y debajo van los productos uno por uno.
 * Si el archivo no existe, simplemente no aparece la portada.
 */
export const portadas: Partial<Record<Categoria, string>> = {
  Rosas: "/images/catalog/rosas/portada.jpg",
  // Flores: "/images/catalog/flores/portada.jpg",
  // Follajes: "/images/catalog/follajes/portada.jpg",
  // Tinturados: "/images/catalog/tinturados/portada.jpg",
};

export const productos: Producto[] = [
  // === ROSAS ===
  // Una tarjeta por VARIEDAD. Los grados (largo de tallo en cm) van en `grados`.
  // Fotos en public/images/catalog/rosas/ — para cambiar una, reemplaza el archivo con el mismo nombre.

  // Amarillas
  { id: "rosa-brighton", nombre: "Rosa Brighton", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/brighton.jpg", colores: ["Amarillo"] },
  { id: "rosa-super-sun", nombre: "Rosa Super Sun", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/super-sun.jpg", colores: ["Amarillo"] },
  { id: "rosa-high-yellow-magic", nombre: "Rosa High Yellow Magic", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/high-yellow-magic.jpg", colores: ["Amarillo bicolor"] },

  // Bicolores
  { id: "rosa-cabaret", nombre: "Rosa Cabaret", categoria: "Rosas", grados: ["40", "50"], disponible: true, imagen: "/images/catalog/rosas/cabaret.jpg", colores: ["Bicolor"] },
  { id: "rosa-marlyn", nombre: "Rosa Marlyn", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/marlyn.jpg", colores: ["Bicolor", "Rosado", "Durazno"] },
  { id: "rosa-sweetness", nombre: "Rosa Sweetness", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/sweetness.jpg", colores: ["Bicolor"] },

  // Blancas y crema
  { id: "rosa-candlelight", nombre: "Rosa Candlelight", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/candlelight.jpg", colores: ["Blanco"] },
  { id: "rosa-snowbliss", nombre: "Rosa Snowbliss", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/snowbliss.jpg", colores: ["Blanco"] },
  { id: "rosa-vainilla-ice", nombre: "Rosa Vainilla Ice", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/vainilla-ice.jpg", colores: ["Blanco"] },
  { id: "rosa-vendela", nombre: "Rosa Vendela", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/vendela.jpg", colores: ["Blanco crema"], destacado: true },

  // Lavanda
  { id: "rosa-cool-water", nombre: "Rosa Cool Water", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/cool-water.jpg", colores: ["Lavanda"] },

  // Durazno / naranja
  { id: "rosa-coral-reef", nombre: "Rosa Coral Reef", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/coral-reef.jpg", colores: ["Durazno"] },
  { id: "rosa-felicity", nombre: "Rosa Felicity", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/felicity.jpg", colores: ["Durazno"] },
  { id: "rosa-shimmer", nombre: "Rosa Shimmer", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/shimmer.jpg", colores: ["Durazno"] },
  { id: "rosa-moviestar", nombre: "Rosa Moviestar", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/moviestar.jpg", colores: ["Naranja"], destacado: true },
  { id: "rosa-nina", nombre: "Rosa Nina", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/nina.jpg", colores: ["Naranja"] },
  { id: "rosa-new-face", nombre: "Rosa New Face", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/new-face.jpg", colores: ["Naranja"] },

  // Roja
  { id: "rosa-freedom", nombre: "Rosa Freedom", categoria: "Rosas", grados: ["40", "50", "60", "70", "80", "90"], disponible: true, imagen: "/images/catalog/rosas/freedom.jpg", colores: ["Rojo"], destacado: true },

  // Rosado claro
  { id: "rosa-frutteto", nombre: "Rosa Frutteto", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/frutteto.jpg", colores: ["Rosado claro"] },
  { id: "rosa-high-divine", nombre: "Rosa High Divine", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/high-divine.jpg", colores: ["Rosado claro"] },
  { id: "rosa-nuage", nombre: "Rosa Nuage", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/nuage.jpg", colores: ["Rosado claro"] },
  { id: "rosa-pink-mondial", nombre: "Rosa Pink Mondial", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/pink-mondial.jpg", colores: ["Rosado claro"], destacado: true },

  // Rosado oscuro
  { id: "rosa-floyd", nombre: "Rosa Floyd", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/floyd.jpg", colores: ["Rosado oscuro"] },
  { id: "rosa-pink-love", nombre: "Rosa Pink Love", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/pink-love.jpg", colores: ["Rosado oscuro"] },
  { id: "rosa-rosita-vendela", nombre: "Rosa Rosita Vendela", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/rosita-vendela.jpg", colores: ["Rosado oscuro"] },
  { id: "rosa-satina", nombre: "Rosa Satina", categoria: "Rosas", grados: ["40", "50", "60"], disponible: true, imagen: "/images/catalog/rosas/satina.jpg", colores: ["Rosado oscuro"] },
  { id: "rosa-topaz", nombre: "Rosa Topaz", categoria: "Rosas", grados: ["40", "50", "60", "70"], disponible: true, imagen: "/images/catalog/rosas/topaz.jpg", colores: ["Rosado oscuro"] },

  // === FLORES ===
  { id: "alstroemeria", nombre: "Alstroemeria", categoria: "Flores", grados: ["Estándar"], precio: 0.28, disponible: true, imagen: "/images/catalog/alstroemeria.jpg", colores: ["Rojo", "Rosa", "Blanco", "Amarillo", "Morado", "Naranja","rosa fuerte"], destacado: true },
  { id: "clavel", nombre: "Clavel", categoria: "Flores", grados: ["fancy", "selec"], precio: 0.30, disponible: true, imagen: "/images/catalog/clavel.jpg", colores: ["Rojo", "Rosa", "Blanco", "Bicolor"] },
  { id: "hydrangea-mini-green", nombre: "Hydrangea Mini Green", categoria: "Flores", grados: ["Mini"], precio: 0.43, disponible: true, imagen: "/images/catalog/hydrangea.jpg", destacado: true },
  { id: "hydrangea-select", nombre: "Hydrangea", categoria: "Flores", grados: [ "fancy", "Select", "superselect", "jumbo"], precio: 0.46, disponible: true, imagen: "/images/catalog/hydrangea.jpg", colores: ["Blanca", "Azul", "Rosa"] },
  { id: "lirio", nombre: "Lirio", categoria: "Flores", grados: ["Estándar"], precio: 0.67, disponible: true, imagen: "/images/catalog/lirio.jpg", colores: ["Blanco", "Rosa", "Amarillo"] },
  { id: "gerbera", nombre: "Gerbera", categoria: "Flores", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/gerbera.jpg", colores: ["Rojo", "Rosa", "Amarillo", "Naranja", "Blanco"] },
  { id: "girasol", nombre: "Girasol", categoria: "Flores", grados: ["Estándar"], precio: 0.35, disponible: true, imagen: "/images/catalog/girasol.jpg", destacado: true },
  { id: "gypsophila", nombre: "Gypsophila", categoria: "Flores", grados: ["Estándar"], precio: 0.31, disponible: true, imagen: "/images/catalog/gypsophila.jpg" },
  { id: "snapdragon", nombre: "Snapdragon", categoria: "Flores", grados: ["Estándar"], precio: 0.40, disponible: true, imagen: "/images/catalog/snapdragon.jpg", colores: ["Rojo", "Rosa", "Blanco", "Amarillo"] },
  { id: "aster", nombre: "Aster", categoria: "Flores", grados: ["Estándar"], precio: 0.28, disponible: true, imagen: "/images/catalog/aster.jpg", colores: ["Morado", "Blanco", "Rosa"] },
  { id: "craspedia", nombre: "Craspedia", categoria: "Flores", grados: ["Estándar"], precio: 0.32, disponible: true, imagen: "/images/catalog/craspedia-stock.jpg" },
  { id: "eryngium", nombre: "Eryngium", categoria: "Flores", grados: ["55", "60", "70", "80"], precio: 0.30, disponible: true, imagen: "/images/catalog/eryngium.jpg" },
  { id: "hypericum", nombre: "Hypericum", categoria: "Flores", grados: ["Estándar"], precio: 0.32, disponible: true, imagen: "/images/catalog/hypericum.jpg", colores: ["Rojo", "Verde", "Blanco"] },
  { id: "agapanthus", nombre: "Agapanthus", categoria: "Flores", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/agapanthus.jpg", colores: ["Azul", "Blanco"] },
  { id: "callas", nombre: "Callas", categoria: "Flores", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/callas.jpg", colores: ["Blanco", "Amarillo", "Rosa"] },
  { id: "pompom-daisy", nombre: "Pompom Daisy", categoria: "Flores", grados: ["Estándar"], precio: 0.25, disponible: true, imagen: "/images/catalog/daisy.jpg", colores: ["Blanco", "Amarillo", "Rosa"] },
  { id: "pompom-button", nombre: "Pompom Button", categoria: "Flores", grados: ["Estándar"], precio: 0.25, disponible: true, imagen: "/images/catalog/pompom-button.jpg", colores: ["Blanco", "Amarillo", "Rosa"] },
  { id: "pompom-cushion", nombre: "Pompom Cushion", categoria: "Flores", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/pompom-cushion.jpg", colores: ["Blanco", "Amarillo", "Rosa"] },
  { id: "cremones", nombre: "Cremones", categoria: "Flores", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/cremones.jpg", colores: ["Verde", "Amarillo", "Blanco", "Rosa"] },
  // El Solidago se vende como flor y como follaje: sale en las dos categorías.
  { id: "solidago", nombre: "Solidago", categoria: "Flores", categorias: ["Follajes"], grados: ["Estándar"], disponible: true, imagen: "/images/catalog/solidago.jpg", colores: ["Amarillo"] },
  { id: "montecasino", nombre: "Montecasino", categoria: "Flores", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/montecasino.jpg", colores: ["Blanco", "Morado"] },
  { id: "statice", nombre: "Statice", categoria: "Flores", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/statice.jpg", colores: ["Morado", "Blanco", "Amarillo", "Rosa"] },
  { id: "delphinium", nombre: "Delphinium", categoria: "Flores", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/delphinium.jpg", colores: ["Azul", "Blanco", "Lila"] },
  { id: "mini-clavel", nombre: "Mini Clavel", categoria: "Flores", grados: ["fancy", "selec"], disponible: true, imagen: "/images/catalog/mini-clavel.jpg", colores: ["Rojo", "Rosa", "Blanco", "Bicolor"] },

  // === FOLLAJES === (incluye los antiguos "Verdes")
  { id: "eucalyptus-silver-dollar", nombre: "Eucalyptus Silver Dollar", categoria: "Follajes", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/eucalyptus-silver-dollar.jpg" },
  { id: "eucalyptus-baby", nombre: "Eucalyptus Baby Blue", categoria: "Follajes", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/eucalyptus-baby.jpg" },
  { id: "ruscus", nombre: "Ruscus", categoria: "Follajes", grados: ["50", "60", "70"], disponible: true, imagen: "/images/catalog/ruscus.png" },
  { id: "brillantina", nombre: "Brillantina", categoria: "Follajes", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/brillantina.png" },
  { id: "brillantina-variegada", nombre: "Brillantina Variegada", categoria: "Follajes", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/brillantina-variegada.jpg" },
  { id: "coculus", nombre: "Coculus", categoria: "Follajes", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/coculus.jpg" },
  { id: "helecho-cuero", nombre: "Helecho Cuero", categoria: "Follajes", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/helecho-cuero.jpg" },
  { id: "cinta-liriope", nombre: "Cinta Liriope", categoria: "Follajes", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/cinta-liriope.jpg" },
  { id: "palma", nombre: "Palma", categoria: "Follajes", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/palma.jpg" },
  { id: "pino", nombre: "Pino", categoria: "Follajes", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/pino.jpg" },

  // === TINTURADOS ===
  // Cada uno hereda los grados de su hermano sin tinturar. Las fotos van en
  // public/images/catalog/tinturados/ con el nombre del id (ej: ruscus-tinturado.jpg).
  { id: "ruscus-tinturado", nombre: "Ruscus Tinturado", categoria: "Tinturados", grados: ["50", "60", "70"], disponible: true, imagen: "/images/catalog/tinturados/ruscus-tinturado.jpg", colores: ["Rojo", "Azul", "Dorado", "Surtido"] },
  { id: "callas-tinturadas", nombre: "Callas Tinturadas", categoria: "Tinturados", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/tinturados/callas-tinturadas.jpg", colores: ["Rojo", "Azul", "Dorado", "Surtido"] },
  { id: "eryngium-tinturado", nombre: "Eryngium Tinturado", categoria: "Tinturados", grados: ["55", "60", "70", "80"], disponible: true, imagen: "/images/catalog/tinturados/eryngium-tinturado.jpg", colores: ["Rojo", "Azul", "Dorado", "Surtido"] },
  { id: "craspedia-tinturada", nombre: "Craspedia Tinturada", categoria: "Tinturados", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/tinturados/craspedia-tinturada.jpg", colores: ["Rojo", "Azul", "Dorado", "Surtido"] },
  { id: "gypsophila-tinturada", nombre: "Gypsophila Tinturada", categoria: "Tinturados", grados: ["Estándar"], disponible: true, imagen: "/images/catalog/tinturados/gypsophila-tinturada.jpg", colores: ["Rojo", "Azul", "Dorado", "Surtido"] },
];
