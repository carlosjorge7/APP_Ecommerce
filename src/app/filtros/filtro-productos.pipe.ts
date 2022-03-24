import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../productos/modelos/Producto';

@Pipe({
  name: 'filtroProductos'
})
export class FiltroProductosPipe implements PipeTransform {

  transform(productos: Producto[], valor: string): Producto[] {
    if(valor.length == 0){
      return productos;
    }
    valor = valor.toLowerCase();

    // tipo foreach --> la funcion filter devuelve al array filtrado
    return productos.filter((producto) => {
      return producto.nombre.toLowerCase().includes(valor)
            || producto.descripcion.includes(valor) 
            || producto.precio.toString().includes(valor)
            || producto.stock.toString().includes(valor)
            || producto.sku.toString().includes(valor);
    });
  }

}
