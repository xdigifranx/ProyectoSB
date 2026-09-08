import { apiGet } from './api';
import type { Servicio } from '../types/servicio';

export const servicioService = {
  getAll: () => apiGet<Servicio[]>('/servicios'),
  getById: (id: string) => apiGet<Servicio>(`/servicios/${id}`),
};
