/** Anclas de las secciones de la landing (ids del DOM). */
export const SECTION_IDS = {
  top: 'inicio',
  how: 'como-funciona',
  app: 'la-app',
  benefits: 'beneficios',
  services: 'servicios',
  barbers: 'barberos',
  academy: 'academia',
  shop: 'tienda',
  ai: 'asistente',
  trust: 'seguridad',
  download: 'descargar',
  faq: 'preguntas',
  contact: 'contacto',
} as const;

/** Rutas internas (hash routing: funciona en cualquier hosting estatico). */
export const ROUTES = {
  home: '#/',
  terms: '#/terminos',
  privacy: '#/privacidad',
  download: '#/descargar',
} as const;

export const STORAGE_KEYS = {
  lang: 'barbattia.lang',
  theme: 'barbattia.theme',
} as const;
