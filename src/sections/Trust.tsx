import { useI18n } from '../i18n';
import { SECTION_IDS } from '../config/site';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Icon, type IconName } from '../components/Icon';
import { cx } from '../lib/format';

type Status = 'verified' | 'review' | 'pending' | 'rejected';
const STATUS_ICON: Record<Status, IconName> = { verified: 'check', review: 'clock', pending: 'file', rejected: 'close' };
const ITEM_ICONS: IconName[] = ['pin', 'award', 'flag', 'headset', 'scale'];

function asStatus(s: string): Status {
  return s === 'verified' || s === 'review' || s === 'rejected' ? s : 'pending';
}

export function Trust() {
  const { t } = useI18n();
  const v = t.trust.verification;
  return (
    <Section id={SECTION_IDS.trust} eyebrow={t.trust.eyebrow} title={t.trust.title} subtitle={t.trust.subtitle} className="trust">
      <div className="trust__layout">
        <Card as="article" glow className="trust__verify">
          <span className="trust__shield" aria-hidden="true">
            <Icon name="shield" size={34} />
          </span>
          <h3>{v.title}</h3>
          <p className="muted">{v.text}</p>
          <div className="doc-list" aria-label={v.sample} role="group">
            <p className="doc-list__title">
              {v.sample}
              <span className="badge badge--example">{t.common.example}</span>
            </p>
            <ul>
              {v.docs.map((d) => {
                const st = asStatus(d.status);
                return (
                  <li key={d.name} className="doc">
                    <Icon name="file" size={18} />
                    <span className="doc__name">{d.name}</span>
                    <span className={cx('status', `status--${st}`)}>
                      <Icon name={STATUS_ICON[st]} size={14} />
                      {v.statuses[st]}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Card>
        <ul className="trust__items">
          {t.trust.items.map((item, i) => (
            <Card as="li" key={item.title} className="trust__item">
              <span className="icon-chip" aria-hidden="true">
                <Icon name={ITEM_ICONS[i] ?? 'shield'} />
              </span>
              <span>
                <h3>{item.title}</h3>
                <p className="muted">{item.text}</p>
              </span>
            </Card>
          ))}
        </ul>
      </div>
    </Section>
  );
}
