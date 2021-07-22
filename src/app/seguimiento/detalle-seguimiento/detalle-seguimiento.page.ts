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


  //Variables iniciales necesarias
  finalId: number;
  id: string;
  seguimiento: any[];

  //Var Datos Fenológicos Cultivo
  nombre: string; imagen: string; fechaImplementacion: string; lote: string; pesoFruto: string;
  pesoProduccion: string; altura: string; diametro: string;  germinacion: string;

  //Var Datos Analisis Suelo
  fosforo: string; mo: string; nitrogeno: string; ph: string; potasio: string;

  //Var Datos Clima
  humedad: string; riego: string; temperatura: string;

  //Var Datos Control de Plagas
  cantidadCtrlPlagas: string; controlPlagas: string; fechaAplicacion: string;

  //Var Datos Fertilizante
  cantidadFertilizante: string; fechaAplicacionFertilizante: string; fertilizacion: string;


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

  ionViewWillEnter() {
    this.cargarSeguimiento();
  }


  cargarSeguimiento = () => {
    this.api.getAllSeguimientos().subscribe(
      data => {
        this.seguimiento = data;
        this.getFenologicosCultivo(data);
        this.getSuelo(data);
        this.getClima(data);
        this.getPlagas(data);
        this.getFertilizante(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  getFenologicosCultivo(data: any) {
    this.nombre = data[this.finalId].idPlanta.idTaxonomia.nombreComun;
    this.imagen = data[this.finalId].idPlanta.imagen;
    this.fechaImplementacion = data[this.finalId].fechaImplementacion;
    this.lote = data[this.finalId].idDatosUbicacion.lote;
    this.pesoFruto = data[this.finalId].idDatosFenologicosCultivo.pesoFruto;
    this.pesoProduccion = data[this.finalId].idDatosFenologicosCultivo.pesoProduccion;
    this.altura = data[this.finalId].idDatosFenologicosCultivo.altura;
    this.diametro = data[this.finalId].idDatosFenologicosCultivo.diametro;
    this.germinacion= data[this.finalId].idDatosFenologicosCultivo.germinacion;
  }

  getSuelo(data: any) {
    this.fosforo = data[this.finalId].idDatosAnalisisSuelo.fosforo;
    this.mo = data[this.finalId].idDatosAnalisisSuelo.mo;
    this.nitrogeno = data[this.finalId].idDatosAnalisisSuelo.nitrogeno;
    this.ph = data[this.finalId].idDatosAnalisisSuelo.ph;
    this.potasio = data[this.finalId].idDatosAnalisisSuelo.potasio;
  }

  getClima(data: any) {
    this.humedad = data[this.finalId].idDatosClima.humedad;
    this.riego = data[this.finalId].idDatosClima.riego;
    this.temperatura = data[this.finalId].idDatosClima.temperatura;
  }

  getPlagas(data: any) {
    this.cantidadCtrlPlagas = data[this.finalId].idDatosControlPlagas.cantidad;
    this.controlPlagas = data[this.finalId].idDatosControlPlagas.controlPlaga;
    this.fechaAplicacion = data[this.finalId].idDatosControlPlagas.fechaAplicacion;
  }

  getFertilizante(data: any) {
    this.cantidadFertilizante = data[this.finalId].idDatosFertilizante.cantidad;
    this.fechaAplicacionFertilizante = data[this.finalId].idDatosFertilizante.fechaAplicacion;
    this.fertilizacion = data[this.finalId].idDatosFertilizante.fertilizacion;
  }

}
