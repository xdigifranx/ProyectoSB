import {Request, Response } from "express";
import { db } from "../database/db.js";
import { Promocion } from "../models/Promociones.js";
import path from "path";

export const getPromociones = (req: Request, res: Response) => {
    db.all('SELECT id, Titulo, Descripcion, Imagen FROM Promociones', (err, rows: Promocion[]) => {
        if(err) {
            res.status(500).json({ error: err.message });
            return;
        }
        else if (!rows) {
            res.status(404).json({ error: 'No se encontraron promociones' });
            return;
        }
        const promociones = rows.map((row: Promocion) => {
            const imageValue = row.Imagen;
            const host = req.get('host') || 'localhost:3003';   
            const imageUrl = imageValue.startsWith('http')
                ? imageValue
                : `${req.protocol}://${host}/${path.basename(imageValue).replace(/\\/g, '/')}`;
            return {
                id: row.id,
                Titulo: row.Titulo,
                Descripcion: row.Descripcion,
                Imagen: imageUrl
            };
        });
        res.json({ promociones });
    });};