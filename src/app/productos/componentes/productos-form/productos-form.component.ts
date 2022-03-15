import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../../modelos/Producto';
import { ProductosService } from '../../servicios/productos.service';


@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  // Imagen
  file: File | undefined;
  productoSelected: any;

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
              private router: Router) { }

  ngOnInit(): void {
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
    console.log(producto)
    
    this.productosService.createProducto(producto.sku, producto.nombre, producto.descripcion, producto.precio, producto.stock, this.file)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/productos']);
    });
  }

}
