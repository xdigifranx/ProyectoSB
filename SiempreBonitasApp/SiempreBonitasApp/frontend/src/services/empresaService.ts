import { apiGet } from './api';
import type { RedSocial } from '../types/empresa';

export const empresaService = {
  getNombre: () => apiGet<{ nombre: string }>('/empresa/nombre'),
  getHeaderImage: () => apiGet<{ url: string }>('/empresa/url'),
  getLogo: () => apiGet<{ url: string }>('/empresa/logo'),
  getDireccion: () => apiGet<{ direccion: string }>('/empresa/direccion'),
  getTelefono: () => apiGet<{ telefono: string }>('/empresa/telefono'),
  getRedesSociales: () => apiGet<{ redes: RedSocial[] }>('/empresa/redes'),
};
