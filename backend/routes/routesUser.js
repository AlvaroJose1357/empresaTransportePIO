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
import {
  orderManagement,
  assignmentOrder,
  routesOptimization,
  monitoringPanel,
  administratorDriver,
  addDriver,
} from "../controllers/controllerAdmin.js";
const router = Router();

const respuesta = (req, res) => {
  res.status(200).json({ mensaje: "ok" });
};
// administradores
router.get("/orderManagement", orderManagement);
router.post("/orderManagement/assignmentOrder", assignmentOrder);
router.get("/routesOptimization", routesOptimization);
router.get("/monitoringPanel", monitoringPanel);
router.get("/administratorDriver", administratorDriver);
router.post("/administratorDriver/addDriver", addDriver);

// conductores
router.post("/deliveryList", respuesta);
router.post("/messagingAdmin", respuesta);

// clientes
router.post("/orderTracking", respuesta);
router.post("/orderHistory", respuesta);

export default router;
