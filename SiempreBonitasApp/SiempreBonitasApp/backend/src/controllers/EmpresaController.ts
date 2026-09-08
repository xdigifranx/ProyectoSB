import path from 'path';
import type { Request, Response } from 'express';
import * as empresaRepo from '../repositories/empresaRepository.js';

const buildAssetUrl = (req: Request, filePath: string) => {
  const host = req.get('host') || 'localhost:3003';
  if (filePath.startsWith('http')) return filePath;
  return `${req.protocol}://${host}/${path.basename(filePath).replace(/\\/g, '/')}`;
};

export const getNombreEmpresa = async (_req: Request, res: Response) => {
  const valores = await empresaRepo.getConfigValue('Nombre empresa');
  if (!valores) return res.status(404).json({ error: 'Configuración no encontrada' });
  res.json({ nombre: valores });
};

export const getHeaderImage = async (req: Request, res: Response) => {
  const imageValue = await empresaRepo.getConfigValue('Lugar');
  if (!imageValue) return res.status(404).json({ error: 'Configuración no encontrada' });
  res.json({ url: buildAssetUrl(req, imageValue) });
};

export const getRedesSociales = async (_req: Request, res: Response) => {
  const redes = await empresaRepo.getRedesSociales();
  if (redes.length === 0) {
    return res.status(404).json({ error: 'Configuración no encontrada' });
  }
  res.json({ redes });
};

export const getDireccion = async (_req: Request, res: Response) => {
  const valores = await empresaRepo.getConfigValue('Direccion');
  if (!valores) return res.status(404).json({ error: 'Configuración no encontrada' });
  res.json({ direccion: valores });
};

export const getTelefono = async (_req: Request, res: Response) => {
  const valores = await empresaRepo.getConfigValue('Telefono');
  if (!valores) return res.status(404).json({ error: 'Configuración no encontrada' });
  res.json({ telefono: valores });
};

export const getLogo = async (req: Request, res: Response) => {
  const logoValue = await empresaRepo.getConfigValue('Logo');
  if (!logoValue) return res.status(404).json({ error: 'Configuración no encontrada' });
  res.json({ url: buildAssetUrl(req, logoValue) });
};
