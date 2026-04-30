import path from 'path';
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
export const getHeaderImage = (req: Request, res: Response) => {
    db.get('SELECT valores FROM Enpresa WHERE Descripcion = ?', ['Lugar'], (err, row: Empresa) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!row) {
            res.status(404).json({ error: 'Configuración no encontrada' });
            return;
        }

        const imageValue = row.valores;
        const host = req.get('host') || 'localhost:3003';
        const imageUrl = imageValue.startsWith('http')
            ? imageValue
            : `${req.protocol}://${host}/${path.basename(imageValue).replace(/\\/g, '/')}`;

        res.json({ url: imageUrl });
    });};   

    export const getRedesSociales = (req: Request, res: Response) => {
    db.all('SELECT valores,Configuracion FROM Enpresa WHERE Descripcion = ?', ['Redes Sociales'], (err, rows: Empresa[]) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!rows || rows.length === 0) {
            res.status(404).json({ error: 'Configuración no encontrada' });
            return;
        }
        
        // Devolver array de objetos directamente
        const redes = rows.map(row => ({
            url: row.valores,
            nombre: row.Configuracion
        }));
        
        res.json({ redes });
    });
    }
    export  const getDireccion = (req: Request, res: Response) => {
    db.get('SELECT valores FROM Enpresa WHERE Descripcion = ?', ['Direccion'], (err, row: Empresa) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!row) {
            res.status(404).json({ error: 'Configuración no encontrada' });
            return;
        }
        res.json({ direccion: row.valores });
    });
    };

    export const getTelefono = (req: Request, res: Response) => {
    db.get('SELECT valores FROM Enpresa WHERE Descripcion = ?', ['Telefono'], (err, row: Empresa) => {
        if (err) {  res.status(500).json({ error: err.message });
            return;
        }   
        else if (!row) {
            res.status(404).json({ error: 'Configuración no encontrada' });
            return;
        }
        res.json({ telefono: row.valores });
    });
    };
    export const getLogo = (req: Request, res: Response) => {
    db.get('SELECT valores FROM Enpresa WHERE Descripcion = ?', ['Logo'], (err, row: Empresa) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!row) {
            res.status(404).json({ error: 'Configuración no encontrada' });
            return;
        }
        
        const logoValue = row.valores;
        const host = req.get('host') || 'localhost:3003';
        const logoUrl = logoValue.startsWith('http')
            ? logoValue
            : `${req.protocol}://${host}/${path.basename(logoValue).replace(/\\/g, '/')}`;
        
        res.json({ url: logoUrl });
    });
    };

