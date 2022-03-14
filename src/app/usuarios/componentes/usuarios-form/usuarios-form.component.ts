import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../modelos/Usuario';
import { UsuariosService } from '../../servicios/usuarios.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  isRegistro: boolean = false;
  
  usuario: Usuario = {
    idUsuario: 0,
    email: '',
    contrasena: ''
  }

  constructor(private usuariosService: UsuariosService,
              private router: Router,
              private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const reg = this.activedRoute.snapshot.params;
    // console.log(reg);
    if(reg['registro'] === 'registro') {
      this.isRegistro = true;
    }
  }

  public onSubmit(form: NgForm) {
    let usuario: Usuario = form.value;

    let tipoOperacion: any;
    if(this.isRegistro) {
      tipoOperacion = this.usuariosService.registro(usuario);
    }
    else{
      tipoOperacion = this.usuariosService.login(usuario);
    }

    tipoOperacion.subscribe({
      next: (res: any) => { 
        // Seteamos el usuario
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('idUsuario', res.idUsuario);
        // Alerta
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1500
        });
        // Navegamos a la pagina principal
        this.router.navigate(['/productos']); 
      },
      error: () => { 
         // Alerta
         Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Usuario invalido',
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
  
}
