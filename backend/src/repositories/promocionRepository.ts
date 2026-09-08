import { dbAll } from '../database/db.js';
import type { Promocion } from '../models/promocion.js';

export async function getAllPromociones(): Promise<Promocion[]> {
  return dbAll<Promocion>('SELECT * FROM Promociones');
}
