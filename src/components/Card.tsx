import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/format';

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'div' | 'article' | 'li';
  glow?: boolean;
  children: ReactNode;
}

/** Tarjeta "glass" con borde cobre sutil y halo opcional que sigue al puntero. */
export function Card({ as: Tag = 'div', glow, className, children, ...rest }: CardProps) {
  return (
    <Tag className={cx('card', glow && 'card--glow', className)} data-reveal {...rest}>
      {children}
    </Tag>
  );
}
