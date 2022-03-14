export interface Producto {
    idProducto?: number,
    sku: string,
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number,
    imagen: string,
    createdAt: Date,
    idCategoria: number,
}