import type { CSSProperties } from 'react';
import { useI18n } from '../i18n';
import { SECTION_IDS } from '../config/site';
import { SERVICES } from '../data/services';
import { Section } from '../components/Section';
import { Icon } from '../components/Icon';

export function Services() {
  const { t } = useI18n();
  return (
    <Section id={SECTION_IDS.services} eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} className="services">
      <ul className="services__grid">
        {SERVICES.map((s, i) => {
          const item = t.services.items[s.id];
          return (
            <li key={s.id} className="service" data-reveal style={{ '--i': i } as CSSProperties}>
              <span className="service__icon" aria-hidden="true">
                <Icon name={s.icon} size={26} />
              </span>
              <h3 className="service__name">{item.name}</h3>
              <p className="service__text">{item.text}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
