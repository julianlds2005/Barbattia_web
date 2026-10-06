import { useI18n } from '../i18n';
import { SECTION_IDS } from '../config/site';
import { SAMPLE_BARBERS } from '../data/barbers';
import { Section } from '../components/Section';
import { Avatar } from '../components/Avatar';
import { Icon } from '../components/Icon';
import { MustacheRating } from '../components/MustacheRating';
import { Button } from '../components/Button';
import { fmt, formatNumber } from '../lib/format';

export function FeaturedBarbers() {
  const { t, lang } = useI18n();
  return (
    <Section
      id={SECTION_IDS.barbers}
      eyebrow={t.barbers.eyebrow}
      title={t.barbers.title}
      subtitle={t.barbers.subtitle}
      className="barbers"
      aside={
        <Button href={`#${SECTION_IDS.download}`} variant="secondary" iconEnd="arrowRight">
          {t.barbers.cta}
        </Button>
      }
    >
      <ul className="barbers__grid">
        {SAMPLE_BARBERS.map((b) => (
          <li key={b.id} className="barber card" data-reveal>
            <span className="badge badge--example">{t.common.example}</span>
            <div className="barber__top">
              <Avatar name={b.name} size={64} />
              {b.availableToday ? (
                <span className="barber__live">
                  <span className="ms-live" aria-hidden="true" /> {t.barbers.available}
                </span>
              ) : null}
            </div>
            <h3 className="barber__name">
              {b.name}
              <Icon name="verified" size={18} className="verified-icon" title={t.common.verified} />
            </h3>
            <p className="barber__meta">
              <Icon name="pin" size={14} /> {b.zone} · {fmt(t.common.km, { km: formatNumber(b.km, lang) })}
            </p>
            <div className="barber__rating">
              <MustacheRating value={b.rating} size={30} showValue />
              <small className="muted">{fmt(t.barbers.reviews, { n: b.reviews })}</small>
            </div>
            <ul className="barber__tags">
              {b.specialties.map((s) => (
                <li key={s} className="tag">
                  {t.barbers.specialties[s]}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="note">
        <Icon name="sparkle" size={14} /> {t.barbers.disclaimer}
      </p>
    </Section>
  );
}
