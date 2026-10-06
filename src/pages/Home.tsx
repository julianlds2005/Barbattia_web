import { lazy, Suspense } from 'react';
import { Hero } from '../sections/Hero';
import { HowItWorks } from '../sections/HowItWorks';

/*
 * Lo que esta "above the fold" (Hero + Como funciona) va en el bundle inicial.
 * El resto se divide en chunks que se cargan justo despues del primer render.
 * El bloque de descarga (que incluye la libreria de QR) va en su propio chunk.
 */
const ExperienceBlock = lazy(() => import('./blocks/ExperienceBlock'));
const EcosystemBlock = lazy(() => import('./blocks/EcosystemBlock'));
const ClosingBlock = lazy(() => import('./blocks/ClosingBlock'));

function Placeholder({ height }: { height: number }) {
  return <div style={{ minHeight: height }} aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      {/* Un solo limite de Suspense: los tres bloques aparecen juntos, asi un
          ancla (#preguntas) nunca apunta a una seccion que luego se desplaza. */}
      <Suspense fallback={<Placeholder height={6000} />}>
        <ExperienceBlock />
        <EcosystemBlock />
        <ClosingBlock />
      </Suspense>
    </>
  );
}
