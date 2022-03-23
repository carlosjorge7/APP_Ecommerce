import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/Producto';
import { ProductosService } from '../../servicios/productos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  public borrarProducto (idProducto: any) {
    Swal.fire({
      title: '¿Borrar producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir!'
      }).then((result) => {
        if (result.isConfirmed) {
          // Borramos producto
          this.productosService.deleteProducto(idProducto)
            .subscribe((res: any) => {
            console.log(res);
            // Alerta
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: res.message,
              showConfirmButton: false,
              timer: 1500
            });
            this.listar();
          });    
        }
      });
  }

  private delay(): void {
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }



}
