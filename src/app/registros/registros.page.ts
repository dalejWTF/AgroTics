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
  plantaB=[]
  taxonomia: Taxonomia;

  constructor(private api: ApiPlantasService, private router: Router) {
    this.cargarPlantas();
    
   }
  ngOnInit() {
    console.log('inicio',this.plantas);
    this.cargarPlantas();
    
  }

  cargarPlantas=()=>{
    this.api.getAllPlantas().subscribe(
      data => {
        this.plantas = data;
        this.plantaB=this.plantas;
        this.taxonomia=this.plantas[0].idTaxonomia;
        console.log(this.plantas)
      },
      error => {
        console.log(error);
      }
    )
  }

  ionViewWillEnter() {
    
    this.api.getAllPlantas().subscribe(
      data => {
        this.plantas = data;
        this.taxonomia=this.plantas[0].idTaxonomia;
        
      },
      error => {
        console.log(error);
      }
    )
  }
  
  


}
