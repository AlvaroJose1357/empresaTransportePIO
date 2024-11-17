// administradores
//* gestion pedidos
//* optimizacion rutas
//* gestion conductores
//* panel monitoreo en tiempo real
// conductores
//* lista entregas asignadas
//* mensajeria con administracion
// clientes
//* rastreo pedidos (por ID, por .....)
//* notificaciones (por pensar)
//* historial de pedidos referentes al usuario

import { Router } from "express";
const router = Router();

const respuesta = (req, res) => {
  res.status(200).json({ mensaje: "ok" });
};
// administradores
router.post("/orderManagement", respuesta);
router.post("/routesOptimization", respuesta);
router.post("/monitoringPanel", respuesta);

// conductores
router.post("/deliveryList", respuesta);
router.post("/messagingAdmin", respuesta);

// clientes

router.post("/orderTracking", respuesta);
router.post("/orderHistory", respuesta);

export default router;
