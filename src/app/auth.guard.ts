import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from './usuarios/servicios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

 constructor(private usuarioService: UsuariosService, private router: Router){}

  canActivate(): boolean {
    if(this.usuarioService.estaLoggeado()){
      return true;
    }
    this.router.navigate(['/usuarios']);
    return false;
  }
  
}
