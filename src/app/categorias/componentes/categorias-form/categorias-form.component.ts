import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../modelos/Categoria';
import { CategoriasService } from '../../servicios/categorias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})
export class CategoriasFormComponent implements OnInit {

  update: boolean = false;

  categoria: Categoria = {
    idCategoria: 0,
    nombre: '',
    descripcion: ''
  }

  constructor(private categoriasService: CategoriasService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  idCategoria: number = 0;

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.idCategoria = params['idCategoria'];
    console.log(this.idCategoria);
    if(this.idCategoria) {
      // Llamamos al servicio de obtener producto
      this.categoriasService.getCategoria(this.idCategoria)
        .subscribe(res => {
          this.categoria = res;
          this.update = true;
          console.log(this.categoria)
      });
    }
  }

  public onSubmit(form: NgForm) {
    let categoria: Categoria = form.value;
    console.log(categoria);

    let tipoOperacion: any;
    if(this.update) {
      tipoOperacion = this.categoriasService.updateCategoria(this.idCategoria, categoria)
    }
    else{
      tipoOperacion = this.categoriasService.createCategoria(categoria)
    }
    
    tipoOperacion.subscribe((res: any) => {
        console.log(res);
         // Alerta
         Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/categorias']);
    });
  }

}
