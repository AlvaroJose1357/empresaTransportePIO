import { pool } from "../config/BD.js";

export const orderTracking = (req, res) => {
  res.send("orderTracking");
};

export const orderHistory = async (req, res) => {
  // traer usuario conductor, id orden, fecha entrega, costo, estado de pedido
  try {
    const result = await pool.query(
      "select u.nombreusuario, o.nombredestinatario, p.idorden, p.fechaentrega, p.costo, ep.nombreestadopedido from pedido p join orden o on p.idorden = o.idorden join usuario u on u.idusuario = p.idusuarioconductor join estadopedido ep on ep.idestadopedido = p.idestadopedido"
    );
    const resultHistory = result.rows;
    res
      .status(200)
      .json({ message: "Historial de pedidos", data: resultHistory });
  } catch (error) {
    res.status(500).json({ mensaje: "error", error: error.message });
  }
};
