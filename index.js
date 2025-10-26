import express from "express";
import cors from "cors";
import estudiantesRoutes from "./views/estudiantes.routes.js";
import profesoresRoutes from "./views/profes.routes.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 1234;

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "API RUN" });
});

app.use("/estudiantes", estudiantesRoutes);

app.use("/profesores", profesoresRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
