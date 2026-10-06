import { useState, type CSSProperties } from 'react';
import { useI18n } from '../i18n';
import { SECTION_IDS } from '../config/site';
import { Section } from '../components/Section';
import { Tabs } from '../components/Tabs';
import { Icon, type IconName } from '../components/Icon';
import { fmt } from '../lib/format';

type Flow = 'client' | 'barber';

const ICONS: Record<Flow, IconName[]> = {
  client: ['scissors', 'pin', 'clock', 'tag', 'users', 'chat', 'sparkle', 'award'],
  barber: ['user', 'file', 'image', 'calendar', 'bolt', 'wallet'],
};

export function HowItWorks() {
  const { t } = useI18n();
  const [flow, setFlow] = useState<Flow>('client');
  const steps = flow === 'client' ? t.how.clientSteps : t.how.barberSteps;

  return (
    <Section
      id={SECTION_IDS.how}
      eyebrow={t.how.eyebrow}
      title={t.how.title}
      subtitle={t.how.subtitle}
      className="how"
      aside={
        <Tabs
          idPrefix="how"
          label={t.how.tabsLabel}
          items={[
            { id: 'client', label: t.how.tabs.client },
            { id: 'barber', label: t.how.tabs.barber },
          ]}
          value={flow}
          onChange={setFlow}
        />
      }
    >
      <div id="how-panel" role="tabpanel" aria-labelledby={`how-tab-${flow}`}>
        <ol className={`steps steps--${flow}`} key={flow}>
          {steps.map((s, i) => (
            <li key={s.title} className="step" style={{ '--i': i } as CSSProperties}>
              <span className="step__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="step__icon" aria-hidden="true">
                <Icon name={ICONS[flow][i] ?? 'sparkle'} size={22} />
              </span>
              <h3 className="step__title">
                <span className="sr-only">{fmt(t.how.step, { n: i + 1 })}: </span>
                {s.title}
              </h3>
              <p className="step__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
