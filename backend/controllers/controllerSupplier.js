import {pool} from "../config/BD.js"
// el usuario da en un campo text todo el json formado
export const supplierOrder = async (req, res) => {
    try{
        const {jsonData} = req.body;
        if (!jsonData){
        return res.status(400).json({message: "No se pudo cargar el archivo JSON"})
        }
        const parsedData = JSON.parse(jsonData)
        console.log(parsedData)
        const newData = await pool.query("INSERT INTO nombre_tabla (columna1, columna2 VALUES ($1, $2)", [valor1, valor2])
        res.status(200).json({message: "datos procesados", data: newData})
    }catch(error){
        res.status(500).json({message: "error al cargar el archivo en el servidor", error});
    }
}

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