import { useI18n } from '../i18n';
import { ROUTES, SECTION_IDS } from '../config/site';
import { CONTACT_EMAIL, SOCIAL_LINKS, whatsappLink } from '../config/links';
import { fmt } from '../lib/format';
import { Logo } from './Logo';
import { Icon } from './Icon';
import { LanguageSwitch } from './Header';

export function Footer() {
  const { t } = useI18n();
  const wa = whatsappLink(t.contact.whatsappText);
  const explore = [
    { id: SECTION_IDS.how, label: t.nav.how },
    { id: SECTION_IDS.services, label: t.nav.services },
    { id: SECTION_IDS.academy, label: t.nav.academy },
    { id: SECTION_IDS.shop, label: t.nav.shop },
    { id: SECTION_IDS.ai, label: t.nav.ai },
    { id: SECTION_IDS.faq, label: t.nav.faq },
  ];

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p className="footer__slogan">{t.common.slogan}</p>
          <p className="muted">{t.footer.tagline}</p>
          <LanguageSwitch />
        </div>

        <nav aria-label={t.footer.explore}>
          <h2 className="footer__title">{t.footer.explore}</h2>
          <ul>
            {explore.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href={`#${SECTION_IDS.download}`}>{t.common.downloadApp}</a>
            </li>
          </ul>
        </nav>

        <nav aria-label={t.footer.legal}>
          <h2 className="footer__title">{t.footer.legal}</h2>
          <ul>
            <li>
              <a href={ROUTES.terms}>{t.footer.terms}</a>
            </li>
            <li>
              <a href={ROUTES.privacy}>{t.footer.privacy}</a>
            </li>
            <li>
              <a href={`#${SECTION_IDS.contact}`}>{t.nav.contact}</a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">{t.footer.follow}</h2>
          <ul className="footer__social">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} aria-label={`${t.contact.emailUs}: ${CONTACT_EMAIL}`}>
                <Icon name="mail" />
              </a>
            </li>
            {wa ? (
              <li>
                <a href={wa} target="_blank" rel="noopener noreferrer" aria-label={t.contact.whatsapp}>
                  <Icon name="whatsapp" />
                </a>
              </li>
            ) : null}
            {SOCIAL_LINKS.map((s) => (
              <li key={s.id}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <Icon name={s.id} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>{fmt(t.footer.rights, { year: new Date().getFullYear() })}</p>
        <p className="footer__slogan-sm">{t.common.slogan}</p>
      </div>
    </footer>
  );
}
