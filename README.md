# 📚 API de Estudiantes y Profesores

Proyecto básico en **Node.js + Express** que implementa un sistema RESTful con controladores y rutas para gestionar estudiantes y profesores.

---

## 🚀 Características

- Arquitectura modular (controladores, rutas y modelos separados).
- Endpoints REST para CRUD de estudiantes y profesores.
- Servidor Express liviano y fácil de extender.
- Ejemplo ideal para aprender estructura tipo MVC.

---

## 📁 Estructura del Proyecto

backend-01/
│
├── controller/
│ ├── estudiantes.controller.js
│ └── profes.controller.js
│
├── models/
│ └── estudiantes.mode.js
│ └── profes.model.js
│
├── views/
│ ├── estudiantes.routes.js
│ └── profes.routes.js
│
├── index.js
└── README.md

yaml
Copiar código

---

## ⚙️ Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tuusuario/backend-01.git
   cd backend-01
   Instalar dependencias:
   ```

bash
Copiar código
npm install
Ejecutar el servidor:

bash
Copiar código
npm run dev
(o node index.js si no usás nodemon)

Abrir en el navegador:

arduino
Copiar código
http://localhost:300
🌐 Endpoints Disponibles
🔸 Estudiantes
Método Ruta Descripción
GET /estudiantes Consulta todos los estudiantes
GET /estudiantes/:id Consulta un estudiante por ID
POST /estudiantes Ingresa un nuevo estudiante
PUT /estudiantes/:id Actualiza un estudiante
DELETE /estudiantes/:id Elimina un estudiante

🔸 Profesores
Método Ruta Descripción
GET /profesores Consulta todos los profesores
GET /profesores/:id Consulta un profesor por ID
POST /profesores Ingresa un nuevo profesor
PUT /profesores/:id Actualiza un profesor
DELETE /profesores/:id Elimina un profesor

🧠 Ejemplo de Respuesta
GET http://localhost:300/estudiantes

json
Copiar código
{
"message": "Consulta estudiantes"
}
GET http://localhost:300/profesores/7

json
Copiar código
{
"message": "Se consulto al profesor con ID: 7"
}
🧩 Próximos pasos
Añadir base de datos (MongoDB, PostgreSQL o MySQL).

Crear modelos dentro de la carpeta /models.

Implementar validaciones y manejo de errores.

Añadir autenticación (JWT).

👨‍💻 Autor
Emanuel Aroca Flores
📍 Argentina
💬 Proyecto educativo con Node.js y Express

📜 Licencia
Este proyecto está bajo la licencia MIT — podés usarlo y modificarlo libremente.

yaml
Copiar código

---

¿Querés que te agregue un ejemplo de **modelo básico** (por ejemplo `estudiante.model.js`) para completar la carpeta `/models`?  
Podría hacerlo en JS plano o con Mongoose, según prefieras.
