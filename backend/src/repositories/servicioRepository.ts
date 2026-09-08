import { dbAll, dbGet } from '../database/db.js';
import type { Servicio } from '../models/servicio.js';

export async function getAllServicios(): Promise<Servicio[]> {
  return dbAll<Servicio>('SELECT * FROM servicios');
}

export async function getServicioById(id: string): Promise<Servicio | null> {
  const row = await dbGet<Servicio>('SELECT * FROM servicios WHERE id = ?', [id]);
  return row ?? null;
}
