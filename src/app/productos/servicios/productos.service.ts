import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
