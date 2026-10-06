/**
 * Set de iconos SVG propio (trazo 1.8, 24x24). Sin dependencias externas.
 * Decorativos por defecto (aria-hidden); pasa `title` para que sean anunciados.
 */
const PATHS = {
  scissors:
    'M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.1 7.9 20 20M8.1 16.1 20 4M14.5 12l-1.6-1.6',
  beard: 'M4 6c0 7 3 13 8 13s8-6 8-13M8 11c1.3.9 2.6 1.3 4 1.3s2.7-.4 4-1.3M9.5 15.5h5',
  combo: 'M5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7 7.5 13 13M7 16.5 17 6.5M14 11c0 5 2 9 4 9s3-3 3-8',
  design: 'M3 21l3.5-1 11-11a2.1 2.1 0 0 0-3-3l-11 11L3 21ZM13.5 7.5l3 3M15 21h6',
  color: 'M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z M9 15a3 3 0 0 0 3 3',
  drop: 'M12 3c3 4 5 6.8 5 9.5a5 5 0 0 1-10 0C7 9.8 9 7 12 3ZM4 20h16',
  kid: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 21v-1a7 7 0 0 1 14 0v1M10 7h.01M14 7h.01',
  home: 'M3 11 12 4l9 7M5 10v10h14V10M10 20v-5h4v5',
  sparkle: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z',
  check: 'M5 12.5 10 17l9-10',
  shield: 'M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6L12 3Zm-3.5 9 2.5 2.5 4.5-5',
  pin: 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4.5l3 2',
  chat: 'M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1 1 21 12ZM8.5 12h.01M12 12h.01M15.5 12h.01',
  user: 'M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-8 9a8 8 0 0 1 16 0',
  file: 'M14 3H6v18h12V7l-4-4Zm0 0v4h4M9 13h6M9 17h4',
  image: 'M4 4h16v16H4V4Zm0 12 4.5-4.5L13 16m-2-2 2.5-2.5L20 18M15.5 8.5h.01',
  calendar: 'M4 6h16v14H4V6Zm0 4h16M8 3v4M16 3v4M8 14h3',
  wallet: 'M4 7h15a1 1 0 0 1 1 1v11H4V7Zm0 0 12-3v3M16 13.5h.01',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm9 3-4-4',
  arrowRight: 'M5 12h14m-6-6 6 6-6 6',
  chevronLeft: 'M15 5l-7 7 7 7',
  chevronRight: 'M9 5l7 7-7 7',
  chevronDown: 'M5 9l7 7 7-7',
  pause: 'M8 5v14M16 5v14',
  play: 'M7 4.5v15L19.5 12 7 4.5Z',
  sun: 'M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
  moon: 'M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z',
  mail: 'M3 6h18v12H3V6Zm0 0 9 7 9-7',
  whatsapp: 'M4 20l1.3-4A8 8 0 1 1 8.4 19L4 20Zm5-11c0 3.3 2.7 6 6 6l1.2-1.5-2-1-.9.8a4.5 4.5 0 0 1-2.6-2.6l.8-.9-1-2L9 9Z',
  instagram: 'M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm8 7.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17 7h.01',
  tiktok: 'M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2.2 4.4 5 4.6',
  facebook: 'M14 21v-8h3l.5-3.5H14V7.8c0-1 .3-1.8 1.8-1.8H18V3a24 24 0 0 0-2.7-.2C12.7 2.8 11 4.4 11 7.3v2.2H8V13h3v8h3Z',
  youtube: 'M3 8.5c0-1.7 1.2-3 2.9-3.1C8 5.2 10 5 12 5s4 .2 6.1.4c1.7.1 2.9 1.4 2.9 3.1v7c0 1.7-1.2 3-2.9 3.1-2.1.2-4.1.4-6.1.4s-4-.2-6.1-.4C4.2 18.5 3 17.2 3 15.5v-7ZM10 9v6l5-3-5-3Z',
  apple: 'M16 3c0 1.6-1.2 3.2-3 3.3-.2-1.6 1.2-3.2 3-3.3ZM19.5 16.5c-.6 1.5-1.8 3.6-3.3 3.6-1.3 0-1.7-.8-3.2-.8s-2 .8-3.2.8c-1.5 0-3.4-3-3.9-5.4-.7-3.4.9-6.6 3.7-6.6 1.3 0 2.2.8 3.3.8 1 0 2.2-.9 3.6-.8 1.1 0 2.4.6 3.2 1.7-2.7 1.6-2.3 5.6-.2 6.7Z',
  googlePlay: 'M5 3.5v17l9.5-8.5L5 3.5Zm0 0 12 6.8-2.5 1.7M5 20.5l12-6.8-2.5-1.7M17 10.3l2.6 1.5-2.6 1.9',
  lock: 'M6 11h12v10H6V11Zm2.5 0V8a3.5 3.5 0 0 1 7 0v3M12 15v2',
  flag: 'M5 21V4m0 0h11l-2 4 2 4H5',
  headset: 'M4 15v-3a8 8 0 0 1 16 0v3M4 15a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2v1Zm16 0a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2v1Zm-3 2c0 2-2 3-5 3',
  scale: 'M12 4v16M7 20h10M5 8h14M5 8l-2.5 6a3 3 0 0 0 5 0L5 8Zm14 0-2.5 6a3 3 0 0 0 5 0L19 8ZM12 4l-1 1.5h2L12 4Z',
  users: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 9a6 6 0 0 1 12 0M16 4.5a3.5 3.5 0 0 1 0 6.5M18 14a6 6 0 0 1 3 6',
  bolt: 'M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z',
  graduation: 'M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Zm4 2.2v4.6c1.5 1.6 3.4 2.4 5.5 2.4s4-.8 5.5-2.4v-4.6M21.5 9v5',
  award: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-3.5-1L7 21l5-2.5 5 2.5-1.5-7',
  bag: 'M5 8h14l-1 13H6L5 8Zm4 0V6a3 3 0 0 1 6 0v2',
  bot: 'M5 9h14v10H5V9Zm7-5v5M9 14h.01M15 14h.01M2.5 13v3M21.5 13v3M12 2.5h.01',
  replay: 'M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4',
  send: 'M4 12 20 4l-4 16-4-6.5L4 12Zm8 1.5L20 4',
  tag: 'M3 12V4h8l10 10-8 8L3 12Zm5-4.5h.01',
  clipper: 'M8 3h8v4H8V3Zm-1 4h10l-1.5 14h-7L7 7Zm2 4h6M10 3v4M14 3v4',
  razor: 'M3 15 15 3l3 3-9 9H3v0Zm6 0 7 6M15 17.5l2.5-2.5',
  bottle: 'M10 3h4v3l2 3v12H8V9l2-3V3Zm-2 9h8',
  jar: 'M6 8h12v12H6V8Zm-1-4h14v4H5V4Zm4 9h6',
  chair: 'M7 4h10v7H7V4Zm-2 7h14v4H5v-4Zm2 4v6m10-6v6M9 21h6',
  toolbox: 'M3 9h18v11H3V9Zm6 0V6h6v3M3 14h18M10 14v2h4v-2',
  comb: 'M4 8h16v4H4V8Zm1 4v5M8 12v5M11 12v5M14 12v5M17 12v5',
  verified: 'M12 2.8l2.3 1.7 2.8-.2.9 2.7 2.3 1.6-.9 2.7.9 2.7-2.3 1.6-.9 2.7-2.8-.2L12 21.2l-2.3-1.7-2.8.2-.9-2.7-2.3-1.6.9-2.7-.9-2.7L6 7l.9-2.7 2.8.2L12 2.8Zm-3.2 9.4 2.2 2.2 4.4-4.6',
  external: 'M14 4h6v6M20 4l-9 9M18 14v6H4V6h6',
} as const;

export type IconName = keyof typeof PATHS;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  title?: string;
  strokeWidth?: number;
}

export function Icon({ name, size = 20, className, title, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path d={PATHS[name]} />
    </svg>
  );
}
