import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSeguimientoPageRoutingModule } from './detalle-seguimiento-routing.module';

import { DetalleSeguimientoPage } from './detalle-seguimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSeguimientoPageRoutingModule
  ],
  declarations: [DetalleSeguimientoPage]
})
export class DetalleSeguimientoPageModule {}
