import { dbAll, dbGet } from '../database/db.js';
import type { EmpresaConfig, RedSocial } from '../models/empresa.js';

export async function getConfigValue(descripcion: string): Promise<string | null> {
  const row = await dbGet<{ valores: string }>(
    'SELECT valores FROM Enpresa WHERE Descripcion = ?',
    [descripcion]
  );
  return row?.valores ?? null;
}

export async function getRedesSociales(): Promise<RedSocial[]> {
  const rows = await dbAll<{ valores: string; Configuracion: string }>(
    'SELECT valores, Configuracion FROM Enpresa WHERE Descripcion = ?',
    ['Redes Sociales']
  );
  return rows.map((row) => ({
    url: row.valores,
    nombre: row.Configuracion,
  }));
}

export type { EmpresaConfig };
