/**
 * Enrutador de Productos
 * Propósito: Definir los endpoints de la API para el módulo de productos.
 */

const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Ruta GET para obtener productos
router.get('/', (req, res) => productoController.listarProductos(req, res));

// Ruta POST para crear un producto
router.post('/', (req, res) => productoController.crearProducto(req, res));

module.exports = router;