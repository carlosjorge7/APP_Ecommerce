import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosListComponent } from './componentes/productos-list/productos-list.component';
import { PipesModule } from '../filtros/pipes.module';

@NgModule({
  declarations: [
    ProductosListComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule, 
    PipesModule
  ]
})
export class ProductosModule { }
