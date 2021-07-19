import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPlantasService } from '../api-planta.service';
import { RegistrosService } from './registros.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {

  plantas = []
  
  constructor(private api: ApiPlantasService, private router: Router) {}
  ngOnInit(): void {
    this.getPLantas();
  }

  getPLantas= () =>{
    this.api.getAllPlantas().subscribe(
      data=>{
        this.plantas=data;
        console.log(this.plantas);
      },
      error =>{
        console.log(error);
      }
    )
  }
  
}
