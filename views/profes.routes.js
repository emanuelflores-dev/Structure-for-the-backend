import { Router } from "express";
import profesoresController from "../controller/profes.controller.js";

const profesoresRoutes = Router();

profesoresRoutes.get("/", profesoresController.consultar);

profesoresRoutes.post("/", profesoresController.ingresar);

profesoresRoutes
  .route("/:id")
  .delete(profesoresController.borrar)
  .get(profesoresController.consultarDetalle)
  .put(profesoresController.actualizar);

export default profesoresRoutes;
