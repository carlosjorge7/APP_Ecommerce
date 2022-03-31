import { Pipe, PipeTransform } from '@angular/core';
import { Categoria } from '../categorias/modelos/Categoria';

@Pipe({
  name: 'filtroCategorias'
})
export class FiltroCategoriasPipe implements PipeTransform {

  transform(categorias: Categoria[], valor: string): Categoria[] {
    if(valor.length == 0){
      return categorias;
    }
    valor = valor.toLowerCase();

    // tipo foreach --> la funcion filter devuelve al array filtrado
    return categorias.filter((categoria) => {
      return categoria.nombre.toLowerCase().includes(valor)
            || categoria.descripcion.includes(valor) 
      
    });
  }

}
