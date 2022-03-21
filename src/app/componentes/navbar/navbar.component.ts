import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'
import { UsuariosService } from 'src/app/usuarios/servicios/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logged: boolean = false;

  constructor(private router: Router,
              private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.logged = this.usuariosService.estaLoggeado();
  }

  public logout() {
    Swal.fire({
      title: '¿Cerrar sesion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('token');
          localStorage.removeItem('idUsuario');
          this.router.navigate(['/']);
          window.location.reload();
        }
        });
       // window.location.reload();
  }
      

}
