import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from '../../modelos/Producto';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  isUpdate: boolean = false;

  // Imagen
  file: File | undefined;
  productoSelected: string | ArrayBuffer | undefined;

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

  constructor() { }

  ngOnInit(): void {
  }

  onProductoSelected(event: Event): void {
   
  }

  public onSubmit(form: NgForm) {

  }

}
