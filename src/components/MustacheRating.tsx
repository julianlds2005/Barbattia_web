import { useId } from 'react';
import { useI18n } from '../i18n';
import { fmt, formatNumber, cx } from '../lib/format';

/** Silueta de mostacho tipo "handlebar" (viewBox 0 3 64 18). */
export const MUSTACHE_PATH =
  'M32 11c-3-5-9-7-14-5-4 2-6 6-10 6-3 0-5-2-6-4 0 6 5 11 12 11 7 0 12-4 18-6 6 2 11 6 18 6 7 0 12-5 12-11-1 2-3 4-6 4-4 0-6-4-10-6-5-2-11 0-14 5Z';

export function MustacheIcon({ size = 24, fill = 1, className }: { size?: number; fill?: number; className?: string }) {
  // useId puede incluir caracteres no validos en url(#...): se sanea.
  const id = 'm' + useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const pct = Math.max(0, Math.min(1, fill));
  return (
    <svg width={size} height={(size * 18) / 64} viewBox="0 3 64 18" className={cx('mustache', className)} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={`${id}-clip`}>
          <rect x="0" y="0" width={64 * pct} height="28" />
        </clipPath>
      </defs>
      <path d={MUSTACHE_PATH} className="mustache__base" />
      <path d={MUSTACHE_PATH} className="mustache__fill" clipPath={`url(#${id}-clip)`} />
    </svg>
  );
}

interface MustacheRatingProps {
  value: number;
  size?: number;
  showValue?: boolean;
  className?: string;
  /** Anima el llenado secuencial (se usa en la pantalla "Servicio completado"). */
  animate?: boolean;
}

/** Calificacion de 1 a 5 mostachos (en vez de estrellas). */
export function MustacheRating({ value, size = 20, showValue, className, animate }: MustacheRatingProps) {
  const { t, lang } = useI18n();
  const label = fmt(t.common.ratingLabel, { value: formatNumber(value, lang) });
  return (
    <span className={cx('rating', animate && 'rating--animate', className)} role="img" aria-label={label}>
      {[0, 1, 2, 3, 4].map((i) => (
        <MustacheIcon key={i} size={size} fill={value - i} className={animate ? `rating__m rating__m--${i}` : undefined} />
      ))}
      {showValue ? (
        <span className="rating__value" aria-hidden="true">
          {formatNumber(value, lang)}
        </span>
      ) : null}
    </span>
  );
}
