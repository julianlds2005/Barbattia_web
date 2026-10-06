import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { useI18n, LANGS } from '../i18n';
import { useTheme } from '../hooks/useTheme';
import { SECTION_IDS } from '../config/site';
import { cx } from '../lib/format';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { Button } from './Button';

export function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  return (
    <div role="group" aria-label={t.common.language} className={cx('lang', className)}>
      <Icon name="globe" size={16} className="lang__icon" />
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          className={cx('lang__btn', lang === l && 'is-active')}
          aria-pressed={lang === l}
          lang={l}
          title={t.common.languageNames[l]}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
          <span className="sr-only"> — {t.common.languageNames[l]}</span>
        </button>
      ))}
    </div>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    toggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  };
  const label = theme === 'dark' ? t.common.switchToLight : t.common.switchToDark;
  return (
    <button type="button" className="icon-btn theme-toggle" onClick={onClick} aria-label={label} title={label}>
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} />
    </button>
  );
}

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  // Todas las secciones van en el menu movil; en escritorio solo las principales.
  const links: Array<{ id: string; label: string; desktop?: boolean }> = [
    { id: SECTION_IDS.how, label: t.nav.how, desktop: true },
    { id: SECTION_IDS.app, label: t.nav.app, desktop: true },
    { id: SECTION_IDS.services, label: t.nav.services, desktop: true },
    { id: SECTION_IDS.academy, label: t.nav.academy, desktop: true },
    { id: SECTION_IDS.shop, label: t.nav.shop, desktop: true },
    { id: SECTION_IDS.ai, label: t.nav.ai, desktop: true },
    { id: SECTION_IDS.trust, label: t.nav.trust },
    { id: SECTION_IDS.faq, label: t.nav.faq, desktop: true },
    { id: SECTION_IDS.contact, label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Menu movil: Escape cierra, bloquea scroll del fondo y enfoca el primer enlace.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 1180) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    document.body.classList.add('menu-open');
    panel.current?.querySelector<HTMLElement>('a, button')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  return (
    <header className={cx('header', scrolled && 'is-scrolled', open && 'is-open')}>
      <div className="container header__inner">
        <a href={`#${SECTION_IDS.top}`} className="header__brand" aria-label={`${t.common.brand} — ${t.common.backHome}`}>
          <Logo />
        </a>

        <nav aria-label={t.nav.label} className="header__nav">
          <ul>
            {links.filter((l) => l.desktop).map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <LanguageSwitch className="hide-sm" />
          <ThemeToggle />
          <Button href={`#${SECTION_IDS.download}`} size="sm" className="hide-xs">
            {t.common.downloadApp}
          </Button>
          <button
            ref={menuBtn}
            type="button"
            className="icon-btn header__menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={panel} className="mobile-menu" hidden={!open}>
        <nav aria-label={t.nav.label}>
          <ul>
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={() => setOpen(false)}>
                  {l.label}
                  <Icon name="arrowRight" size={18} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__footer">
          <LanguageSwitch />
          <Button href={`#${SECTION_IDS.download}`} onClick={() => setOpen(false)}>
            {t.common.downloadApp}
          </Button>
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}

/** Barra fina de progreso de lectura: orienta en una landing larga. */
function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={bar} className="scroll-progress" aria-hidden="true" />;
}
