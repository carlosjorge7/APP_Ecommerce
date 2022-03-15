import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/Producto';
import { ProductosService } from '../../servicios/productos.service';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/servicios/usuarios.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  esAdmin: boolean = false;

  productos: Producto[] = [];

  constructor(private productosService: ProductosService,
              private router: Router) {}

  ngOnInit(): void {
    this.listar();
    // Si es admin o cliente
    if(localStorage.getItem('auth') === 'true') {
      this.esAdmin = true;
    }
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

  public nuevo() {
    this.router.navigate(['/productos-form']);
  }

  public selectedProducto(idProducto: any) {
    console.log(idProducto)
  }


}
