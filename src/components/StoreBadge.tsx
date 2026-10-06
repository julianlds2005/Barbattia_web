import { useI18n } from '../i18n';
import { cx } from '../lib/format';
import { Icon } from './Icon';

interface StoreBadgeProps {
  store: 'apple' | 'google';
  /** URL de la tienda. Si es `undefined` el boton se muestra como "Proximamente". */
  href: string | undefined;
  highlight?: boolean;
}

/**
 * Boton de tienda. Sin URL configurada NUNCA renderiza un enlace: muestra un
 * boton deshabilitado (aria-disabled) con "Proximamente".
 */
export function StoreBadge({ store, href, highlight }: StoreBadgeProps) {
  const { t } = useI18n();
  const name = store === 'apple' ? 'App Store' : 'Google Play';
  const top = href ? (store === 'apple' ? t.download.appStoreTop : t.download.googlePlayTop) : t.download.comingSoonTop;
  const inner = (
    <>
      <Icon name={store === 'apple' ? 'apple' : 'googlePlay'} size={26} />
      <span className="store__text">
        <span className="store__top">{top}</span>
        <span className="store__name">{name}</span>
      </span>
      {!href ? <span className="store__soon">{t.common.comingSoon}</span> : null}
    </>
  );

  if (!href) {
    return (
      <button
        type="button"
        className={cx('store', 'store--disabled')}
        disabled
        aria-disabled="true"
        aria-label={`${name} — ${t.common.comingSoon}`}
      >
        {inner}
      </button>
    );
  }
  return (
    <a className={cx('store', highlight && 'store--highlight')} href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  );
}
