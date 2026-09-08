import type { Request, Response } from 'express';
import * as servicioRepo from '../repositories/servicioRepository.js';

export const getServicios = async (_req: Request, res: Response) => {
  const servicios = await servicioRepo.getAllServicios();
  res.json(servicios);
};

export const getServicioById = async (req: Request, res: Response) => {
  const servicio = await servicioRepo.getServicioById(req.params.id);
  if (!servicio) return res.status(404).json({ error: 'Servicio no encontrado' });
  res.json(servicio);
};
