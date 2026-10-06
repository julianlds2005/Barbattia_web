import type { ReactNode } from 'react';
import { cx } from '../lib/format';

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  /** Hora mostrada en la barra de estado (decorativa). */
  time?: string;
}

/** Telefono dibujado 100% en CSS. El contenido de la pantalla es HTML real. */
export function PhoneFrame({ children, className, time = '9:41' }: PhoneFrameProps) {
  return (
    <div className={cx('phone', className)}>
      <div className="phone__buttons" aria-hidden="true" />
      <div className="phone__screen">
        <div className="phone__status" aria-hidden="true">
          <span>{time}</span>
          <span className="phone__island" />
          <span className="phone__icons">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="phone__content">{children}</div>
        <div className="phone__home" aria-hidden="true" />
      </div>
    </div>
  );
}
