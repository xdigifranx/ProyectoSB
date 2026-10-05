import prisma from '../database/db.js';
import type { EmpresaConfig, RedSocial } from '../models/empresa.js';

export async function getConfigValue(descripcion: string): Promise<string | null> {
  // Usamos findFirst porque Descripcion no es un campo @unique en el schema
  const row = await prisma.empresa.findFirst({
    where: {
      Descripcion: descripcion
    },
    select: {
      valores: true
    }
  }); 
  return row?.valores ?? null;
}

export async function getRedesSociales(): Promise<RedSocial[]> {
  const rows = await prisma.empresa.findMany({
    where: {
      Descripcion: 'Redes Sociales'
    },
    select: {
      valores: true,
      Configuracion: true // Cambiado a "C" mayúscula según tu schema
    }
  });
  
  // Ya no necesitas "(row: any)" porque Prisma tipa esto automáticamente
  return rows.map(row => ({
    url: row.valores ?? '', 
    nombre: row.Configuracion ?? '', // Cambiado a "C" mayúscula
  }));
}

export type { EmpresaConfig };
