import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../modelos/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private API = 'http://localhost:7777/api';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]>{
    let headers = new HttpHeaders();
    const token: any = localStorage.getItem('token');
    headers = headers.set('x-access-token', token);
    return this.http.get<Categoria[]>(`${this.API}/categorias`, {headers});
  }

  createCategoria(categoria: Categoria): Observable<Categoria> {
    let headers = new HttpHeaders();
    const token: any = localStorage.getItem('token');
    headers = headers.set('x-access-token', token);
    return this.http.post<Categoria>(`${this.API}/categorias`, categoria, {headers});
  }

  getCategoria(idCategoria: string | number): Observable<Categoria>{
    let headers = new HttpHeaders();
    const token: any = localStorage.getItem('token');
    headers = headers.set('x-access-token', token);
    return this.http.get<Categoria>(`${this.API}/categorias/${idCategoria}`, {headers});
  }

  deleteCategoria(idCategoria: string | number): Observable<Categoria>{
    let headers = new HttpHeaders();
    const token: any = localStorage.getItem('token');
    headers = headers.set('x-access-token', token);
    return this.http.delete<Categoria>(`${this.API}/categorias/${idCategoria}`, {headers});
  }

  updateCategoria(idCategoria: string | number, categoria: Categoria) {
    let headers = new HttpHeaders();
    const token: any = localStorage.getItem('token');
    headers = headers.set('x-access-token', token);
    return this.http.put<Categoria>(`${this.API}/categorias/${idCategoria}`, categoria,  {headers});
  }
}
