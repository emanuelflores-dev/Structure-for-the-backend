import db from "../database/conexion.js";

class CursosController {
  constructor() {}

  consultar(req, res) {
    res.json({ message: "Consulta curso" });
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    res.json({ message: `Se consulto al Curso con ID: ${id}` });
  }

  ingresar(req, res) {
    res.json({ message: "Ingresar cursos" });
  }

  actualizar(req, res) {
    res.json({ message: "Actualizar cursos" });
  }

  borrar(req, res) {
    res.json({ message: "Eliminar cursos" });
  }
}

export default new CursosController();
