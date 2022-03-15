import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProductosFormComponent } from './productos/componentes/productos-form/productos-form.component';
import { ProductosPreviewComponent } from './productos/componentes/productos-preview/productos-preview.component';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule)
  },
  {
    path: 'usuarios/:registro',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'productos/:idProducto',
    component: ProductosPreviewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'productos-form',
    component: ProductosFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
