import { useI18n } from '../i18n';
import { SECTION_IDS } from '../config/site';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Icon, type IconName } from '../components/Icon';

const CLIENT_ICONS: IconName[] = ['tag', 'shield', 'pin', 'award'];
const BARBER_ICONS: IconName[] = ['users', 'user', 'calendar', 'graduation'];

export function Benefits() {
  const { t } = useI18n();
  const groups = [
    { key: 'clients', data: t.benefits.clients, icons: CLIENT_ICONS },
    { key: 'barbers', data: t.benefits.barbers, icons: BARBER_ICONS },
  ] as const;

  return (
    <Section id={SECTION_IDS.benefits} eyebrow={t.benefits.eyebrow} title={t.benefits.title} className="benefits" center>
      <div className="benefits__grid">
        {groups.map((g) => (
          <Card key={g.key} as="article" glow className={`benefits__col benefits__col--${g.key}`}>
            <h3 className="benefits__title">{g.data.title}</h3>
            <ul className="benefits__list">
              {g.data.items.map((item, i) => (
                <li key={item.title}>
                  <span className="icon-chip" aria-hidden="true">
                    <Icon name={g.icons[i] ?? 'check'} />
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    <span className="muted">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
