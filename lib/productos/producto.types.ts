// Modelo de dominio: en el código usamos camelCase.

export type Producto = {
  id: string;
  nombre: string;
  precio: number;
  stock: number;
  creadoEn: Date;
};

export type NuevoProducto = {
  nombre: string;
  precio: number;
  stock: number;
};

export type CambiosProducto = Partial<NuevoProducto>;