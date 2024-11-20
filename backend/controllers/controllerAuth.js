import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../config/BD.js";

export const register = async (req, res) => {
  const {
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
    const newUser = await pool.query(
      "INSERT INTO usuario (nombreusuario, apellidousuario, edadusuario, telefonousuario, correousuario, password, idrol) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        nombreusuario,
        apellidousuario,
        edadusuario,
        telefonousuario,
        correousuario,
        hashedPassword,
        idrol || 2,
      ]
    );
    res.status(201).json({ message: "Usuario creado", data: newUser.rows[0] });
  } catch (error) {
    res.status(500).json({ mensaje: "error", error: error.message });
  }
};
export const login = async (req, res) => {
  try {
    const { correousuario, password } = req.body;
    const result = await pool.query(
      "SELECT * FROM usuario WHERE correousuario = $1",
      [correousuario]
    );
    const resultUser = result.rows[0];
    if (!resultUser) {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
    const validPassword = await bcrypt.compare(password, resultUser.password);
    if (!validPassword) {
      res.status(404).json({ message: "Contraseña incorrecta" });
    }
    const token = jwt.sign(
      {
        idusuario: resultUser.idusuario,
        nombreusuario: resultUser.nombreusuario,
        apellidousuario: resultUser.apellidousuario,
        correousuario: resultUser.correousuario,
        idrol: resultUser.idrol,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.cookie("token", token);
    res.status(200).json({ message: "Usuario logueado", token });
  } catch (error) {
    res.status(500).json({ mensaje: "error", error: error.message });
  }
};
export const logout = (req, res) => {
  res.status(200).json({ message: "Usuario deslogueado" });
};
