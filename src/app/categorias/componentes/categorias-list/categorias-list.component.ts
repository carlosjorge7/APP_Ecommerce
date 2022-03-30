import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../modelos/Categoria';
import { CategoriasService } from '../../servicios/categorias.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})
export class CategoriasListComponent implements OnInit {

  categorias: Categoria[] = [];

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

  }
}
