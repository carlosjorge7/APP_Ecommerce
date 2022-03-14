import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosFormComponent } from './usuarios/componentes/usuarios-form/usuarios-form.component';
import { ProductosFormComponent } from './productos/componentes/productos-form/productos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosFormComponent,
    ProductosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
