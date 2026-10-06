/**
 * Catalogo LOCAL de muestra para la seccion Tienda.
 *
 * La forma de `Product` es la que consume la UI. `src/services/catalog.ts`
 * se encarga de mapear la respuesta de la API (`GET /api/products`) a esta
 * misma forma, asi que los componentes no cambian al conectar el backend.
 */

export const PRODUCT_CATEGORIES = [
  'maquinas',
  'tijeras',
  'navajas',
  'capilares',
  'ceras',
  'shampoos',
  'accesorios',
  'mobiliario',
  'equipamiento',
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

/** Texto que puede venir localizado (datos locales) o plano (API). */
export type LocalizedText = string | { es: string; en: string };

export interface Product {
  id: string;
  name: LocalizedText;
  description?: LocalizedText;
  brand?: string;
  category: ProductCategory;
  /** Precio en pesos colombianos (COP). */
  price: number;
  currency: 'COP';
  /** URL absoluta de la imagen. Si falta, la UI dibuja un icono por categoria. */
  imageUrl?: string;
  stock?: number;
  featured?: boolean;
}

export const LOCAL_PRODUCTS: readonly Product[] = [
  {
    id: 'demo-1',
    name: { es: 'Máquina inalámbrica Pro Fade', en: 'Pro Fade cordless clipper' },
    description: { es: 'Motor magnético, 4 h de batería', en: 'Magnetic motor, 4 h battery' },
    category: 'maquinas',
    price: 489000,
    currency: 'COP',
    featured: true,
  },
  {
    id: 'demo-2',
    name: { es: 'Trimmer de detalle T-Blade', en: 'T-Blade detail trimmer' },
    description: { es: 'Cuchilla en T para contornos', en: 'T-blade for line-ups' },
    category: 'maquinas',
    price: 259000,
    currency: 'COP',
  },
  {
    id: 'demo-3',
    name: { es: 'Tijera japonesa 6"', en: 'Japanese 6" scissors' },
    description: { es: 'Acero 440C, filo convexo', en: '440C steel, convex edge' },
    category: 'tijeras',
    price: 320000,
    currency: 'COP',
    featured: true,
  },
  {
    id: 'demo-4',
    name: { es: 'Tijera de entresacar', en: 'Thinning scissors' },
    description: { es: '30 dientes, corte suave', en: '30 teeth, smooth cut' },
    category: 'tijeras',
    price: 185000,
    currency: 'COP',
  },
  {
    id: 'demo-5',
    name: { es: 'Navaja clásica de acero', en: 'Classic steel straight razor' },
    description: { es: 'Mango de madera, hoja intercambiable', en: 'Wood handle, replaceable blade' },
    category: 'navajas',
    price: 98000,
    currency: 'COP',
  },
  {
    id: 'demo-6',
    name: { es: 'Aceite para barba', en: 'Beard oil' },
    description: { es: 'Argán y jojoba, 30 ml', en: 'Argan & jojoba, 30 ml' },
    category: 'capilares',
    price: 45000,
    currency: 'COP',
  },
  {
    id: 'demo-7',
    name: { es: 'Cera mate fijación fuerte', en: 'Strong-hold matte wax' },
    description: { es: 'Acabado natural, 100 g', en: 'Natural finish, 100 g' },
    category: 'ceras',
    price: 39000,
    currency: 'COP',
    featured: true,
  },
  {
    id: 'demo-8',
    name: { es: 'Pomada brillante', en: 'High-shine pomade' },
    description: { es: 'Base agua, fácil de lavar', en: 'Water based, easy to wash out' },
    category: 'ceras',
    price: 35000,
    currency: 'COP',
  },
  {
    id: 'demo-9',
    name: { es: 'Shampoo anticaspa', en: 'Anti-dandruff shampoo' },
    description: { es: 'Uso diario, 400 ml', en: 'Daily use, 400 ml' },
    category: 'shampoos',
    price: 42000,
    currency: 'COP',
  },
  {
    id: 'demo-10',
    name: { es: 'Kit de peines y cepillo fade', en: 'Comb set & fade brush' },
    description: { es: 'Peines antiestáticos', en: 'Anti-static combs' },
    category: 'accesorios',
    price: 55000,
    currency: 'COP',
  },
  {
    id: 'demo-11',
    name: { es: 'Silla de barbero hidráulica', en: 'Hydraulic barber chair' },
    description: { es: 'Reclinable, base cromada', en: 'Reclining, chrome base' },
    category: 'mobiliario',
    price: 2450000,
    currency: 'COP',
    featured: true,
  },
  {
    id: 'demo-12',
    name: { es: 'Esterilizador UV', en: 'UV sterilizer' },
    description: { es: 'Para herramientas de trabajo', en: 'For work tools' },
    category: 'equipamiento',
    price: 310000,
    currency: 'COP',
  },
];
