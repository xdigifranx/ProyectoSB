import { Request, Response } from 'express';
import { db } from '../database/db.js';

// Obtener todos los servicios
export const getServicios = (req: Request, res: Response) => {
  db.all('SELECT * FROM servicios', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
};

// Obtener un servicio por ID
export const getServicioById = (req: Request, res: Response) => {
  const { id } = req.params;
  db.get('SELECT * FROM servicios WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(row);
  });
};

// Crear nuevo servicio
export const createServicio = (req: Request, res: Response) => {
  const { nombre, descripcion, precio } = req.body;
  db.run(
    'INSERT INTO servicios (nombre, descripcion, precio) VALUES (?, ?, ?)',
    [nombre, descripcion, precio],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ id: this.lastID });
    }
  );
};

// Actualizar servicio
export const updateServicio = (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, descripcion, precio } = req.body;
  db.run(
    'UPDATE servicios SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?',
    [nombre, descripcion, precio, id],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Servicio actualizado' });
    }
  );
};

// Eliminar servicio
export const deleteServicio = (req: Request, res: Response) => {
  const { id } = req.params;
  db.run('DELETE FROM servicios WHERE id = ?', [id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Servicio eliminado' });
  });
};
