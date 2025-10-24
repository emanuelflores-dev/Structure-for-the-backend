import express from "express";
import estudiantesRoutes from "./views/estudiantes.routes.js";
import profesoresRoutes from "./views/profes.routes.js";

const PORT = 300;

const app = express();

app.use("/estudiantes", estudiantesRoutes);

app.use("/profesores", profesoresRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API RUN" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
