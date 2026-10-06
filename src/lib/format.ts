import type { Lang } from '../i18n';

/** Reemplaza `{clave}` por su valor. */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => (k in vars ? String(vars[k]) : `{${k}}`));
}

const locale = (lang: Lang) => (lang === 'es' ? 'es-CO' : 'en-US');

export function formatCOP(value: number, lang: Lang): string {
  return new Intl.NumberFormat(locale(lang), {
    style: 'currency',
    currency: 'COP',
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number, lang: Lang, digits = 1): string {
  return new Intl.NumberFormat(locale(lang), {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

/** Resuelve un texto que puede venir localizado ({es,en}) o plano (API). */
export function localize(text: string | { es: string; en: string } | undefined, lang: Lang): string {
  if (!text) return '';
  return typeof text === 'string' ? text : text[lang];
}
