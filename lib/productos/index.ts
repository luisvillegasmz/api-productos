import { ProductoMemoryRepository } from "./producto.memory.repository";
import { ProductoService } from "./producto.service";

// En desarrollo, Next recarga los módulos (HMR) y se perdería la memoria.
// Guardamos SOLO el repositorio en globalThis para que sobreviva.
// El servicio se vuelve a crear en cada recarga: así siempre usa tu código nuevo.
const globalRef = globalThis as unknown as {
  productoRepo?: ProductoMemoryRepository;
};

const repo = (globalRef.productoRepo ??= new ProductoMemoryRepository());

export const productoService = new ProductoService(repo);