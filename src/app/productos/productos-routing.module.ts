import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosFormComponent } from './componentes/productos-form/productos-form.component';
import { ProductosListComponent } from './componentes/productos-list/productos-list.component';

const routes: Routes = [
  {path: '', component: ProductosListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
