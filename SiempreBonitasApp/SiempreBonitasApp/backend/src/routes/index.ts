import express from 'express';
// import * as cursosController from '../controllers/cursosController.js';
import * as serviciosController from '../controllers/serviciosController.js';
import { getNombreEmpresa ,getHeaderImage,getRedesSociales,getDireccion,getTelefono,getLogo} from '../controllers/EmpresaController.js';


const router = express.Router();

router.get('/servicios', serviciosController.getServicios);
router.get('/servicios/:id', serviciosController.getServicioById);
// router.post('/servicios', serviciosController.createServicio);
// router.put('/servicios/:id', serviciosController.updateServicio);
// router.delete('/servicios/:id', serviciosController.deleteServicio);
router.get('/empresa/nombre', getNombreEmpresa);
router.get('/empresa/url', getHeaderImage);
router.get('/empresa/redes', getRedesSociales);
router.get('/empresa/direccion', getDireccion);
router.get('/empresa/telefono', getTelefono);
router.get('/empresa/logo', getLogo);
export default router;
