export interface Producto {
    idProducto?: number,
    sku: string,
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number,
    imagen: string | File,
    createdAt?: Date,
    idCategoria?: number,
}
