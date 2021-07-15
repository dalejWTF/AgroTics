import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Plantas } from '../plantas.model';
import { RegistrosService } from '../registros.service';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.page.html',
  styleUrls: ['./detalle-registro.page.scss'],
})
export class DetalleRegistroPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private registrosService: RegistrosService, private alertController: AlertController) { }
  planta: Plantas

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('registroId')
      this.planta = this.registrosService.getPlanta(id);
      
    })
  }

  async deleteRegistro() {
    const alertElement = await this.alertController.create({
      header: 'Eliminar Registro',
      message: 'Estas seguro de eliminarlo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.registrosService.deletePlanta(this.planta.id);
            this.router.navigate(['/registros']);
          }
        }
      ]
    });
    await alertElement.present();

  }

  addNewRegistro(id){
    this.router.navigate(['/registros/newRegistro',id])
  }
}
