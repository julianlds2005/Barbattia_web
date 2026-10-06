import { useMemo } from 'react';
import QR from 'qrcode';

interface QRCodeProps {
  value: string;
  label: string;
  size?: number;
  /** Muestra el logo al centro (usa correccion de errores alta). */
  withLogo?: boolean;
}

/**
 * Codigo QR renderizado como SVG propio (nitido, tematizable, sin canvas).
 * El destino se configura en `src/config/links.ts` (DOWNLOAD_PAGE_URL).
 */
export function QRCode({ value, label, size = 200, withLogo = true }: QRCodeProps) {
  const { path, count } = useMemo(() => {
    const qr = QR.create(value, { errorCorrectionLevel: withLogo ? 'H' : 'M' });
    const n = qr.modules.size;
    const data = qr.modules.data;
    // Zona reservada para el logo (~22% central) cuando se muestra.
    const hole = withLogo ? Math.ceil(n * 0.22) : 0;
    const start = Math.floor((n - hole) / 2);
    let d = '';
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        const inHole = hole > 0 && x >= start && x < start + hole && y >= start && y < start + hole;
        if (data[y * n + x] && !inHole) d += `M${x} ${y}h1v1h-1z`;
      }
    }
    return { path: d, count: n };
  }, [value, withLogo]);

  const pad = 2;
  const total = count + pad * 2;
  const logo = Math.ceil(count * 0.22);

  return (
    <svg
      className="qr"
      width={size}
      height={size}
      viewBox={`${-pad} ${-pad} ${total} ${total}`}
      role="img"
      aria-label={label}
      shapeRendering="crispEdges"
    >
      <title>{label}</title>
      <rect x={-pad} y={-pad} width={total} height={total} rx="2" className="qr__bg" />
      <path d={path} className="qr__fg" />
      {withLogo ? (
        <image
          href={`${import.meta.env.BASE_URL}brand/logo-160.jpg`}
          x={(count - logo) / 2 + 0.5}
          y={(count - logo) / 2 + 0.5}
          width={logo - 1}
          height={logo - 1}
          preserveAspectRatio="xMidYMid slice"
        />
      ) : null}
    </svg>
  );
}
