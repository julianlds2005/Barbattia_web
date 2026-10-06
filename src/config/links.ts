/**
 * TODOS los enlaces externos del sitio viven aqui.
 *
 * Cada valor se lee de una variable de entorno de Vite (ver `web/.env.example`)
 * con un respaldo seguro. Regla de oro: si un enlace de tienda no esta
 * configurado su valor es `undefined` y la UI muestra "Proximamente"
 * (deshabilitado). Nunca inventamos un enlace.
 */

const env = import.meta.env;

/** Devuelve el valor recortado o `undefined` si esta vacio. */
function read(value: string | undefined): string | undefined {
  const v = value?.trim();
  return v ? v : undefined;
}

function stripSlash(url: string): string {
  return url.replace(/\/+$/, '');
}

/** URL publica del sitio (sin "/" final). Respaldo: el origen actual. */
export const SITE_URL: string = stripSlash(
  read(env.VITE_SITE_URL) ??
    (typeof window !== 'undefined' ? window.location.origin + import.meta.env.BASE_URL : ''),
);

/** Tiendas. `undefined` => boton "Proximamente". */
export const APP_STORE_URL: string | undefined = read(env.VITE_APP_STORE_URL);
export const GOOGLE_PLAY_URL: string | undefined = read(env.VITE_GOOGLE_PLAY_URL);

/**
 * Destino del codigo QR. Por defecto apunta a la pagina interna `#/descargar`,
 * que detecta iOS/Android y muestra la tienda correcta. Para cambiarlo define
 * `VITE_DOWNLOAD_PAGE_URL` (por ejemplo un enlace inteligente tipo onelink).
 */
export const DOWNLOAD_PAGE_URL: string = read(env.VITE_DOWNLOAD_PAGE_URL) ?? `${SITE_URL}/#/descargar`;

/**
 * Correo de contacto.
 * TODO(lanzamiento): definir VITE_CONTACT_EMAIL con el buzon real. El valor de
 * respaldo es un PLACEHOLDER y debe reemplazarse antes de publicar el sitio.
 */
export const CONTACT_EMAIL: string = read(env.VITE_CONTACT_EMAIL) ?? 'hola@barbattia.com';
export const CONTACT_EMAIL_IS_PLACEHOLDER: boolean = !read(env.VITE_CONTACT_EMAIL);

/** Numero de WhatsApp (solo digitos, formato internacional). `undefined` => no se muestra. */
export const WHATSAPP: string | undefined = read(env.VITE_WHATSAPP)?.replace(/\D/g, '') || undefined;

/** Endpoint opcional para el formulario de contacto (POST JSON). */
export const CONTACT_ENDPOINT: string | undefined = read(env.VITE_CONTACT_ENDPOINT);

/** Base de la API de Barbattia (backend/). */
const apiUrl = read(env.VITE_API_URL);
export const API_URL: string | undefined = apiUrl ? stripSlash(apiUrl) : undefined;

export type SocialId = 'instagram' | 'tiktok' | 'facebook' | 'youtube';

/** Redes sociales configuradas (las vacias no se muestran). */
export const SOCIAL_LINKS: ReadonlyArray<{ id: SocialId; label: string; url: string }> = (
  [
    { id: 'instagram', label: 'Instagram', url: read(env.VITE_INSTAGRAM_URL) },
    { id: 'tiktok', label: 'TikTok', url: read(env.VITE_TIKTOK_URL) },
    { id: 'facebook', label: 'Facebook', url: read(env.VITE_FACEBOOK_URL) },
    { id: 'youtube', label: 'YouTube', url: read(env.VITE_YOUTUBE_URL) },
  ] as const
).flatMap((s) => (s.url ? [{ id: s.id, label: s.label, url: s.url }] : []));

export function whatsappLink(text: string): string | undefined {
  return WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}` : undefined;
}
