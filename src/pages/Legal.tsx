import { useI18n } from '../i18n';
import { ROUTES } from '../config/site';
import { Icon } from '../components/Icon';

/** Paginas legales provisionales (BORRADOR claramente marcado). */
export default function Legal({ kind }: { kind: 'terms' | 'privacy' }) {
  const { t } = useI18n();
  const doc = t.legal[kind];
  return (
    <article className="page container container--narrow" aria-labelledby="page-title">
      <a href={ROUTES.home} className="page__back">
        <Icon name="chevronLeft" size={18} /> {t.common.backHome}
      </a>
      <p>
        <span className="badge badge--draft">{t.legal.draft}</span>
      </p>
      <h1 id="page-title" className="page__title">
        {doc.title}
      </h1>
      <p className="page__notice" role="note">
        {t.legal.draftNotice}
      </p>
      {doc.sections.map((s) => (
        <section key={s.h} className="page__section">
          <h2>{s.h}</h2>
          <p>{s.p}</p>
        </section>
      ))}
    </article>
  );
}
