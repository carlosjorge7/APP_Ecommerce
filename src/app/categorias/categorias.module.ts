import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasListComponent } from './componentes/categorias-list/categorias-list.component';
import { CategoriasFormComponent } from './componentes/categorias-form/categorias-form.component';


@NgModule({
  declarations: [
    CategoriasListComponent,
    CategoriasFormComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
