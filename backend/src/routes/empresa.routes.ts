import { Router } from 'express';
import { asyncHandler } from '../middleware/errorHandler.js';
import * as empresaController from '../controllers/empresaController.js';

const router = Router();

router.get('/nombre', asyncHandler(empresaController.getNombreEmpresa));
router.get('/url', asyncHandler(empresaController.getHeaderImage));
router.get('/redes', asyncHandler(empresaController.getRedesSociales));
router.get('/direccion', asyncHandler(empresaController.getDireccion));
router.get('/telefono', asyncHandler(empresaController.getTelefono));
router.get('/logo', asyncHandler(empresaController.getLogo));

export default router;
