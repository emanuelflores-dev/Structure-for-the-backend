import db from "../database/conexion.js";

class ProfesoresController {
  constructor() {}

  consultar(req, res) {
    res.json({ message: "Consulta profesores" });
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    res.json({ message: `Se consulto al Profesor con ID: ${id}` });
  }

  ingresar(req, res) {
    res.json({ message: "Ingresar Profesor" });
  }

  actualizar(req, res) {
    res.json({ message: "Actualizar profesor" });
  }

  borrar(req, res) {
    res.json({ message: "Eliminar profesor" });
  }
}

export default new ProfesoresController();
