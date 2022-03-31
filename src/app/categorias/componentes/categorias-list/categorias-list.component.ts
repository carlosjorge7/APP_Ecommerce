import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../modelos/Categoria';
import { CategoriasService } from '../../servicios/categorias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})
export class CategoriasListComponent implements OnInit {

  categorias: Categoria[] = [];

  textoBuscar: string = '';

  constructor(private categoriasService: CategoriasService,
              private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.categoriasService.getCategorias().subscribe(res => {
      this.categorias = res;
    });
  }

  public nueva(){
    alert('hola')
  }

  public borrarCategoria(idCategoria: any) {
      Swal.fire({
        title: '¿Borrar categoria?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar!'
        }).then((result) => {
          if (result.isConfirmed) {
            // Borramos producto
            this.categoriasService.deleteCategoria(idCategoria)
              .subscribe((res: any) => {
              console.log(res);
              // Alerta
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: res.message,
                showConfirmButton: false,
                timer: 1500
              });
              this.listar();
            });    
          }
        });
  }
}
