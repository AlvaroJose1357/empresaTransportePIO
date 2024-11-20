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
  orderAssignment,
  optimizationRoutes,
  monitoringPanel,
  driverAdministrator,
  addDriver,
} from "../controllers/controllerAdmin.js";
const router = Router();

const response = (req, res) => {
  res.status(200).json({ mensaje: "ok" });
};
// administrators
router.get("/orderManagement", orderManagement);
router.post("/orderManagement/orderAssignment",  orderAssignment);
router.get("/optimizationRoutes", optimizationRoutes);
router.get("/monitoringPanel", monitoringPanel);
router.get("/driverAdministrator", driverAdministrator);
router.post("/administratorDriver/addDriver", addDriver);

// drivers
router.post("/deliveryList", response);
router.post("/messagingAdmin", response);

// clients
router.post("/orderTracking", response);
router.post("/orderHistory", response);

export default router;
