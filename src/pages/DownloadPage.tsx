import { useI18n } from '../i18n';
import { ROUTES } from '../config/site';
import { APP_STORE_URL, DOWNLOAD_PAGE_URL, GOOGLE_PLAY_URL } from '../config/links';
import { StoreBadge } from '../components/StoreBadge';
import { QRCode } from '../components/QRCode';
import { Icon } from '../components/Icon';

type Platform = 'ios' | 'android' | 'other';

function detect(): Platform {
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'other';
}

/**
 * Destino por defecto del QR (`#/descargar`). Detecta la plataforma y muestra
 * primero la tienda correspondiente. No redirige automaticamente.
 */
export default function DownloadPage() {
  const { t } = useI18n();
  const platform = detect();
  const msg =
    platform === 'ios' ? t.downloadPage.detectedIos : platform === 'android' ? t.downloadPage.detectedAndroid : t.downloadPage.detectedOther;
  const apple = <StoreBadge key="apple" store="apple" href={APP_STORE_URL} highlight={platform === 'ios'} />;
  const google = <StoreBadge key="google" store="google" href={GOOGLE_PLAY_URL} highlight={platform === 'android'} />;

  return (
    <article className="page page--download container container--narrow" aria-labelledby="page-title">
      <a href={ROUTES.home} className="page__back">
        <Icon name="chevronLeft" size={18} /> {t.common.backHome}
      </a>
      <img src={`${import.meta.env.BASE_URL}brand/logo-512.jpg`} alt={t.common.logoAlt} width={140} height={140} className="page__logo" />
      <h1 id="page-title" className="page__title">
        {t.downloadPage.title}
      </h1>
      <p className="muted">{t.downloadPage.subtitle}</p>
      <p>{msg}</p>
      <div className="download__stores download__stores--center">{platform === 'android' ? [google, apple] : [apple, google]}</div>
      {!APP_STORE_URL && !GOOGLE_PLAY_URL ? <p className="download__soon">{t.download.comingSoonNote}</p> : null}
      {platform === 'other' ? (
        <div className="download__qr-frame download__qr-frame--page">
          <QRCode value={DOWNLOAD_PAGE_URL} label={t.download.qrLabel} size={180} />
        </div>
      ) : null}
    </article>
  );
}
