import { pool } from "../backend/config/BD.js";

pool
  .connect()
  .then(() => {
    console.log("conectado a postgreSQL");
  })
  .catch((err) => {
    console.error("Error al conectarse a postgre", err);
  });

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.rows);
  }
  pool.end();
});
