import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios/servicios/usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  logged: boolean = false;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.logged = this.usuariosService.estaLoggeado();
  }

}
