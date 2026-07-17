// =============================================================
// Configuración del sitio público — EDITA AQUÍ los datos de contacto.
// Un solo lugar para todo: WhatsApp, teléfonos, email, redes.
// =============================================================

export const CONTACTO = {
  // Número principal de WhatsApp (solo dígitos con indicativo país, sin + ni espacios).
  // Aquí llegan todos los botones "Escríbenos al WhatsApp" y "Cotizar".
  whatsapp: "573223039295",

  // Teléfonos que se muestran en la sección Contacto (texto libre).
  telefonos: [
    "+57 322 303 9295",
    "+57 311 204 2621",
    "+57 311 554 7944",
  ],

  email: "mecaflowersygreensas@gmail.com",

  // REDES SOCIALES — vacías mientras no existan las cuentas.
  // Cuando tengan Instagram, llena los dos campos y la tarjeta "Redes Sociales"
  // reaparece sola en Contacto y en el pie de página. Si los dejas vacíos, no se
  // muestra nada (en su lugar sale la ubicación).
  //   instagram: "@sucuenta",
  //   instagramUrl: "https://instagram.com/sucuenta",
  instagram: "",
  instagramUrl: "",

  ciudad: "Facatativá, Cundinamarca, Colombia",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Facatativ%C3%A1%2C+Cundinamarca%2C+Colombia",
};

/** Hay redes configuradas? Sirve para mostrar u ocultar todo lo relacionado. */
export const HAY_REDES = CONTACTO.instagram !== "" && CONTACTO.instagramUrl !== "";

// Construye un enlace de WhatsApp con mensaje pre-rellenado.
export function linkWhatsApp(mensaje: string): string {
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
