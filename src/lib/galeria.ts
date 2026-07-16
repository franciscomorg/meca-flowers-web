import fs from "node:fs";
import path from "node:path";
import { productos, portadas, type Categoria } from "@/data/productos";

/**
 * Detecta automáticamente las fotos extra de cada producto.
 *
 * Para agregar más fotos a un producto NO hay que tocar código: basta con dejar
 * los archivos en la misma carpeta de su foto principal, con el mismo nombre y
 * el sufijo _2, _3, _4...
 *
 *   craspedia.jpg     ← foto principal (la del campo `imagen`)
 *   craspedia_2.jpg   ← se agrega sola
 *   craspedia_3.jpg   ← se agrega sola
 *
 * Si un producto no tiene fotos extra, la tarjeta queda exactamente igual que antes.
 * Si la foto principal todavía no existe, el producto sale con un 🌸 en vez de una
 * imagen rota; apenas subas el archivo aparece sola.
 *
 * Esto corre en el servidor (build), así que en producción hay que volver a
 * desplegar para que aparezcan las fotos nuevas.
 */

const EXTENSIONES = ["jpg", "jpeg", "png", "webp", "avif"];

/** El nombre del archivo sin ninguna extensión: "girasol_2.jpg.jpeg" → "girasol_2" */
const sinExtension = (archivo: string) => archivo.split(".")[0];

/** La extensión real: "girasol_2.jpg.jpeg" → "jpeg" */
const extensionDe = (archivo: string) => archivo.split(".").pop()?.toLowerCase() ?? "";

const esImagen = (archivo: string) => EXTENSIONES.includes(extensionDe(archivo));

export function getGalerias(): Record<string, string[]> {
  const publicDir = path.join(process.cwd(), "public");
  const galerias: Record<string, string[]> = {};

  for (const producto of productos) {
    const carpeta = path.posix.dirname(producto.imagen); // /images/catalog/rosas
    const base = sinExtension(path.posix.basename(producto.imagen)); // freedom

    let archivos: string[] = [];
    try {
      archivos = fs.readdirSync(path.join(publicDir, carpeta));
    } catch {
      archivos = []; // carpeta inexistente: se queda solo con la foto principal
    }

    const imagenes = archivos.filter(esImagen);

    // La foto principal se busca por nombre, sin importar la extensión: si el campo
    // dice solidago.jpg y subes solidago.png, funciona igual.
    const principal = imagenes.find((archivo) => sinExtension(archivo) === base);

    const extras = imagenes
      .map((archivo) => {
        const m = sinExtension(archivo).match(/^(.+)_(\d+)$/);
        if (!m || m[1] !== base) return null;
        return { orden: parseInt(m[2], 10), url: `${carpeta}/${archivo}` };
      })
      .filter((x): x is { orden: number; url: string } => x !== null)
      .sort((a, b) => a.orden - b.orden)
      .map((x) => x.url);

    galerias[producto.id] = [
      ...(principal ? [`${carpeta}/${principal}`] : []), // si aún no la subes, queda el 🌸
      ...extras,
    ];
  }

  return galerias;
}

/** Portadas de categoría que ya tienen su archivo subido. */
export function getPortadas(): Partial<Record<Categoria, string>> {
  const publicDir = path.join(process.cwd(), "public");
  const encontradas: Partial<Record<Categoria, string>> = {};

  for (const [categoria, ruta] of Object.entries(portadas)) {
    if (ruta && fs.existsSync(path.join(publicDir, ruta))) {
      encontradas[categoria as Categoria] = ruta;
    }
  }

  return encontradas;
}
