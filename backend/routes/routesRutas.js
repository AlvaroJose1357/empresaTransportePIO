import { Router } from "express";
const router = Router();
// generales
//* login
//* register
//* logout
const respuesta = (req, res) => {
  res.status(200).json({ mensaje: "ok" });
};
router.post("/login", respuesta);
router.post("/register", respuesta);
router.post("/logout", respuesta);

export default router;
