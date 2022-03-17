import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../modelos/Producto';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos-preview',
  templateUrl: './productos-preview.component.html',
  styleUrls: ['./productos-preview.component.css']
})
export class ProductosPreviewComponent implements OnInit {

  esAdmin: boolean = false;

  idProducto: string = '';
  
  producto: Producto = {
    idProducto: 0,
    sku: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    imagen: '',
    idCategoria: 0
  }

  constructor(private productosService: ProductosService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.idProducto = res['idProducto'];
      // Llamamos al servicio
      this.productosService.getProducto(this.idProducto)
        .subscribe(res => {
          this.producto = res;
          console.log(this.producto)
      });
    });

    // Comprobamos si es admin
    if(localStorage.getItem('auth') === 'true') {
      this.esAdmin = true;
      console.log(this.esAdmin);
    }
  }

  public borrarProducto () {
    // Borramos producto
    if(this.esAdmin) {
      this.productosService.deleteProducto(this.idProducto)
        .subscribe(res => {
          console.log(res);
        });
      this.router.navigate(['/productos']);
    }

    
  }

}
