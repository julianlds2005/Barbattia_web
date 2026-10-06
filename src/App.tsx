import { lazy, Suspense, useEffect } from 'react';
import { I18nProvider, useI18n } from './i18n';
import { ThemeProvider } from './hooks/useTheme';
import { useHashRoute, type Route } from './hooks/useHashRoute';
import { useReveal } from './hooks/useReveal';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';

const Legal = lazy(() => import('./pages/Legal'));
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * Al cambiar de ruta: las paginas internas empiezan arriba; en la landing, si
 * el hash es un ancla (`#preguntas`) esperamos a que la seccion diferida se
 * monte y hacemos scroll hasta ella.
 */
function useRouteScroll(route: Route) {
  useEffect(() => {
    const hash = window.location.hash;
    if (route !== 'home') {
      window.scrollTo(0, 0);
      return;
    }
    if (!hash || hash.startsWith('#/')) return;
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let raf = 0;
    const tick = () => {
      const el = document.getElementById(id);
      if (el) {
        // Salto instantaneo: un scroll suave seria interrumpido por la carga diferida.
        el.scrollIntoView({ behavior: 'instant' });
        // Las fuentes web pueden cambiar alturas al cargar: reajustamos una vez.
        document.fonts?.ready.then(() => el.scrollIntoView({ behavior: 'instant' })).catch(() => undefined);
      } else if (tries++ < 180) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [route]);
}

function Shell() {
  const { t } = useI18n();
  const route = useHashRoute();
  useReveal();
  useRouteScroll(route);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.common.skipToContent}
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        {route === 'home' ? (
          <Home />
        ) : (
          <Suspense fallback={<div className="page" aria-busy="true" />}>
            {route === 'terms' ? (
              <Legal kind="terms" />
            ) : route === 'privacy' ? (
              <Legal kind="privacy" />
            ) : route === 'download' ? (
              <DownloadPage />
            ) : (
              <NotFound />
            )}
          </Suspense>
        )}
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <Shell />
      </ThemeProvider>
    </I18nProvider>
  );
}
