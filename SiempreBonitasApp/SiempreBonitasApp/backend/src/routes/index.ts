import { Router } from 'express';
import empresaRoutes from './empresa.routes.js';
import promocionRoutes from './promocion.routes.js';
import servicioRoutes from './servicio.routes.js';

const router = Router();

router.use('/servicios', servicioRoutes);
router.use('/empresa', empresaRoutes);
router.use('/promociones', promocionRoutes);

export default router;
