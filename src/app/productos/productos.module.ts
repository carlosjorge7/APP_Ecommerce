import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosListComponent } from './componentes/productos-list/productos-list.component';
import { ProductosPreviewComponent } from './componentes/productos-preview/productos-preview.component';


@NgModule({
  declarations: [
    ProductosListComponent,
    ProductosPreviewComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
