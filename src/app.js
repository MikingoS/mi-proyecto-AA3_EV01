/**
 * Archivo Principal de la Aplicación
 * Framework seleccionado: Express.js
 * Arquitectura: MVC (Modelo-Vista-Controlador)
 */

const express = require('express');
const db = require('./config/database');
const productoRoutes = require('./routes/productoRoutes'); // Ajusta a ./routes/ Si renombraste la carpeta

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para entender JSON
app.use(express.json());

// Inicializar y verificar conexión a la base de datos
db.conectar();

// Definición de rutas del módulo principal
app.use('/api/productos', productoRoutes);

// Ruta base de prueba
app.get('/', (req, res) => {
  res.json({
    mensaje: 'Servidor funcionando correctamente',
    estadoBaseDatos: db.obtenerEstado()
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});