import type { Messages } from '../i18n/es';

export type Specialty = keyof Messages['barbers']['specialties'];

/**
 * Perfiles de EJEMPLO para la seccion "Barberos destacados".
 * Personas ficticias: la UI los marca como ejemplo y usa avatares con iniciales.
 */
export interface SampleBarber {
  id: string;
  name: string;
  zone: string;
  rating: number;
  reviews: number;
  km: number;
  specialties: Specialty[];
  availableToday: boolean;
}

export const SAMPLE_BARBERS: readonly SampleBarber[] = [
  { id: 'b1', name: 'Andrés Mejía', zone: 'Laureles', rating: 4.9, reviews: 214, km: 1.2, specialties: ['fade', 'beard'], availableToday: true },
  { id: 'b2', name: 'Sara Duque', zone: 'El Poblado', rating: 5, reviews: 158, km: 2.1, specialties: ['classic', 'treatments'], availableToday: true },
  { id: 'b3', name: 'Mateo Ruiz', zone: 'Envigado', rating: 4.8, reviews: 97, km: 3.4, specialties: ['color', 'design'], availableToday: false },
  { id: 'b4', name: 'Camilo Ríos', zone: 'Belén', rating: 4.7, reviews: 132, km: 0.8, specialties: ['kids', 'home'], availableToday: true },
];
