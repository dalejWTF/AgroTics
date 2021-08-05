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


  //Variables iniciales necesaria
  id: number;
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
      this.id = parseInt(paramMap.get('registroId'))
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
    this.nombre = data[this.id].idPlanta.idTaxonomia.nombreComun;
    this.imagen = data[this.id].idPlanta.imagen;
    this.fechaImplementacion = data[this.id].fechaImplementacion;
    this.lote = data[this.id].idDatosUbicacion.lote;
    this.pesoFruto = data[this.id].idDatosFenologicosCultivo.pesoFruto;
    this.pesoProduccion = data[this.id].idDatosFenologicosCultivo.pesoProduccion;
    this.altura = data[this.id].idDatosFenologicosCultivo.altura;
    this.diametro = data[this.id].idDatosFenologicosCultivo.diametro;
    this.germinacion= data[this.id].idDatosFenologicosCultivo.germinacion;
  }

  getSuelo(data: any) {
    this.fosforo = data[this.id].idDatosAnalisisSuelo.fosforo;
    this.mo = data[this.id].idDatosAnalisisSuelo.mo;
    this.nitrogeno = data[this.id].idDatosAnalisisSuelo.nitrogeno;
    this.ph = data[this.id].idDatosAnalisisSuelo.ph;
    this.potasio = data[this.id].idDatosAnalisisSuelo.potasio;
  }

  getClima(data: any) {
    this.humedad = data[this.id].idDatosClima.humedad;
    this.riego = data[this.id].idDatosClima.riego;
    this.temperatura = data[this.id].idDatosClima.temperatura;
  }

  getPlagas(data: any) {
    this.cantidadCtrlPlagas = data[this.id].idDatosControlPlagas.cantidad;
    this.controlPlagas = data[this.id].idDatosControlPlagas.controlPlaga;
    this.fechaAplicacion = data[this.id].idDatosControlPlagas.fechaAplicacion;
  }

  getFertilizante(data: any) {
    this.cantidadFertilizante = data[this.id].idDatosFertilizante.cantidad;
    this.fechaAplicacionFertilizante = data[this.id].idDatosFertilizante.fechaAplicacion;
    this.fertilizacion = data[this.id].idDatosFertilizante.fertilizacion;
  }

}
