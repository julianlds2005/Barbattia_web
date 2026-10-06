import { useState } from 'react';
import { useI18n } from '../i18n';
import { SECTION_IDS } from '../config/site';
import { Section } from '../components/Section';
import { Icon } from '../components/Icon';
import { cx } from '../lib/format';

/** Acordeon accesible: boton con aria-expanded/aria-controls + region etiquetada. */
export function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState<string | null>('0-0');

  return (
    <Section id={SECTION_IDS.faq} eyebrow={t.faq.eyebrow} title={t.faq.title} className="faq">
      <div className="faq__groups">
        {t.faq.groups.map((g, gi) => (
          <div key={g.title} className="faq__group" data-reveal>
            <h3 className="faq__group-title">{g.title}</h3>
            <ul className="accordion">
              {g.items.map((item, ii) => {
                const id = `${gi}-${ii}`;
                const isOpen = open === id;
                return (
                  <li key={item.q} className={cx('accordion__item', isOpen && 'is-open')}>
                    <h4 className="accordion__heading">
                      <button
                        type="button"
                        id={`faq-q-${id}`}
                        className="accordion__trigger"
                        aria-expanded={isOpen}
                        aria-controls={`faq-a-${id}`}
                        onClick={() => setOpen(isOpen ? null : id)}
                      >
                        <span>{item.q}</span>
                        <Icon name="chevronDown" size={18} className="accordion__chev" />
                      </button>
                    </h4>
                    <div
                      id={`faq-a-${id}`}
                      role="region"
                      aria-labelledby={`faq-q-${id}`}
                      className="accordion__panel"
                      inert={!isOpen}
                    >
                      <div className="accordion__inner">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
