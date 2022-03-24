import { NgModule } from '@angular/core';
import { FiltroProductosPipe } from './filtro-productos.pipe';

@NgModule({
  declarations: [FiltroProductosPipe],
  exports: [FiltroProductosPipe]
})
export class PipesModule { }