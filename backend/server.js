import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectBD from "./config/BD.js";
import routerUsers from "./routes/routesUser.js";
import routerAuth from "./routes/routesAuth.js";
import routerRoutes from "./routes/routesRutas.js";

const PORT = 3000;
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

connectBD();

// endpoints
app.use("/api/auth", routerAuth);
app.use("/api/users", routerUsers);
app.use("/api/routes", routerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
