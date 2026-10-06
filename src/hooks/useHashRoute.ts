import { useEffect, useState } from 'react';

export type Route = 'home' | 'terms' | 'privacy' | 'download' | 'notFound';

/**
 * Router minimo basado en hash: `#/terminos`, `#/privacidad`, `#/descargar`.
 * Funciona en cualquier hosting estatico sin reglas de reescritura.
 * Cualquier otro hash (`#como-funciona`, vacio...) es un ancla de la landing.
 */
function parse(hash: string): Route {
  if (!hash.startsWith('#/')) return 'home';
  const path = (hash.slice(2).split(/[?#]/)[0] ?? '').replace(/\/$/, '');
  switch (path) {
    case '':
      return 'home';
    case 'terminos':
    case 'terms':
      return 'terms';
    case 'privacidad':
    case 'privacy':
      return 'privacy';
    case 'descargar':
    case 'download':
      return 'download';
    default:
      return 'notFound';
  }
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash));
  useEffect(() => {
    const onHash = () => setRoute(parse(window.location.hash));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}
