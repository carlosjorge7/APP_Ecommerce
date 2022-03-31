import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CategoriasFormComponent } from './categorias/componentes/categorias-form/categorias-form.component';
import { ProductosFormComponent } from './productos/componentes/productos-form/productos-form.component';

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
    component: ProductosFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'productos-form',
    component: ProductosFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'categorias/:idCategoria',
    component: CategoriasFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categorias-form',
    component: CategoriasFormComponent,
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
