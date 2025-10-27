import { Dropbox } from "dropbox";

const ACCESS_TOKEN = process.env.DROPBOX_ACCESS_TOKEN || "";

const dropboxClient = new Dropbox({
  accessToken: ACCESS_TOKEN,
  fetch
});


/**
 * Obtiene un enlace directo (temporal) a un archivo en Dropbox usando
 * filesGetTemporaryLink. Este enlace expira (por ejemplo 4 horas) y es
 * adecuado para mostrar imágenes en la web.
 *
 * Si la obtención del enlace temporal falla, intenta crear un enlace
 * compartido y transformarlo a una URL de acceso directo.
 *
 * @param path Ruta completa en Dropbox, p.ej. '/images/photo.jpg'
 * @returns URL directa a la imagen
 */
export async function getDropboxImageUrl(path: string): Promise<string> {
  if (!ACCESS_TOKEN) throw new Error("DROPBOX_ACCESS_TOKEN no está configurado en el entorno");
  if (!path) throw new Error("Se requiere una ruta de archivo de Dropbox");

  type TempRes = { result?: { link?: string }; link?: string };
  type SharedRes = { result?: { url?: string }; url?: string };

  try {
    // Intentar enlace temporal (directo)
    const tmp = await dropboxClient.filesGetTemporaryLink({ path });
    const tmpRes = tmp as unknown as TempRes;
    const link = tmpRes.result?.link ?? tmpRes.link;
    if (link) return link;
  } catch (err: unknown) {
    // continuar al fallback, registrar motivo (no lanzar)
    // registrar con console.warn es útil en desarrollo
    console.warn("filesGetTemporaryLink falló, intentando crear shared link", err);
  }

  try {
    // Fallback: crear un shared link (si ya existe, Dropbox devuelve el existente)
    const shared = await dropboxClient.sharingCreateSharedLinkWithSettings({ path });
    const sharedRes = shared as unknown as SharedRes;
    const url = sharedRes.result?.url ?? sharedRes.url;
    if (!url) throw new Error("No se obtuvo URL de shared link");

    // Transformar la URL compartida a una que permita servir la imagen directamente.
    let direct = url;
    if (direct.includes("dl=0")) direct = direct.replace("dl=0", "raw=1");
    else if (direct.includes("?")) direct = direct + "&raw=1";
    else direct = direct + "?raw=1";

    return direct;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(`No se pudo obtener la URL para '${path}': ${msg}`);
  }
}

/**
 * Dada una lista de rutas, devuelve un objeto donde la clave es la ruta
 * y el valor es la URL directa correspondiente.
 */
export async function getDropboxImageUrls(paths: string[]): Promise<Record<string, string>> {
  if (!Array.isArray(paths)) throw new Error("paths debe ser un arreglo de rutas");
  const results: Record<string, string> = {};

  // Ejecutar en paralelo con límites simples: Promise.all
  const promises = paths.map(async (p) => {
    try {
      const url = await getDropboxImageUrl(p);
      results[p] = url;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      // guardar mensaje de error en lugar de URL para depuración
      results[p] = `ERROR: ${msg}`;
    }
  });

  await Promise.all(promises);
  return results;
}

