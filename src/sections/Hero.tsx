import { useState } from 'react';
import { useI18n } from '../i18n';
import { SECTION_IDS } from '../config/site';
import { Button } from '../components/Button';
import { Tabs } from '../components/Tabs';
import { Icon, type IconName } from '../components/Icon';
import { MustacheIcon } from '../components/MustacheRating';
import { cx } from '../lib/format';

type Audience = 'client' | 'barber';

const CARD_ICONS: Record<Audience, IconName[]> = {
  client: ['search', 'tag', 'tag'],
  barber: ['bolt', 'chat', 'wallet'],
};

export function Hero() {
  const { t } = useI18n();
  const [audience, setAudience] = useState<Audience>('client');
  const copy = t.hero[audience];
  const cards = audience === 'client' ? t.hero.clientCards : t.hero.barberCards;

  return (
    <section id={SECTION_IDS.top} className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--a" />
        <span className="hero__orb hero__orb--b" />
        <span className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__slogan">
            <MustacheIcon size={28} />
            <span>{t.common.slogan}</span>
          </p>

          <Tabs
            idPrefix="hero"
            label={t.hero.audienceLabel}
            items={[
              { id: 'client', label: t.hero.client.tab },
              { id: 'barber', label: t.hero.barber.tab },
            ]}
            value={audience}
            onChange={setAudience}
            className="hero__tabs"
          />

          <div id="hero-panel" role="tabpanel" aria-labelledby={`hero-tab-${audience}`} className="hero__panel">
            {/* La key reinicia la animacion de entrada al cambiar de audiencia. */}
            <h1 id="hero-title" key={`h-${audience}`} className="hero__title swap-in">
              {copy.title}
            </h1>
            <p key={`p-${audience}`} className="hero__subtitle swap-in swap-in--late">
              {copy.subtitle}
            </p>
            <div className="hero__ctas">
              <Button href={`#${SECTION_IDS.download}`} size="lg" iconEnd="arrowRight">
                {copy.primary}
              </Button>
              <Button href={`#${SECTION_IDS.how}`} size="lg" variant="secondary">
                {copy.secondary}
              </Button>
            </div>
          </div>

          <ul className="hero__highlights">
            {t.hero.highlights.map((h) => (
              <li key={h}>
                <Icon name="check" size={16} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual: las tarjetas cuentan el flujo solicitud -> ofertas (o solicitud -> ganancias). */}
        <div className="hero__visual" role="img" aria-label={t.hero.visualLabel}>
          <div className="hero__ring" aria-hidden="true" />
          <div className="hero__badge" aria-hidden="true">
            <img src={`${import.meta.env.BASE_URL}brand/logo-512.jpg`} alt="" width={512} height={512} fetchPriority="high" />
          </div>
          <ul className="hero__cards" aria-hidden="true" key={audience}>
            {cards.map((c, i) => (
              <li key={c.title} className={cx('float-card', `float-card--${i}`)}>
                <span className="float-card__icon">
                  <Icon name={CARD_ICONS[audience][i] ?? 'sparkle'} size={18} />
                </span>
                <span className="float-card__body">
                  <strong>{c.title}</strong>
                  <small>{c.meta}</small>
                </span>
                <span className="float-card__value">{c.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
