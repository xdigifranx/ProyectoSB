import prisma from '../database/db.js';
import type { Servicio } from '../models/servicio.js';

export async function getAllServicios(): Promise<Servicio[]> {
  const servicios = await prisma.servicio.findMany();
  return servicios as Servicio[]; // Aseguramos que el tipo sea Servicio[]
}

export async function getServicioById(id: string): Promise<Servicio | null> {
  const row = await prisma.servicio.findUnique({
    where: {
      id : parseInt(id, 10) // Convertimos el id a número entero
    }
  });
  return row as Servicio | null;
}

