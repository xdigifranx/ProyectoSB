import prisma from '../database/db.js';
import type { Promocion } from '../models/promocion.js';

export async function getAllPromociones(): Promise<Promocion[]> {
  const promociones = await prisma.promocion.findMany({
    where: {Titulo: {not: 'RUTACARPETAPROMOCIONES'}}, // Filtramos para obtener solo las promociones con título no nulo
  });

  return promociones.map(promocion => ({
    ...promocion,
    id: promocion.Id, // Aseguramos que el id sea de tipo number
  })) as unknown as Promocion[];
}