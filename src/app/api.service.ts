import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl="http://192.168.68.110:8000";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http: HttpClient) { }

  getAllPlantas(): Observable<any>{
    return this.http.get(this.baseUrl + '/plantas/',{headers: this.httpHeaders});
  }
}
