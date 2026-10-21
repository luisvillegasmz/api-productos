import type { Producto } from "./producto.types";

// Frontera: camelCase (código) -> snake_case (lo que viaja por la API).
export function productoADto(p: Producto) {
  return {
    id: p.id,
    nombre: p.nombre,
    precio: p.precio,
    stock: p.stock,
    creado_en: p.creadoEn.toISOString(),
  };
}