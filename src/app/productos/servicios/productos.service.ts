import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private API = 'http://localhost:7777/api';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.API}/productos`);
  }

  createProducto(sku: string, nombre: string, descripcion: string, precio: number, stock: number, imagen: any): Observable<Producto> {
    let headers = new HttpHeaders();
    const token: any = localStorage.getItem('token');
    headers = headers.set('x-access-token', token);

    const producto = new FormData();
    producto.append('sku', sku);
    producto.append('nombre', nombre);
    producto.append('descripcion', descripcion);
    producto.append('precio', precio.toString());
    producto.append('stock', stock.toString());
    producto.append('imagen', imagen)

    return this.http.post<Producto>(`${this.API}/productos`, producto, {headers});
  }

  getProducto(idProducto: string | number): Observable<Producto>{
    return this.http.get<Producto>(`${this.API}/productos/${idProducto}`)
  }
}
