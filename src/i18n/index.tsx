import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import es, { type Messages } from './es';
import en from './en';
import { STORAGE_KEYS } from '../config/site';
import { safeStorage } from '../lib/storage';

export type Lang = 'es' | 'en';
export const LANGS: readonly Lang[] = ['es', 'en'];
const DICTS: Record<Lang, Messages> = { es, en };

interface I18nValue {
  lang: Lang;
  t: Messages;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nValue | null>(null);

function isLang(v: unknown): v is Lang {
  return v === 'es' || v === 'en';
}

/** Preferencia guardada > idioma del navegador > espanol. */
function initialLang(): Lang {
  const saved = safeStorage.get(STORAGE_KEYS.lang);
  if (isLang(saved)) return saved;
  const nav = typeof navigator !== 'undefined' ? navigator.language : 'es';
  return nav.toLowerCase().startsWith('en') ? 'en' : 'es';
}

function setMeta(selector: string, content: string) {
  document.head.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const t = DICTS[lang];

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    safeStorage.set(STORAGE_KEYS.lang, next);
  }, []);

  // Sincroniza <html lang>, titulo, descripcion y Open Graph con el idioma.
  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
    setMeta('meta[name="description"]', t.meta.description);
    setMeta('meta[property="og:title"]', t.meta.title);
    setMeta('meta[property="og:description"]', t.meta.description);
    setMeta('meta[property="og:locale"]', t.meta.ogLocale);
    setMeta('meta[name="twitter:title"]', t.meta.title);
    setMeta('meta[name="twitter:description"]', t.meta.description);

    // El JSON-LD de FAQ se genera en build (vite.config.ts) en espanol; aqui se
    // mantiene sincronizado con el idioma activo.
    const ld = document.getElementById('ld-faq');
    if (ld) {
      ld.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: t.meta.htmlLang,
        mainEntity: t.faq.groups.flatMap((g) =>
          g.items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
        ),
      });
    }
  }, [t]);

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n debe usarse dentro de <I18nProvider>');
  return ctx;
}
