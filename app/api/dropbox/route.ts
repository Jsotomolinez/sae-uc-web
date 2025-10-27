import { NextResponse } from 'next/server'
import { getDropboxImageUrl, getDropboxImageUrls } from '@/actions/dropbox'

/**
 * GET /api/dropbox?path=/index/principal.jpg
 * Devuelve la URL directa para una sola ruta.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const path = url.searchParams.get('path');
  if (!path) {
    return NextResponse.json({ error: 'Falta el parámetro query `path`' }, { status: 400 });
  }

  try {
    const imageUrl = await getDropboxImageUrl(path);
    return NextResponse.json({ path, url: imageUrl });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/**
 * POST /api/dropbox
 * body: { paths: string[] }
 * Devuelve un objeto con las rutas mapeadas a URLs o mensajes de error.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const paths = body?.paths;
    if (!Array.isArray(paths)) {
      return NextResponse.json({ error: 'El body debe contener `paths: string[]`' }, { status: 400 });
    }

    const results = await getDropboxImageUrls(paths);
    return NextResponse.json({ results });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
