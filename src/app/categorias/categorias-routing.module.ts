import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasListComponent } from './componentes/categorias-list/categorias-list.component';

const routes: Routes = [
  {path: '', component: CategoriasListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
