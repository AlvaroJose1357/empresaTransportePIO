import { pool } from "../config/BD.js";
// el usuario da en un campo text todo el json formado
export const supplierOrder = async (req, res) => {
  const { origen, destino, detalles, nombredestinatario } = req.body;
  try {
    if (!origen || !destino || !detalles || !nombredestinatario) {
      return res
        .status(400)
        .json({ message: "No se pudo cargar el archivo JSON" });
    }
    const newData = await pool.query(
      "INSERT INTO orden ( origen, destino, detalles, nombredestinatario) VALUES ($1, $2, $3, $4) RETURNING *",
      [origen, destino, detalles, nombredestinatario]
    );
    res
      .status(200)
      .json({ message: "datos procesados", data: newData.rows[0] });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error al cargar el archivo en el servidor", error });
  }
};

// import fs from "fs"
// import multer from "multer"
// import {pool} from "../config/BD.js"

// const upload = multer({dest: "upload/"})

// export const supplierOrder = async (req, res) => {
//   try {
//     .json
//     const file = req.file.path

//     const fileContent = await fs.readFile(file, "utf-8")
//     const parsedData = JSON.parse(fileContent)
//     const newData = await pool.query("INSERT ......")
//     await fs.unlink(file)
//     res.status(200).json({message: "datos procesados", data: newData})

//   } catch (error) {
//     res.status(500).json({message: "error al cargar el archivo en el servidor", error});
//   }
// }
