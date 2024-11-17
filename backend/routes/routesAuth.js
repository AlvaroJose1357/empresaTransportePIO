import { Router } from "express";
import { register, login, logout } from "../controllers/controllerAuth.js";
const router = Router();
// generales
//* login
//* register
//* logout
const respuesta = (req, res) => {
  res.status(200).json({ mensaje: "ok" });
};
router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

export default router;
