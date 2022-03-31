import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasListComponent } from './componentes/categorias-list/categorias-list.component';
import { CategoriasFormComponent } from './componentes/categorias-form/categorias-form.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../filtros/pipes.module';


@NgModule({
  declarations: [
    CategoriasListComponent,
    CategoriasFormComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    FormsModule,
    PipesModule
  ]
})
export class CategoriasModule { }
