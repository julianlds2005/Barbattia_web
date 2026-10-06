import { useI18n } from '../i18n';
import { cx } from '../lib/format';

/** Logo oficial (imagen) + nombre de la marca. */
export function Logo({ className, compact }: { className?: string; compact?: boolean }) {
  const { t } = useI18n();
  return (
    <span className={cx('logo', className)}>
      <img
        src={`${import.meta.env.BASE_URL}brand/logo-160.jpg`}
        alt={compact ? t.common.logoAlt : ''}
        width={40}
        height={40}
        className="logo__img"
        decoding="async"
      />
      {compact ? null : <span className="logo__word">{t.common.brand}</span>}
    </span>
  );
}
