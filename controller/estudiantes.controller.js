import db from "../database/conexion.js";

class EstudiantesController {
  constructor() {}

  consultar(req, res) {
    res.json({ message: "Consulta estudiantes" });
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    res.json({ message: `Se consulto al Estudiante con ID: ${id}` });
  }

  ingresar(req, res) {
    res.json({ message: "Ingresar estudiante" });
  }

  actualizar(req, res) {
    res.json({ message: "Actualizar estudiante" });
  }

  borrar(req, res) {
    res.json({ message: "Eliminar estudiante" });
  }
}

export default new EstudiantesController();
