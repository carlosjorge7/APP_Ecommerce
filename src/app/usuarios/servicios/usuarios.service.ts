import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelos/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private API = 'http://localhost:7777/api/usuarios';

  constructor(public http: HttpClient) { }

  public login(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API}/login`, usuario);
  }

  public registro(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API}/registro`, usuario);
  }
  
  public estaLoggeado(): boolean {
    if(localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
