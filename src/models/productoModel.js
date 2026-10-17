/**
 * Modelo de Producto
 * Propósito: Representar y manipular la estructura de datos de los productos.
 */

class ProductoModel {
  constructor() {
    // Simulación de tabla o colección en base de datos
    this.productos = [
      { id: 1, nombre: 'Laptop Gamer', precio: 1200, stock: 5 },
      { id: 2, nombre: 'Mouse Inalámbrico', precio: 25, stock: 15 }
    ];
  }

  // Método para obtener todos los productos
  obtenerTodos() {
    return this.productos;
  }

  // Método para agregar un nuevo producto
  guardar(nuevoProducto) {
    const producto = {
      id: this.productos.length + 1,
      ...nuevoProducto
    };
    this.productos.push(producto);
    return producto;
  }
}

module.exports = new ProductoModel();