import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguimientoPage } from './seguimiento.page';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoPage
  },
  {
    path: 'detalle-seguimiento',
    loadChildren: () => import('./detalle-seguimiento/detalle-seguimiento.module').then( m => m.DetalleSeguimientoPageModule)
  },
  {
    path: 'edit-seguimiento',
    loadChildren: () => import('./edit-seguimiento/edit-seguimiento.module').then( m => m.EditSeguimientoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguimientoPageRoutingModule {}
