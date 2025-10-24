class EstudiantesController {
  constructor() {}

  consultar(req, res) {
    res.json({ message: "Consulta estudiantes" });
  }

  consultarDetalle(req, res) {
    res.json({ message: "Consulta de un estidiante" });
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
