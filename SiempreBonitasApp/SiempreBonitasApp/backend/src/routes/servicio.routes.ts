import { Router } from 'express';
import { asyncHandler } from '../middleware/errorHandler.js';
import * as servicioController from '../controllers/servicioController.js';

const router = Router();

router.get('/', asyncHandler(servicioController.getServicios));
router.get('/:id', asyncHandler(servicioController.getServicioById));

export default router;
