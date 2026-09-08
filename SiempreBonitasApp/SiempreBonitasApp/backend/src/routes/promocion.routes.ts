import { Router } from 'express';
import { asyncHandler } from '../middleware/errorHandler.js';
import * as promocionController from '../controllers/promocionController.js';

const router = Router();

router.get('/ruta-imagen', asyncHandler(promocionController.getPromociones));

export default router;
