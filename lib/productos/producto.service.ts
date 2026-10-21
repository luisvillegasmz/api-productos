import { NotFoundError } from "@/lib/http/errors";
import type { ProductoRepository } from "./producto.repository";
import type {
  CambiosProducto,
  NuevoProducto,
  Producto,
} from "./producto.types";

// Reglas de negocio. No sabe nada de HTTP (ni Request ni Response).
export class ProductoService {
  constructor(private readonly repo: ProductoRepository) {}

  listar(): Promise<Producto[]> {
    return this.repo.listar();
  }

  async obtener(id: string): Promise<Producto> {
    const producto = await this.repo.buscarPorId(id);
    if (!producto) throw new NotFoundError("Producto", id);
    return producto;
  }

  crear(datos: NuevoProducto): Promise<Producto> {
    return this.repo.crear(datos);
  }

  async actualizar(id: string, cambios: CambiosProducto): Promise<Producto> {
    const producto = await this.repo.actualizar(id, cambios);
    if (!producto) throw new NotFoundError("Producto", id);
    return producto;
  }

  async eliminar(id: string): Promise<void> {
    const existia = await this.repo.eliminar(id);
    if (!existia) throw new NotFoundError("Producto", id);
  }
}