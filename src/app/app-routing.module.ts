import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'plantas',
    loadChildren: () => import('./plantas/plantas.module').then( m => m.PlantasPageModule)
  },
  {
    path: 'registros',
    children: [
      {
        path: '',
        loadChildren: () => import('./registros/registros.module').then( m => m.RegistrosPageModule)
      },
      {
        path: ":registroId",
        loadChildren: () => import('./registros/detalle-registro/detalle-registro.module').then( m => m.DetalleRegistroPageModule)

      }
    ]
  },
  {
    path: 'registros/newRegistro',
    children: [
      {
        path: '',
        loadChildren: () => import('./registros/add-registro/add-registro.module').then( m => m.AddRegistroPageModule)
      },
      {
        path: ":registroId",
        loadChildren: () => import('./registros/add-registro/add-registro.module').then( m => m.AddRegistroPageModule)

      }
    ]
    
  },
  {
    path: 'seguimiento',
    loadChildren: () => import('./seguimiento/seguimiento.module').then( m => m.SeguimientoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
