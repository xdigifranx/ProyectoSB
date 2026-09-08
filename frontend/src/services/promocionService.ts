import { apiGet } from './api';
import type { Promocion } from '../types/promocion';

export const promocionService = {
  getAll: () => apiGet<{ promociones: Promocion[] }>('/promociones/ruta-imagen'),
};
