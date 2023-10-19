import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'splah',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'animales',
    loadChildren: () => import('./pages/animales/animales.module').then( m => m.AnimalesPageModule)
  },
  {
    path: 'herramientas',
    loadChildren: () => import('./pages/herramientas/herramientas.module').then( m => m.HerramientasPageModule)
  },
  {
    path: 'frutas',
    loadChildren: () => import('./pages/frutas/frutas.module').then( m => m.FrutasPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./pages/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'listado-f',
    loadChildren: () => import('./pages/listado-f/listado-f.module').then( m => m.ListadoFPageModule)
  },
  {
    path: 'listado-h',
    loadChildren: () => import('./pages/listado-h/listado-h.module').then( m => m.ListadoHPageModule)
  },
  {
    path: 'splah',
    loadChildren: () => import('./pages/splah/splah.module').then( m => m.SplahPageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
