import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectBD from "../config/BD";

export const register = async (req, res) => {
  const {
    idusuario,
    nombreusuario,
    apellidousuario,
    edadusuario,
    telefonousuario,
    correousuario,
    password,
    idrol,
  } = req.body;
  try {
    // encriptar password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await connectBD.query(
      "INSERT INTO usuarios (idusuario, nombreusuario, apellidousuario, edadusuario, telefonousuario, correousuario, password, idrol) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        idusuario,
        nombreusuario,
        apellidousuario,
        edadusuario,
        telefonousuario,
        correousuario,
        hashedPassword,
        (idrol = 2),
      ]
    );
  } catch (error) {
    res.status(500).json({ mensaje: "error", error: error.message });
  }
};
export const login = (req, res) => {
  res.send("login");
};
export const logout = (req, res) => {
  res.send("Logout ");
};
