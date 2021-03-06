import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiPlantasService } from '../api-planta.service';
import { Taxonomia } from './taxonomia.model';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {

  plantas:any=[];

  constructor(private api: ApiPlantasService, private router: Router) {
    this.cargarPlantas();
   }
  ngOnInit() {
    this.cargarPlantas();
    
  }

  cargarPlantas=()=>{
    this.api.getAllPlantas().subscribe(
      data => {
        this.plantas = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  ionViewWillEnter() {
    this.cargarPlantas();
  }
  
  


}
