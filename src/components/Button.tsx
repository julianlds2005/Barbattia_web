import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/format';
import { Icon, type IconName } from './Icon';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconEnd?: IconName;
  children: ReactNode;
  className?: string;
}

type AsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type AsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

/** Boton o enlace con el mismo estilo. Con `href` renderiza `<a>`. */
export function Button(props: AsLink | AsButton) {
  const { variant = 'primary', size = 'md', icon, iconEnd, children, className, ...rest } = props;
  const classes = cx('btn', `btn--${variant}`, `btn--${size}`, className);
  const content = (
    <>
      {icon ? <Icon name={icon} size={size === 'sm' ? 16 : 18} /> : null}
      <span>{children}</span>
      {iconEnd ? <Icon name={iconEnd} size={size === 'sm' ? 16 : 18} className="btn__end" /> : null}
    </>
  );

  if (typeof rest.href === 'string') {
    const anchor = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    const external = /^https?:\/\//.test(anchor.href ?? '');
    return (
      <a
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...anchor}
      >
        {content}
      </a>
    );
  }
  const button = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...button}>
      {content}
    </button>
  );
}
