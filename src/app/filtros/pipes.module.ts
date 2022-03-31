import { NgModule } from '@angular/core';
import { FiltroProductosPipe } from './filtro-productos.pipe';
import { FiltroCategoriasPipe } from './filtro-categorias.pipe';

@NgModule({
  declarations: [FiltroProductosPipe, FiltroCategoriasPipe],
  exports: [FiltroProductosPipe, FiltroCategoriasPipe]
})
export class PipesModule { }