import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plantas } from '../plantas.model';
import { RegistrosService } from '../registros.service';

@Component({
  selector: 'app-add-registro',
  templateUrl: './add-registro.page.html',
  styleUrls: ['./add-registro.page.scss'],
})
export class AddRegistroPage implements OnInit {

  ubicacion:string;
  lugarLote:string;

  fechaMuestreo: string= new Date().toISOString();
  fechaImplementacion: string= new Date().toISOString();
  fechaAplicacionFertilizante: string= new Date().toISOString();
  fechaAplicacionProdPlag: string= new Date().toISOString();

  idPlanta;
  constructor(private registrosService: RegistrosService, private router: Router,
    private activatedRoute: ActivatedRoute) { }
  planta: Plantas
  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('registroId')
      this.planta = this.registrosService.getPlanta(id);
      this.idPlanta=id;
    })
  }

  saveRegistro(areaSembrada: HTMLInputElement, germinacion: HTMLInputElement, altura: HTMLInputElement, diametro: HTMLInputElement, nroRacimos: HTMLInputElement, nroFlores: HTMLInputElement, nroFloresTotales: HTMLInputElement, nroFrutos: HTMLInputElement, nroFrutosTotales: HTMLInputElement, longFruto: HTMLInputElement, diametroFruto: HTMLInputElement, pesoFruto: HTMLInputElement, produccion: HTMLInputElement, pHsuelo: HTMLInputElement,
  mo: HTMLInputElement, nitrogeno: HTMLInputElement, fosforo: HTMLInputElement, potasio: HTMLInputElement, otrosElementos: HTMLInputElement, temperatura: HTMLInputElement, humedadRelativa: HTMLInputElement, RiegoLluvia: HTMLInputElement,
  ferFerAbono: HTMLInputElement, cantidadFertilizante: HTMLInputElement, controlPlagaEnfProd: HTMLInputElement, cantidadProdPlaEnf: HTMLInputElement) {


    

    this.registrosService.addRegistro(this.idPlanta, this.ubicacion, this.fechaMuestreo, this.lugarLote, parseInt(areaSembrada.value), this.fechaImplementacion, parseInt(germinacion.value), parseInt(altura.value), parseInt(diametro.value), parseInt(nroRacimos.value), parseInt(nroFlores.value), parseInt(nroFloresTotales.value), parseInt(nroFrutos.value), parseInt(nroFrutosTotales.value), parseInt(longFruto.value), parseInt(diametroFruto.value), parseInt(pesoFruto.value), parseInt(produccion.value), parseInt(pHsuelo.value), parseInt(mo.value), parseInt(nitrogeno.value),  parseInt(fosforo.value),  parseInt(potasio.value), otrosElementos.value,  parseInt(temperatura.value),  parseInt(humedadRelativa.value),  parseInt(RiegoLluvia.value), ferFerAbono.value,  parseInt(cantidadFertilizante.value), this.fechaAplicacionFertilizante, controlPlagaEnfProd.value,  parseInt(cantidadProdPlaEnf.value), this.fechaAplicacionProdPlag);
    this.router.navigate(['/registros'])
  }

}
