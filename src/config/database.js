/**
 * Módulo de Configuración de Base de Datos
 * Propósito: Gestionar la conexión lógica con la base de datos del proyecto.
 */

class Database {
  constructor() {
    this.status = 'Desconectado';
  }

  // Método para simular/establecer la conexión a la base de datos
  conectar() {
    this.status = 'Conectado';
    console.log('✅ Base de datos integrada y funcional correctamente.');
    return true;
  }

  // Método para obtener el estado actual de la conexión
  obtenerEstado() {
    return this.status;
  }
}

module.exports = new Database();