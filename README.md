# Barbattia Web — sitio público (marketing)

Sitio web público de **Barbattia** ("Tu estilo, donde estés"): landing de una sola
página con secciones ancladas + páginas internas (términos, privacidad, descarga).

Es un proyecto **totalmente independiente** de la app móvil y su backend, que
viven en otro repositorio (`C:UsersYerelynDocumentsGitHubBARBATTIA`).
Tiene su propio `package.json`, `node_modules` y `tsconfig`; no comparte código
ni dependencias con ellos. Solo consume la API pública si se configura
`VITE_API_URL`.

> **Nada de este sitio está desplegado ni publicado.** Solo se ha ejecutado en
> local (`npm run dev` / `npm run build`). No hay configuración de Vercel,
> Netlify, GitHub Pages ni similares.

## Stack

- Vite 7 + React 19 + TypeScript (modo `strict`).
- CSS plano con variables (`src/styles/`), sin frameworks de UI.
- Única dependencia de runtime además de React: [`qrcode`](https://www.npmjs.com/package/qrcode)
  (genera la matriz del QR; el SVG lo dibujamos nosotros).
- Animaciones con CSS + View Transitions API (cambio de tema). Sin librerías de animación.

## Cómo ejecutarlo

```bash
cd web
npm install
npm run dev        # http://localhost:5173
```

| Script              | Qué hace                                                    |
| ------------------- | ----------------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo con recarga en caliente.             |
| `npm run build`     | `tsc -b` (typecheck) + `vite build` → carpeta `dist/`.      |
| `npm run preview`   | Sirve `dist/` localmente para revisar el build.             |
| `npm run typecheck` | Solo verificación de tipos.                                 |

`dist/` y `node_modules/` están en `.gitignore`.

## Configuración: enlaces y variables de entorno

**Todos los enlaces externos están centralizados en `src/config/links.ts`.**
Cada uno lee una variable de entorno opcional de Vite y tiene un respaldo seguro.
Copia `.env.example` como `.env.local` y rellena lo que tengas:

| Variable                 | Uso                                                                                  | Si está vacía                                   |
| ------------------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------- |
| `VITE_SITE_URL`          | Dominio público (sin `/` final). Canonical, Open Graph, JSON-LD, sitemap, robots, QR. | `https://barbattia.example` en el HTML; origen actual en runtime |
| `VITE_APP_STORE_URL`     | Botón App Store.                                                                     | Botón deshabilitado **"Próximamente"**          |
| `VITE_GOOGLE_PLAY_URL`   | Botón Google Play.                                                                   | Botón deshabilitado **"Próximamente"**          |
| `VITE_DOWNLOAD_PAGE_URL` | Destino del código QR.                                                               | `<sitio>/#/descargar`                           |
| `VITE_CONTACT_EMAIL`     | Correo de contacto (mailto y footer).                                                | `hola@barbattia.com` (**placeholder**)          |
| `VITE_WHATSAPP`          | Número en formato internacional, solo dígitos (ej. `573001234567`).                   | El canal se muestra como "Próximamente"         |
| `VITE_CONTACT_ENDPOINT`  | URL que recibe el formulario por `POST` JSON.                                        | El formulario abre un `mailto:`                 |
| `VITE_INSTAGRAM_URL` … `VITE_YOUTUBE_URL` | Redes sociales.                                                     | No se muestran                                  |
| `VITE_API_URL`           | Base de la API de Barbattia para la tienda (`GET /api/products`).                    | Se usan los datos locales de muestra            |

Las variables `VITE_*` se incrustan en el build: cambiarlas requiere volver a
ejecutar `npm run build`.

### Botones de tienda

Nunca se renderiza un enlace falso. Sin URL configurada, `StoreBadge` muestra un
`<button disabled aria-disabled="true">` con la etiqueta "Próximamente / Coming soon".
En cuanto definas `VITE_APP_STORE_URL` / `VITE_GOOGLE_PLAY_URL` se convierten en
enlaces reales (abren en pestaña nueva).

### Cambiar el destino del código QR

El QR codifica `DOWNLOAD_PAGE_URL` (`src/config/links.ts`):

1. **Por defecto** apunta a `<VITE_SITE_URL>/#/descargar`, una página interna que
   detecta iOS/Android y muestra primero la tienda correcta (no redirige sola).
2. Para usar otro destino (por ejemplo un enlace inteligente de tu proveedor de
   deep links), define `VITE_DOWNLOAD_PAGE_URL=https://...` y recompila.

El QR se genera como SVG con corrección de errores alta (nivel H) para poder
mostrar el logo en el centro. Escanéalo siempre tras cambiar el destino.

### Dominio en SEO, `robots.txt` y `sitemap.xml`

`index.html`, `public/robots.txt` y `public/sitemap.xml` usan el placeholder
`https://barbattia.example`. El plugin `barbattia-seo` de `vite.config.ts`
lo reemplaza por `VITE_SITE_URL` en el build. Basta con definir esa variable.

## Estructura

```
web/
├── index.html              # SEO: meta, OG/Twitter, canonical, hreflang, JSON-LD, tema sin parpadeo
├── vite.config.ts          # Plugin SEO (título/FAQ JSON-LD desde es.ts, dominio) + chunks
├── public/                 # favicon, logos, og-image, robots.txt, sitemap.xml
└── src/
    ├── main.tsx / App.tsx  # Providers (i18n, tema), skip-link, router por hash
    ├── config/
    │   ├── links.ts        # ← TODOS los enlaces externos y variables de entorno
    │   └── site.ts         # ids de secciones, rutas y claves de localStorage
    ├── i18n/
    │   ├── es.ts           # Textos en español (fuente de verdad del tipo `Messages`)
    │   ├── en.ts           # Inglés, tipado como `Messages` (falta una clave = error de TS)
    │   └── index.tsx       # I18nProvider + useI18n(); sincroniza <html lang>, title, meta
    ├── hooks/              # useTheme (View Transitions), useReducedMotion, useInView, useReveal, useHashRoute
    ├── components/         # Button, Section, Card, PhoneFrame, Avatar, MustacheRating, QRCode,
    │                       # StoreBadge, Tabs, Icon, Logo, Header, Footer
    ├── sections/           # Hero, HowItWorks, AppShowcase, Benefits, Services, FeaturedBarbers,
    │                       # Academy, Shop, AIAssistant, Trust, Download, FAQ, Contact
    ├── pages/              # Home (+ blocks/ cargados en diferido), Legal, DownloadPage, NotFound
    ├── data/               # products.ts (interfaz Product), barbers.ts, services.ts
    ├── services/catalog.ts # Catálogo de la tienda (hoy local; listo para la API)
    ├── lib/                # format (fmt, COP, cx, localize), storage (localStorage seguro)
    └── styles/             # tokens.css (paleta/tema), base, components, sections, showcase
```

### Rutas

Router mínimo por hash (funciona en cualquier hosting estático sin reglas de reescritura):

- `#/` (o cualquier ancla como `#preguntas`) → landing
- `#/terminos`, `#/privacidad` → páginas legales (BORRADOR)
- `#/descargar` → página de descarga (destino del QR)

### Idiomas

Español (`es-CO`, por defecto) e inglés. Todo el texto visible vive en
`src/i18n/es.ts` y `src/i18n/en.ts`. La elección se guarda en `localStorage`
(`barbattia.lang`); si no hay preferencia se usa `navigator.language`.
Al cambiar de idioma se actualizan `<html lang>`, el título, la meta descripción,
Open Graph y el JSON-LD de las FAQ.

### Tema

Oscuro / claro mediante variables CSS en `:root[data-theme]`. Por defecto sigue
`prefers-color-scheme`; la elección se guarda en `localStorage` (`barbattia.theme`).
El cambio se anima con una revelación circular desde el botón (View Transitions API);
sin soporte o con `prefers-reduced-motion` se usa una transición de color simple.

## Qué está listo y qué es placeholder

**Listo**

- Landing completa y responsive (320 px → escritorio, sin scroll horizontal), ES/EN, tema oscuro/claro.
- Demo interactiva del teléfono (5 pantallas en HTML/CSS): pestañas, flechas de teclado,
  anterior/siguiente, pausa, swipe, toque para avanzar; se pausa con hover/foco de teclado,
  fuera de pantalla y con `prefers-reduced-motion`.
- Demo del Asistente Barber con indicador de escritura y botón de repetir.
- FAQ accesible, menú móvil (Escape cierra), skip-link, foco visible, landmarks, un solo `h1`.
- SEO: meta, OG/Twitter, canonical, hreflang, JSON-LD (Organization, MobileApplication, FAQPage),
  `robots.txt`, `sitemap.xml`.
- Código dividido en chunks: React, QR y las secciones bajo el primer pantallazo se cargan aparte.

**Placeholder / pendiente**

- URLs de App Store / Google Play → hoy "Próximamente".
- Dominio (`https://barbattia.example`) y correo de contacto (`hola@barbattia.com`) son placeholders.
- WhatsApp y redes sociales: no configurados (no se muestran o salen como "Próximamente").
- **Términos y Privacidad**: textos de BORRADOR, marcados como tales en la página.
- Barberos destacados, cursos de la Academia y conversación de IA: **contenido de ejemplo**,
  marcado visualmente como "Ejemplo". Personas ficticias con avatares de iniciales.
- **Tienda**: catálogo local de muestra (`src/data/products.ts`). No es un e-commerce:
  los botones dicen "Ver en la app". Para conectarla a la API, define `VITE_API_URL`;
  `src/services/catalog.ts` (ver el `TODO(api)`) consulta `GET /api/products`, mapea cada
  fila con `fromApi()` y, si falla, vuelve a los datos locales. Revisa el mapeo de categorías.
- Pagos en línea: el sitio indica que "se habilitarán próximamente"; no se anuncia ninguna integración.
- Formulario de contacto: sin `VITE_CONTACT_ENDPOINT` abre el cliente de correo (`mailto:`) y lo
  dice explícitamente; no simula un envío exitoso.
- Las fuentes (Fraunces + Inter) se cargan desde Google Fonts; si prefieres no depender de un
  tercero, descárgalas a `public/fonts` y reemplaza el `<link>` de `index.html`.
