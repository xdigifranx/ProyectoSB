import { Request, Response } from 'express';
import { Empresa } from '../models/Empresa.js';
import { db } from '../database/db.js';


export const getNombreEmpresa = (req: Request, res: Response) => {
    db.get('SELECT valores FROM Enpresa WHERE Descripcion = ?', ['Nombre empresa'], (err, row: Empresa) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!row) {
            res.status(404).json({ error: 'Configuración no encontrada' });
            return;
        }
        res.json({ nombre: row.valores });
    });
}