import path from 'path';
import type { Request, Response } from 'express';
import type { Promocion } from '../models/promocion.js';
import * as promocionRepo from '../repositories/promocionRepository.js';

const normalizeImageName = (fileName: string | null | undefined) => {
  if (!fileName) return '';
  const cleaned = fileName.toString().trim().replace(/\\/g, '/');
  const base = path.basename(cleaned);
  if (!base) return '';
  return base.toLowerCase().endsWith('.png') ? base : `${base}.png`;
};

const buildImageUrl = (req: Request, imageName: string | null | undefined) => {
  if (!imageName) return null;
  const host = req.get('host') || 'localhost:3003';
  if (imageName.startsWith('http')) return imageName;
  return `${req.protocol}://${host}/Promociones/${imageName}`;
};

export const getPromociones = async (req: Request, res: Response) => {
  const promociones = await promocionRepo.getAllPromociones();

  const promocionesWithUrls = promociones.map((promo) => {
    const raw = promo as Promocion & Record<string, unknown>;
    const urlField = String(raw.Url ?? raw.url ?? '');
    const imagenField = String(raw.Imagen ?? raw.imagen ?? '');
    const campoComField = String(raw.CampoCom ?? raw.Campocom ?? '');

    const imageName =
      normalizeImageName(urlField) ||
      normalizeImageName(imagenField) ||
      normalizeImageName(campoComField);
    const imageUrl = buildImageUrl(req, imageName);

    return {
      ...promo,
      Url: imageUrl,
      Imagen: imageUrl,
      CampoCom: campoComField,
    };
  });

  if (promocionesWithUrls.length === 0) {
    return res.status(404).json({ error: 'No se encontraron promociones' });
  }

  res.json({ promociones: promocionesWithUrls });
};
