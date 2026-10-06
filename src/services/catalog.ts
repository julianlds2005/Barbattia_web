import { API_URL } from '../config/links';
import { LOCAL_PRODUCTS, PRODUCT_CATEGORIES, type Product, type ProductCategory } from '../data/products';

/**
 * Servicio de catalogo de la Tienda.
 *
 * HOY: devuelve los datos locales de `src/data/products.ts`.
 *
 * TODO(api): cuando la API este publica, definir `VITE_API_URL` (ej.
 * https://api.barbattia.com). Entonces `getProducts()` consultara
 * `GET ${VITE_API_URL}/api/products` (ruta existente en backend/src/routes/
 * catalog.routes.js) y mapeara cada fila con `fromApi()`. Si la peticion falla
 * se usan los datos locales como respaldo, para que la seccion nunca quede vacia.
 * Revisar el mapeo de categorias del backend (`products.category`, por defecto
 * 'implementos') contra `PRODUCT_CATEGORIES`.
 */

/** Forma de una fila de la tabla `products` del backend. */
export interface ApiProduct {
  id: number;
  barber_id?: number | null;
  name: string;
  description?: string | null;
  brand?: string | null;
  category?: string | null;
  price: number;
  stock?: number;
  image_url?: string | null;
  is_active?: number;
}

const CATEGORY_ALIASES: Record<string, ProductCategory> = {
  maquina: 'maquinas',
  tijera: 'tijeras',
  navaja: 'navajas',
  capilar: 'capilares',
  cera: 'ceras',
  shampoo: 'shampoos',
  implementos: 'accesorios',
  accesorio: 'accesorios',
  mueble: 'mobiliario',
  equipo: 'equipamiento',
};

function normalizeCategory(raw: string | null | undefined): ProductCategory {
  const key = (raw ?? '').toLowerCase().trim();
  if ((PRODUCT_CATEGORIES as readonly string[]).includes(key)) return key as ProductCategory;
  return CATEGORY_ALIASES[key] ?? 'accesorios';
}

function absoluteUrl(path: string | null | undefined): string | undefined {
  if (!path) return undefined;
  if (/^https?:\/\//.test(path)) return path;
  return API_URL ? `${API_URL}${path.startsWith('/') ? '' : '/'}${path}` : undefined;
}

export function fromApi(row: ApiProduct): Product {
  return {
    id: String(row.id),
    name: row.name,
    description: row.description ?? undefined,
    brand: row.brand ?? undefined,
    category: normalizeCategory(row.category),
    price: Number(row.price) || 0,
    currency: 'COP',
    imageUrl: absoluteUrl(row.image_url),
    stock: row.stock,
  };
}

export interface ProductQuery {
  category?: ProductCategory;
  signal?: AbortSignal;
}

export async function getProducts(query: ProductQuery = {}): Promise<Product[]> {
  const local = () =>
    LOCAL_PRODUCTS.filter((p) => !query.category || p.category === query.category);

  if (!API_URL) return local();

  try {
    const res = await fetch(`${API_URL}/api/products`, { signal: query.signal, headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rows = (await res.json()) as ApiProduct[];
    const products = rows.filter((r) => r.is_active !== 0).map(fromApi);
    const filtered = products.filter((p) => !query.category || p.category === query.category);
    return filtered.length || !query.category ? filtered : local();
  } catch (err) {
    if ((err as Error).name === 'AbortError') throw err;
    return local();
  }
}
