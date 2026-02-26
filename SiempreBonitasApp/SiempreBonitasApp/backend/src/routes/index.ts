import express from 'express';
// import * as cursosController from '../controllers/cursosController.js';
import * as serviciosController from '../controllers/serviciosController.js';
import { getNombreEmpresa } from '../controllers/EmpresaController.js';


const router = express.Router();

// Rutas para Cursos
// router.get('/cursos', cursosController.getCursos);
// router.get('/cursos/:id', cursosController.getCursoById);
// router.post('/cursos', cursosController.createCurso);
// router.put('/cursos/:id', cursosController.updateCurso);
// router.delete('/cursos/:id', cursosController.deleteCurso);

// Rutas para Servicios
router.get('/servicios', serviciosController.getServicios);
router.get('/servicios/:id', serviciosController.getServicioById);
router.post('/servicios', serviciosController.createServicio);
router.put('/servicios/:id', serviciosController.updateServicio);
router.delete('/servicios/:id', serviciosController.deleteServicio);
router.get('/empresa/nombre', getNombreEmpresa);

export default router;
