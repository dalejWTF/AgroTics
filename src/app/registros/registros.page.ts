import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { RegistrosService } from './registros.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {

  plantas = [{title: 'test'}]
  
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.getPLantas();
  }

  getPLantas= () =>{
    this.api.getAllPlantas().subscribe(
      data=>{
        this.plantas=data;
      },
      error =>{
        console.log(error);
      }
    )
  }
  
}
