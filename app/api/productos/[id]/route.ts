import { NotFoundError } from "@/lib/http/errors";
import { productoADto } from "@/lib/productos/producto.mapper";
import { productoService } from "@/lib/productos";

export async function GET(
  _request: Request,
  ctx: RouteContext<"/api/productos/[id]">,
) {
  const { id } = await ctx.params;
  try {
    const producto = await productoService.obtener(id);
    return Response.json(productoADto(producto));
  } catch (error) {
    if (error instanceof NotFoundError) {
      return Response.json({ mensaje: error.message }, { status: 404 });
    }
    throw error;
  }
}

export async function PUT(
  request: Request,
  ctx: RouteContext<"/api/productos/[id]">,
) {
  const { id } = await ctx.params;
  const cuerpo = await request.json();
  try {
    const producto = await productoService.actualizar(id, {
      nombre: cuerpo.nombre,
      precio: cuerpo.precio,
      stock: cuerpo.stock,
    });
    return Response.json(productoADto(producto));
  } catch (error) {
    if (error instanceof NotFoundError) {
      return Response.json({ mensaje: error.message }, { status: 404 });
    }
    throw error;
  }
}

export async function DELETE(
  _request: Request,
  ctx: RouteContext<"/api/productos/[id]">,
) {
  const { id } = await ctx.params;
  try {
    await productoService.eliminar(id);
    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof NotFoundError) {
      return Response.json({ mensaje: error.message }, { status: 404 });
    }
    throw error;
  }
}