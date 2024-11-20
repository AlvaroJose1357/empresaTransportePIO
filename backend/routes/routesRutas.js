import { Router } from "express";
const router = Router();
// generales
//* login
//* register
//* logout
const response = (req, res) => {
  res.status(200).json({ mensaje: "ok" });
};
router.post("/login", response);
router.post("/register", response);
router.post("/logout", response);

export default router;
