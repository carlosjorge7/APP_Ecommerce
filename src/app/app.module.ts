import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosFormComponent } from './usuarios/componentes/usuarios-form/usuarios-form.component';
import { ProductosFormComponent } from './productos/componentes/productos-form/productos-form.component';
import { HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosFormComponent,
    ProductosFormComponent,
    NavbarComponent,
    InicioComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
