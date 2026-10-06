import { useCallback, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react';
import { useI18n } from '../i18n';
import { SECTION_IDS } from '../config/site';
import { Section } from '../components/Section';
import { PhoneFrame } from '../components/PhoneFrame';
import { Avatar } from '../components/Avatar';
import { Icon, type IconName } from '../components/Icon';
import { MustacheRating } from '../components/MustacheRating';
import { useInView } from '../hooks/useInView';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { cx, fmt, formatCOP } from '../lib/format';
import type { Lang } from '../i18n';
import type { Messages } from '../i18n/es';

const SCREENS = ['search', 'map', 'profile', 'chat', 'done'] as const;
type ScreenId = (typeof SCREENS)[number];
const ICONS: Record<ScreenId, IconName> = { search: 'search', map: 'pin', profile: 'user', chat: 'chat', done: 'check' };
/** Duracion de cada pantalla en autoplay (ms). La barra de progreso la usa. */
const DURATION = 5200;
const SWIPE = 40;

type S = Messages['showcase']['screens'];

export function AppShowcase() {
  const { t, lang } = useI18n();
  const reduced = useReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.35 });
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const pointer = useRef<{ x: number; y: number } | null>(null);

  // El autoplay solo corre si: no hay reduced motion, la seccion esta visible y
  // el usuario no esta interactuando (hover/foco) ni lo pauso.
  const playing = !reduced && inView && !hovered && !focused && !userPaused;
  const total = SCREENS.length;
  const current = SCREENS[index] ?? 'search';

  const go = useCallback((i: number) => setIndex(((i % total) + total) % total), [total]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    pointer.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    const start = pointer.current;
    pointer.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) > SWIPE && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    } else if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      next(); // Tocar cualquier elemento de la pantalla avanza.
    }
  };
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (e.target === e.currentTarget) {
        e.preventDefault();
        next();
      }
    }
  };

  const screenName = t.showcase.screens[current].tab;

  return (
    <Section
      id={SECTION_IDS.app}
      eyebrow={t.showcase.eyebrow}
      title={t.showcase.title}
      subtitle={t.showcase.subtitle}
      className="showcase"
      center
    >
      <div className="showcase__layout" ref={ref}>
        <div role="tablist" aria-label={t.showcase.controlsLabel} aria-orientation="vertical" className="showcase__tabs" data-reveal>
          {SCREENS.map((id, i) => {
            const active = i === index;
            return (
              <button
                key={id}
                role="tab"
                type="button"
                id={`showcase-tab-${id}`}
                aria-selected={active}
                aria-controls="showcase-panel"
                tabIndex={active ? 0 : -1}
                className={cx('showcase__tab', active && 'is-active')}
                onClick={() => go(i)}
                onKeyDown={(e) => {
                  let n = -1;
                  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = (i + 1) % total;
                  else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = (i - 1 + total) % total;
                  else if (e.key === 'Home') n = 0;
                  else if (e.key === 'End') n = total - 1;
                  if (n < 0) return;
                  e.preventDefault();
                  go(n);
                  document.getElementById(`showcase-tab-${SCREENS[n]}`)?.focus();
                }}
              >
                <span className="showcase__tab-icon" aria-hidden="true">
                  <Icon name={ICONS[id]} size={18} />
                </span>
                <span className="showcase__tab-text">
                  <strong>
                    <span className="showcase__tab-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {t.showcase.screens[id].tab}
                  </strong>
                  <small>{t.showcase.screens[id].description}</small>
                </span>
                {active && !reduced ? (
                  // La barra se pausa (animation-play-state) en vez de reiniciarse,
                  // y al terminar avanza a la siguiente pantalla.
                  <span
                    key={index}
                    className={cx('showcase__progress', playing && 'is-playing')}
                    style={{ '--dur': `${DURATION}ms` } as CSSProperties}
                    onAnimationEnd={() => {
                      if (playing) next();
                    }}
                    aria-hidden="true"
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="showcase__stage" role="group" aria-label={t.showcase.region}>
          <div className="showcase__glow" aria-hidden="true" />
          <div
            id="showcase-panel"
            role="tabpanel"
            aria-roledescription="carousel"
            aria-describedby="showcase-status"
            aria-labelledby={`showcase-tab-${current}`}
            tabIndex={0}
            className="showcase__device"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            // Solo el foco por teclado pausa: un toque no deja el autoplay detenido.
            onFocus={(e) => setFocused(e.currentTarget.matches(':focus-visible'))}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
            }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => (pointer.current = null)}
            onKeyDown={onKeyDown}
          >
            <PhoneFrame>
              {SCREENS.map((id, i) => (
                <div
                  key={id}
                  className={cx('screen', `screen--${id}`, i === index && 'is-active', i < index && 'is-before')}
                  aria-hidden={i !== index}
                  inert={i !== index}
                >
                  <ScreenContent id={id} s={t.showcase.screens} lang={lang} />
                </div>
              ))}
              <span className="phone__hint" aria-hidden="true">
                {t.showcase.tapHint}
              </span>
            </PhoneFrame>
          </div>

          <div className="showcase__controls">
            <button type="button" className="icon-btn" onClick={prev} aria-label={t.showcase.prev}>
              <Icon name="chevronLeft" />
            </button>
            <div className="showcase__dots" aria-hidden="true">
              {SCREENS.map((id, i) => (
                <span key={id} className={cx('dot', i === index && 'is-active')} />
              ))}
            </div>
            {!reduced ? (
              <button
                type="button"
                className="icon-btn"
                onClick={() => setUserPaused((v) => !v)}
                aria-label={userPaused ? t.showcase.play : t.showcase.pause}
                aria-pressed={userPaused}
              >
                <Icon name={userPaused ? 'play' : 'pause'} />
              </button>
            ) : null}
            <button type="button" className="icon-btn" onClick={next} aria-label={t.showcase.next}>
              <Icon name="chevronRight" />
            </button>
          </div>

          <p id="showcase-status" className="sr-only" aria-live={playing ? 'off' : 'polite'} aria-atomic="true">
            {fmt(t.showcase.status, { current: index + 1, total, name: screenName })}
          </p>
        </div>
      </div>
    </Section>
  );
}

function ScreenContent({ id, s, lang }: { id: ScreenId; s: S; lang: Lang }) {
  switch (id) {
    case 'search':
      return <SearchScreen s={s.search} lang={lang} />;
    case 'map':
      return <MapScreen s={s.map} lang={lang} />;
    case 'profile':
      return <ProfileScreen s={s.profile} />;
    case 'chat':
      return <ChatScreen s={s.chat} name={s.profile.name} />;
    case 'done':
      return <DoneScreen s={s.done} name={s.profile.name} />;
  }
}

function SearchScreen({ s, lang }: { s: S['search']; lang: Lang }) {
  return (
    <div className="ms ms-search">
      <p className="ms__title">{s.title}</p>
      <div className="ms-search__chips">
        {s.chips.map((c, i) => (
          <span key={c} className={cx('ms-chip', i === 2 && 'ms-chip--pick')}>
            {c}
          </span>
        ))}
      </div>
      <div className="ms-field">
        <Icon name="pin" size={16} />
        <span>
          <small>{s.whereLabel}</small>
          {s.where}
        </span>
      </div>
      <div className="ms-field">
        <Icon name="clock" size={16} />
        <span>
          <small>{s.whenLabel}</small>
          {s.when}
        </span>
      </div>
      <div className="ms-price">
        <small>{s.priceLabel}</small>
        <strong>{formatCOP(35000, lang)}</strong>
        <span className="ms-price__track">
          <span className="ms-price__fill" />
          <span className="ms-price__thumb" />
        </span>
        <small className="ms-price__hint">{s.priceHint}</small>
      </div>
      <span className="ms-btn">{s.cta}</span>
    </div>
  );
}

function MapScreen({ s, lang }: { s: S['map']; lang: Lang }) {
  const pins = [
    { x: 24, y: 30 },
    { x: 70, y: 22 },
    { x: 62, y: 58 },
  ];
  return (
    <div className="ms ms-map">
      <div className="ms-map__canvas">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="ms-map__svg" aria-hidden="true">
          <path d="M-5 70 Q30 55 50 62 T105 48" className="map-river" />
          <rect x="8" y="48" width="22" height="14" rx="3" className="map-park" />
          <rect x="70" y="72" width="20" height="16" rx="3" className="map-park" />
          <path d="M0 40 H100 M0 80 H100 M35 0 V100 M78 0 V100 M0 15 L100 35" className="map-road" />
          <path d="M15 0 V100 M55 0 V100 M0 60 H100" className="map-road map-road--thin" />
        </svg>
        <span className="ms-map__me" style={{ left: '45%', top: '44%' }} />
        {pins.map((p, i) => {
          const offer = s.offers[i];
          return offer ? (
            <span key={offer.name} className={`ms-map__pin ms-map__pin--${i}`} style={{ left: `${p.x}%`, top: `${p.y}%` }}>
              <Avatar name={offer.name} size={26} />
            </span>
          ) : null;
        })}
        <span className="ms-map__label">{s.title}</span>
      </div>
      <div className="ms-sheet">
        <p className="ms-sheet__title">
          <span className="ms-live" /> {s.found}
        </p>
        <ul>
          {s.offers.map((o, i) => (
            <li key={o.name} className={`ms-offer ms-offer--${i}`}>
              <Avatar name={o.name} size={28} />
              <span className="ms-offer__body">
                <strong>{o.name}</strong>
                <small>
                  {o.km} km · <MustacheRating value={o.rating} size={15} />
                </small>
              </span>
              <span className="ms-offer__price">{formatCOP(o.price, lang)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProfileScreen({ s }: { s: S['profile'] }) {
  return (
    <div className="ms ms-profile">
      <div className="ms-profile__cover" />
      <div className="ms-profile__head">
        <Avatar name={s.name} size={64} className="ms-profile__avatar" />
        <p className="ms-profile__name">
          {s.name}
          <Icon name="verified" size={16} className="ms-verified" />
        </p>
        <small>{s.role}</small>
        <MustacheRating value={4.9} size={22} showValue />
      </div>
      <ul className="ms-profile__stats">
        {s.stats.map((st) => (
          <li key={st.label}>
            <strong>{st.value}</strong>
            <small>{st.label}</small>
          </li>
        ))}
      </ul>
      <p className="ms__label">{s.portfolio}</p>
      <div className="ms-profile__grid">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={`ms-tile ms-tile--${i}`}>
            <Icon name={i % 3 === 0 ? 'scissors' : i % 3 === 1 ? 'beard' : 'design'} size={16} />
          </span>
        ))}
      </div>
      <span className="ms-btn">{s.cta}</span>
    </div>
  );
}

function ChatScreen({ s, name }: { s: S['chat']; name: string }) {
  return (
    <div className="ms ms-chat">
      <div className="ms-chat__head">
        <Avatar name={name} size={32} />
        <span>
          <strong>{name}</strong>
          <small>
            <span className="ms-live" /> {s.status}
          </small>
        </span>
      </div>
      <div className="ms-chat__body">
        {s.messages.map((m, i) => (
          <p key={i} className={cx('ms-bubble', m.from === 'me' ? 'ms-bubble--me' : 'ms-bubble--them', `ms-bubble--${i}`)}>
            {m.text}
          </p>
        ))}
        <span className="ms-typing" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="ms-chat__input">
        <span>{s.placeholder}</span>
        <Icon name="send" size={16} />
      </div>
    </div>
  );
}

function DoneScreen({ s, name }: { s: S['done']; name: string }) {
  return (
    <div className="ms ms-done">
      <svg className="ms-done__check" viewBox="0 0 52 52" aria-hidden="true">
        <circle cx="26" cy="26" r="24" />
        <path d="M15 27l7 7 15-16" />
      </svg>
      <p className="ms__title">{s.title}</p>
      <Avatar name={name} size={44} />
      <small>{s.subtitle}</small>
      <MustacheRating value={5} size={40} animate />
      <small className="ms-done__thanks">{s.thanks}</small>
      <span className="ms-btn">{s.cta}</span>
    </div>
  );
}
