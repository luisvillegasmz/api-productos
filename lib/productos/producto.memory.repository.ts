import type { ProductoRepository } from "./producto.repository";
import type {
  CambiosProducto,
  NuevoProducto,
  Producto,
} from "./producto.types";

export class ProductoMemoryRepository implements ProductoRepository {
  private productos = new Map<string, Producto>();

  async listar() {
    return [...this.productos.values()];
  }

  async buscarPorId(id: string) {
    return this.productos.get(id) ?? null;
  }

  async crear(datos: NuevoProducto) {
    const producto: Producto = {
      id: crypto.randomUUID(),
      ...datos,
      creadoEn: new Date(),
    };
    this.productos.set(producto.id, producto);
    return producto;
  }

  async actualizar(id: string, cambios: CambiosProducto) {
    const actual = this.productos.get(id);
    if (!actual) return null;
    const actualizado = { ...actual, ...cambios };
    this.productos.set(id, actualizado);
    return actualizado;
  }

  async eliminar(id: string) {
    return this.productos.delete(id);
  }
}