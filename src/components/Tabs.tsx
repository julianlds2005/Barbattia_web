import { useRef, type KeyboardEvent } from 'react';
import { cx } from '../lib/format';

export interface TabItem<K extends string> {
  id: K;
  label: string;
}

interface TabsProps<K extends string> {
  items: ReadonlyArray<TabItem<K>>;
  value: K;
  onChange: (id: K) => void;
  label: string;
  /** Prefijo para ids de tab/panel (aria-controls). */
  idPrefix: string;
  className?: string;
}

/**
 * Tablist accesible (patron WAI-ARIA): flechas, Inicio y Fin mueven el foco y
 * activan la pestana. El panel debe usar `id={`${idPrefix}-panel`}`.
 */
export function Tabs<K extends string>({ items, value, onChange, label, idPrefix, className }: TabsProps<K>) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const idx = items.findIndex((i) => i.id === value);
    let next = idx;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (idx + 1) % items.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (idx - 1 + items.length) % items.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = items.length - 1;
    else return;
    e.preventDefault();
    const item = items[next];
    if (item) {
      onChange(item.id);
      refs.current[next]?.focus();
    }
  };

  return (
    <div role="tablist" aria-label={label} className={cx('tabs', className)} onKeyDown={onKeyDown}>
      {items.map((item, i) => {
        const selected = item.id === value;
        return (
          <button
            key={item.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`${idPrefix}-tab-${item.id}`}
            aria-selected={selected}
            aria-controls={`${idPrefix}-panel`}
            tabIndex={selected ? 0 : -1}
            className={cx('tabs__tab', selected && 'is-active')}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
