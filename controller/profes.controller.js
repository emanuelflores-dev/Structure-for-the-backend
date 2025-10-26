import db from "../database/conexion.js";

class ProfesoresController {
  constructor() {}

  consultar(req, res) {
    try {
      db.query(`SELECT * FROM profesores;`, (err, rows) => {
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
      db.query(`SELECT * FROM profesores WHERE id = ?`, [id], (err, row) => {
        if (err) {
          return res.status(400).send(err);
        }
        res.status(200).json(row);
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  ingresar(req, res) {
    try {
      const { dni, nombre, apellido, profesion, email } = req.body;
      db.query(
        `INSERT INTO profesores
          (id, dni, nombre, apellido, profesion, email)
          VALUES (NULL, ?, ?, ?, ?, ?);`,
        [dni, nombre, apellido, profesion, email],
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
    res.json({ message: "Actualizar profesor" });
  }

  borrar(req, res) {
    res.json({ message: "Eliminar profesor" });
  }
}

export default new ProfesoresController();
