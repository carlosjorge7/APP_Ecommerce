import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/Producto';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.productosService.getProductos().subscribe({
      next: (res) => {
        console.log(res);
        this.productos = res;
      },
      error: () => {

      }
    })
  }


}
