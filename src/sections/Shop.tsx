import { useEffect, useState } from 'react';
import { useI18n } from '../i18n';
import { SECTION_IDS } from '../config/site';
import { PRODUCT_CATEGORIES, type Product, type ProductCategory } from '../data/products';
import { getProducts } from '../services/catalog';
import { Section } from '../components/Section';
import { Icon, type IconName } from '../components/Icon';
import { Button } from '../components/Button';
import { cx, formatCOP, localize } from '../lib/format';

const CATEGORY_ICON: Record<ProductCategory, IconName> = {
  maquinas: 'clipper',
  tijeras: 'scissors',
  navajas: 'razor',
  capilares: 'drop',
  ceras: 'jar',
  shampoos: 'bottle',
  accesorios: 'comb',
  mobiliario: 'chair',
  equipamiento: 'toolbox',
};

type Filter = ProductCategory | 'all';
type State = { status: 'loading' } | { status: 'ready'; products: Product[] } | { status: 'error' };


export function Shop() {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<Filter>('all');
  const [state, setState] = useState<State>({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const ctrl = new AbortController();
    setState({ status: 'loading' });
    getProducts({ category: filter === 'all' ? undefined : filter, signal: ctrl.signal })
      .then((products) => setState({ status: 'ready', products }))
      .catch((err: unknown) => {
        if ((err as Error).name !== 'AbortError') setState({ status: 'error' });
      });
    return () => ctrl.abort();
  }, [filter, attempt]);

  const filters: Filter[] = ['all', ...PRODUCT_CATEGORIES];

  return (
    <Section id={SECTION_IDS.shop} eyebrow={t.shop.eyebrow} title={t.shop.title} subtitle={t.shop.subtitle} className="shop">
      <div className="shop__filters" role="group" aria-label={t.shop.filterLabel} data-reveal>
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={cx('chip chip--btn', filter === f && 'is-active')}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f !== 'all' ? <Icon name={CATEGORY_ICON[f]} size={16} /> : null}
            {f === 'all' ? t.shop.all : t.shop.categories[f]}
          </button>
        ))}
      </div>

      <div aria-live="polite" aria-busy={state.status === 'loading'}>
        {state.status === 'loading' ? (
          <ul className="products" aria-label={t.common.loading}>
            {[0, 1, 2, 3].map((i) => (
              <li key={i} className="product product--skeleton" aria-hidden="true" />
            ))}
          </ul>
        ) : state.status === 'error' ? (
          <div className="shop__empty">
            <p>{t.shop.error}</p>
            <Button variant="secondary" onClick={() => setAttempt((n) => n + 1)}>
              {t.common.retry}
            </Button>
          </div>
        ) : state.products.length === 0 ? (
          <p className="shop__empty">{t.shop.empty}</p>
        ) : (
          <ul className="products">
            {state.products.map((p) => (
              <li key={p.id} className="product">
                <div className={`product__media product__media--${p.category}`}>
                  {p.imageUrl ? (
                    <img src={p.imageUrl} alt={localize(p.name, lang)} loading="lazy" decoding="async" />
                  ) : (
                    <Icon name={CATEGORY_ICON[p.category]} size={44} strokeWidth={1.4} />
                  )}
                  {p.featured ? <span className="badge">{t.shop.featured}</span> : null}
                </div>
                <div className="product__body">
                  <small className="product__cat">{t.shop.categories[p.category]}</small>
                  <h3 className="product__name">{localize(p.name, lang)}</h3>
                  {p.description ? <p className="product__desc">{localize(p.description, lang)}</p> : null}
                  <div className="product__foot">
                    <strong className="product__price">{formatCOP(p.price, lang)}</strong>
                    <Button href={`#${SECTION_IDS.download}`} size="sm" variant="secondary" aria-label={`${t.common.viewInApp}: ${localize(p.name, lang)}`}>
                      {t.common.viewInApp}
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="note">
        <Icon name="bag" size={14} /> {t.shop.note}
      </p>
    </Section>
  );
}
