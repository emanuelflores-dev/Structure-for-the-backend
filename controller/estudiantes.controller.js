import db from "../database/conexion.js";

class EstudiantesController {
  constructor() {}

  consultar(req, res) {
    try {
      db.query(`SELECT * FROM estudiantes;`, (err, rows) => {
        if (err) {
          return res.status(400).send(err);
        }
        res.status(200).json(rows);
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    try {
      db.query(`SELECT * FROM estudiantes WHERE id = ?`, [id], (err, rows) => {
        if (err) {
          return res.status(400).send(err);
        }
        res.status(200).json(rows);
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  ingresar(req, res) {
    try {
      const { dni, nombre, apellido, email } = req.body;
      db.query(
        `INSERT INTO estudiantes
          (id, dni, nombre, apellido, email)
          VALUES (NULL, ?, ?, ?, ?);`,
        [dni, nombre, apellido, email],
        (err, rows) => {
          if (err) {
            return res.status(400).send(err.message);
          }
          res.status(201).json({ id: rows.insertId });
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  actualizar(req, res) {
    res.json({ message: "Actualizar estudiante" });
  }

  borrar(req, res) {
    res.json({ message: "Eliminar estudiante" });
  }
}

export default new EstudiantesController();
