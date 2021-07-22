import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSeguimientoPage } from './edit-seguimiento.page';

const routes: Routes = [
  {
    path: '',
    component: EditSeguimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSeguimientoPageRoutingModule {}
