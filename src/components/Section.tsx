import type { ReactNode } from 'react';
import { cx } from '../lib/format';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Centra el encabezado. */
  center?: boolean;
  /** Contenido extra junto al encabezado (ej. tabs o CTA). */
  aside?: ReactNode;
}

/** Seccion de la landing con encabezado accesible (`aria-labelledby`). */
export function Section({ id, eyebrow, title, subtitle, children, className, center, aside }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={cx('section', className)}>
      <div className="container">
        <header className={cx('section__head', center && 'section__head--center')} data-reveal>
          <div>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 id={headingId} className="section__title">
              {title}
            </h2>
            {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
          </div>
          {aside ? <div className="section__aside">{aside}</div> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
