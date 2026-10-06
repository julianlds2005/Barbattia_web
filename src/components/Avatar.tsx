import { cx } from '../lib/format';

/** Iniciales a partir de un nombre ("Andrés Mejía" -> "AM"). */
export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : (parts[0]?.[1] ?? '');
  return (first + last).toUpperCase();
}

/**
 * Paleta de fondos afines a la marca (cobre, bronce, espresso, vino, pizarra,
 * oliva). Todos oscuros para que las iniciales claras cumplan contraste AA.
 */
const PALETTE: ReadonlyArray<readonly [string, string]> = [
  ['#9a5f3c', '#4a2c1b'],
  ['#7d6136', '#3a2b16'],
  ['#5b3a2e', '#2a1a14'],
  ['#7a2f3a', '#3a141b'],
  ['#3d4a57', '#1b232b'],
  ['#55603a', '#262c18'],
  ['#8a4b2a', '#3d1f10'],
];

/** Indice estable derivado del nombre (hash simple). */
function hash(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h;
}

interface AvatarProps {
  name: string;
  size?: number;
  className?: string;
  /** Si es true se anuncia el nombre; por defecto es decorativo. */
  labelled?: boolean;
}

/** Avatar con iniciales y color dinamico (sin fotos de personas reales). */
export function Avatar({ name, size = 48, className, labelled }: AvatarProps) {
  const [from, to] = PALETTE[hash(name) % PALETTE.length] ?? ['#9a5f3c', '#4a2c1b'];
  return (
    <span
      className={cx('avatar', className)}
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.38),
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
      role={labelled ? 'img' : undefined}
      aria-label={labelled ? name : undefined}
      aria-hidden={labelled ? undefined : true}
    >
      {initials(name)}
    </span>
  );
}
