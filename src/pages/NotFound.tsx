import { useI18n } from '../i18n';
import { ROUTES } from '../config/site';
import { Button } from '../components/Button';
import { MustacheIcon } from '../components/MustacheRating';

export default function NotFound() {
  const { t } = useI18n();
  return (
    <article className="page page--center container container--narrow" aria-labelledby="page-title">
      <MustacheIcon size={96} />
      <h1 id="page-title" className="page__title">
        {t.notFound.title}
      </h1>
      <p className="muted">{t.notFound.text}</p>
      <Button href={ROUTES.home}>{t.common.backHome}</Button>
    </article>
  );
}
