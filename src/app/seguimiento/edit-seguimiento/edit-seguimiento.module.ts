import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSeguimientoPageRoutingModule } from './edit-seguimiento-routing.module';

import { EditSeguimientoPage } from './edit-seguimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSeguimientoPageRoutingModule
  ],
  declarations: [EditSeguimientoPage]
})
export class EditSeguimientoPageModule {}
