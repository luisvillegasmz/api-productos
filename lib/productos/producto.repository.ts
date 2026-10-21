import type {
  CambiosProducto,
  NuevoProducto,
  Producto,
} from "./producto.types";

// Contrato del repositorio: el servicio solo conoce esta interfaz,
// no sabe si abajo hay memoria, SQLite o Firestore.
export interface ProductoRepository {
  listar(): Promise<Producto[]>;
  buscarPorId(id: string): Promise<Producto | null>;
  crear(datos: NuevoProducto): Promise<Producto>;
  actualizar(id: string, cambios: CambiosProducto): Promise<Producto | null>;
  eliminar(id: string): Promise<boolean>;
}