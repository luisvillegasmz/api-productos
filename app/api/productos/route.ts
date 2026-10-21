import { productoADto } from "@/lib/productos/producto.mapper";
import { productoService } from "@/lib/productos";

export async function GET() {
  const productos = await productoService.listar();
  return Response.json({ datos: productos.map(productoADto) });
}

export async function POST(request: Request) {
  const cuerpo = await request.json();
  const producto = await productoService.crear({
    nombre: cuerpo.nombre,
    precio: cuerpo.precio,
    stock: cuerpo.stock,
  });
  return Response.json(productoADto(producto), {
    status: 201,
    headers: { Location: `/api/productos/${producto.id}` },
  });
}