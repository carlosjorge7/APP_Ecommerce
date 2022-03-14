import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router) {}

  logout() {
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
          }
        });
      }
}
