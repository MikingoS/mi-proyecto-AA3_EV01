/**
 * Controlador de Productos
 * Propósito: Procesar las peticiones HTTP y comunicarse con el Modelo de Productos.
 */

const productoModel = require('../models/productoModel');

class ProductoController {
  // Método para listar productos
  listarProductos(req, res) {
    const productos = productoModel.obtenerTodos();
    res.json({
      exito: true,
      data: productos
    });
  }

  // Método para crear un nuevo producto
  crearProducto(req, res) {
    const { nombre, precio, stock } = req.body;
    
    if (!nombre || !precio) {
      return res.status(400).json({ exito: false, mensaje: 'Faltan datos requeridos' });
    }

    const nuevo = productoModel.guardar({ nombre, precio, stock: stock || 0 });
    res.status(201).json({
      exito: true,
      mensaje: 'Producto creado exitosamente',
      data: nuevo
    });
  }
}

module.exports = new ProductoController();