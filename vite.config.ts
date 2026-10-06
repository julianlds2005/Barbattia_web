import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import es from './src/i18n/es';

/** Dominio usado cuando VITE_SITE_URL no esta definido. Cambialo con la variable. */
const PLACEHOLDER_DOMAIN = 'https://barbattia.example';

function escapeAttr(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * SEO en build:
 * - Inyecta titulo/descripcion (desde src/i18n/es.ts) y el dominio en index.html.
 * - Genera el JSON-LD FAQPage a partir de las FAQ en espanol (una sola fuente).
 * - Reemplaza el dominio placeholder en robots.txt y sitemap.xml del build.
 */
function seo(siteUrl: string): Plugin {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: es.meta.htmlLang,
    mainEntity: es.faq.groups.flatMap((g) =>
      g.items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
    ),
  };
  let outDir = 'dist';
  return {
    name: 'barbattia-seo',
    configResolved(cfg) {
      outDir = resolve(cfg.root, cfg.build.outDir);
    },
    transformIndexHtml(html) {
      return html
        .replaceAll('__SEO_TITLE__', escapeAttr(es.meta.title))
        .replaceAll('__SEO_DESCRIPTION__', escapeAttr(es.meta.description))
        .replaceAll('__SITE_URL__', siteUrl)
        .replace('__FAQ_JSONLD__', JSON.stringify(faq).replace(/</g, '\\u003c'));
    },
    closeBundle() {
      for (const file of ['robots.txt', 'sitemap.xml']) {
        const p = resolve(outDir, file);
        if (!existsSync(p)) continue;
        writeFileSync(p, readFileSync(p, 'utf8').replaceAll(PLACEHOLDER_DOMAIN, siteUrl));
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const siteUrl = (env.VITE_SITE_URL || PLACEHOLDER_DOMAIN).replace(/\/+$/, '');
  return {
    plugins: [react(), seo(siteUrl)],
    server: { port: 5173 },
    build: {
      target: 'es2022',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // React en su propio chunk (cambia poco: mejor cache entre despliegues).
            if (/node_modules[\/](react|react-dom|scheduler)[\/]/.test(id)) return 'react';
            if (/node_modules[\/](qrcode|dijkstrajs|pngjs)[\/]/.test(id)) return 'qrcode';
            return undefined;
          },
        },
      },
    },
  };
});
