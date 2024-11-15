import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./config/BD.js";

const PORT = 3000;
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// pool();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
