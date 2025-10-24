import { Router } from "express";
import estudiantesController from "../controller/estudiantes.controller.js";

const estudiantesRoutes = Router();

estudiantesRoutes.get("/", estudiantesController.consultar);

estudiantesRoutes.post("/", estudiantesController.ingresar);

estudiantesRoutes
  .route("/:id")
  .delete(estudiantesController.borrar)
  .get(estudiantesController.consultarDetalle)
  .put(estudiantesController.actualizar);

export default estudiantesRoutes;
