import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { Producto } from '../../modelos/Producto';
import { ProductosService } from '../../servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  // Imagen
  file: File | undefined;
  productoSelected: any;

  update: boolean = false;

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
              private activedRoute: ActivatedRoute,
              private router: Router) { }

  idProducto: number = 0;

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    this.idProducto = params['idProducto'];
    console.log(this.idProducto);
    if(this.idProducto) {
      // Llamamos al servicio de obtener producto
      this.productosService.getProducto(this.idProducto)
        .subscribe(res => {
          this.producto = res;
          this.update = true;
          console.log(this.producto)
      });
    }
  }

  fileToUpload: File | null = null;

  onProductoSelected(event: any): void {
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];

      // leemos el archivo
      const reader = new FileReader();
      reader.onload = e => this.productoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  public onSubmit(form: NgForm) {
    let producto: Producto = form.value;
    console.log(producto);

    let tipoOperacion: any;
    if(this.update) {
      tipoOperacion = this.productosService.updateProducto(this.idProducto, producto);
    }
    else{
      tipoOperacion = this.productosService.createProducto(producto.sku, producto.nombre, producto.descripcion, producto.precio, producto.stock, this.file);
    }
    
    tipoOperacion.subscribe((res: any) => {
        console.log(res);
         // Alerta
         Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/productos']);
    });
  }

}
