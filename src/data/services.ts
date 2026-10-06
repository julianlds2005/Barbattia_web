import type { Messages } from '../i18n/es';
import type { IconName } from '../components/Icon';

export type ServiceId = keyof Messages['services']['items'];

/** Orden e icono de los servicios. Los textos viven en i18n (`services.items`). */
export const SERVICES: ReadonlyArray<{ id: ServiceId; icon: IconName }> = [
  { id: 'corte', icon: 'scissors' },
  { id: 'barba', icon: 'beard' },
  { id: 'combo', icon: 'combo' },
  { id: 'diseno', icon: 'design' },
  { id: 'color', icon: 'color' },
  { id: 'tratamientos', icon: 'drop' },
  { id: 'infantil', icon: 'kid' },
  { id: 'domicilio', icon: 'home' },
  { id: 'otros', icon: 'sparkle' },
];
