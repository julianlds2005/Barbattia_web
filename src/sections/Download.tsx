import { useI18n } from '../i18n';
import { SECTION_IDS } from '../config/site';
import { APP_STORE_URL, DOWNLOAD_PAGE_URL, GOOGLE_PLAY_URL } from '../config/links';
import { QRCode } from '../components/QRCode';
import { StoreBadge } from '../components/StoreBadge';
import { Icon } from '../components/Icon';
import { MustacheIcon } from '../components/MustacheRating';

export function Download() {
  const { t } = useI18n();
  const noStores = !APP_STORE_URL && !GOOGLE_PLAY_URL;
  return (
    <section id={SECTION_IDS.download} aria-labelledby="download-title" className="section download">
      <div className="container">
        <div className="download__panel" data-reveal>
          <div className="download__bg" aria-hidden="true" />
          <div className="download__copy">
            <p className="eyebrow">{t.download.eyebrow}</p>
            <h2 id="download-title" className="download__title">
              {t.download.title}
            </h2>
            <p className="download__subtitle">{t.download.subtitle}</p>
            <div className="download__stores">
              <StoreBadge store="apple" href={APP_STORE_URL} />
              <StoreBadge store="google" href={GOOGLE_PLAY_URL} />
            </div>
            {noStores ? <p className="download__soon">{t.download.comingSoonNote}</p> : null}
            <ul className="download__points">
              {t.download.points.map((p) => (
                <li key={p}>
                  <Icon name="check" size={16} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <figure className="download__qr">
            <div className="download__qr-frame">
              <span className="download__scanline" aria-hidden="true" />
              <QRCode value={DOWNLOAD_PAGE_URL} label={t.download.qrLabel} size={208} />
            </div>
            <figcaption>
              <MustacheIcon size={22} /> {t.download.scan}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
