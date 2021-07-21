import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plantas } from './registros/plantas.model';

@Injectable({
  providedIn: 'root'
})
export class ApiPlantasService {
  plantas=[]
  baseUrl = "http://127.0.0.1:8000/api/plantas/?format=json";
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getAllPlantas(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  //Obtener todos las plantas
  getPLantas = () => {
    this.getAllPlantas().subscribe(
      data => {
        this.plantas = data;
      },
      error => {
        console.log(error);
      }
    )
    return [...this.plantas]
  }
  //Obtener una sola planta
  getPlanta(registroId: string) {
    return {
      ...this.plantas.find(planta => {
        return planta.id === registroId
      })
    }
  }



}
