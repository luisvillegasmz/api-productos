// Errores de la aplicación. El servicio los lanza; la capa HTTP los traduce.
export class AppError extends Error {
  constructor(
    public readonly status: number,
    public readonly code: string,
    message: string,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export class NotFoundError extends AppError {
  constructor(recurso: string, id: string) {
    super(404, "no_encontrado", `${recurso} con id ${id} no existe`);
  }
}