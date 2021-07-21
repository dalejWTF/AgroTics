import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiSeguimientoService } from '../api-seguimiento.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.page.html',
  styleUrls: ['./seguimiento.page.scss'],
})
export class SeguimientoPage implements OnInit {

  seguimiento:any=[];

  constructor(private api: ApiSeguimientoService, private router: Router) {
    this.cargarPlantas();
    
   }
  ngOnInit() {
    this.cargarPlantas();
  }

  cargarPlantas=()=>{
    this.api.getAllPlantas().subscribe(
      data => {
        this.seguimiento = data;
        console.log('seg',this.seguimiento)
      },
      error => {
        console.log(error);
      }
    )
  }

  ionViewWillEnter() {
    
    this.api.getAllPlantas().subscribe(
      data => {
        this.seguimiento = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
