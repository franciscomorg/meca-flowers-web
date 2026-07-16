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
  instagram: "@mecaflowers",
  instagramUrl: "https://instagram.com/mecaflowers",

  ciudad: "Facatativá, Cundinamarca, Colombia",
};

// Construye un enlace de WhatsApp con mensaje pre-rellenado.
export function linkWhatsApp(mensaje: string): string {
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
