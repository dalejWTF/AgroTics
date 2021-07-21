import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ApiSeguimientoService } from 'src/app/api-seguimiento.service';

@Component({
  selector: 'app-detalle-seguimiento',
  templateUrl: './detalle-seguimiento.page.html',
  styleUrls: ['./detalle-seguimiento.page.scss'],
})
export class DetalleSeguimientoPage implements OnInit {
  
  finalId: number;
  id: string;
  seguimiento: any[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private api: ApiSeguimientoService, private alertController: AlertController) {
    this.cargarSeguimiento();
    
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('registroId')
      this.finalId = parseInt(this.id) - 1;
      this.cargarSeguimiento();
    })
  }

  cargarSeguimiento = () => {
    this.api.getAllSeguimientos().subscribe(
      data => {
        this.seguimiento = data;

      },
      error => {
        console.log(error);
      }
    )
  }













}
