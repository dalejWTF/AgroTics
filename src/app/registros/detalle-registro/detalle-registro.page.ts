import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ApiPlantasService } from 'src/app/api-planta.service';


@Component({
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.page.html',
  styleUrls: ['./detalle-registro.page.scss'],
})
export class DetalleRegistroPage implements OnInit {
  plantas: any[];
  finalId: number;
  id: string;


  //Var Planta General
  imagen: string; altura: string; cicloVida: string; clima: string; diametro: string; idPlanta: string;
  origen: string; preparacionTerreno: string; produccionPromedio: string; usoAplicacion: string;  categoria: string;

  //Var Taxonomia
  nombreCientifico: string; genero: string; familia: string; especie: string; nombre: string; idTaxonomia: string;

  //Var Cuidado
  abonoFertilizacion: string; recoleccion: string; controlMalasHierbas: string;

  //Var Riego
  sistema: string;  detalle: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private api: ApiPlantasService, private alertController: AlertController) {
    this.cargarPlantas();
    
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('registroId')
      this.finalId = parseInt(this.id) - 1;
    })
  }

  cargarPlantas = () => {
    this.api.getAllPlantas().subscribe(
      data => {
        this.plantas = data;
        this.getTaxonomia(data);
        this.getGeneral(data);
        this.getCuidado(data);
        this.getRiego(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  getTaxonomia(data: any) {
    this.idTaxonomia = data[this.finalId].idTaxonomia.id;
    this.nombre = data[this.finalId].idTaxonomia.nombreComun;
    this.nombreCientifico = data[this.finalId].idTaxonomia.nombreCientifico;
    this.genero = data[this.finalId].idTaxonomia.genero;
    this.familia = data[this.finalId].idTaxonomia.familia;
    this.especie = data[this.finalId].idTaxonomia.especie;

  }

  getGeneral(data: any) {
    this.imagen = data[this.finalId].imagen;
    this.altura = data[this.finalId].altura;
    this.cicloVida = data[this.finalId].cicloVida;
    this.clima = data[this.finalId].clima;
    this.diametro = data[this.finalId].diametro;
    this.origen = data[this.finalId].origen;
    this.preparacionTerreno = data[this.finalId].preparacionTerreno;
    this.produccionPromedio = data[this.finalId].produccionPromedio;
    this.usoAplicacion = data[this.finalId].usoAplicacion;
    this.categoria= data[this.finalId].idCategoria.categoria;
  }

  getCuidado(data: any) {
    this.abonoFertilizacion = data[this.finalId].idCuidado.abonoFertilizacion;
    this.recoleccion = data[this.finalId].idCuidado.recoleccion;
    this.controlMalasHierbas = data[this.finalId].idCuidado.controlMalasHierbas;
  }

  getRiego(data: any) {
    this.sistema = data[this.finalId].idRiego.sistema;
    this.detalle = data[this.finalId].idRiego.detalle;
    
  }











  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('registroId')
      this.finalId = parseInt(id) - 1;
      console.log(this.finalId);
      this.api.getAllPlantas().subscribe(
        data => {
          const plantas = data;
          this.nombre = plantas[this.finalId].idTaxonomia.nombreComun;

        },
        error => {
          console.log(error);
        }
      )
    })
  }

  async deleteRegistro() {
    const alertElement = await this.alertController.create({
      header: 'Eliminar Registro',
      message: 'Estas seguro de eliminarlo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            //this.registrosService.deletePlanta(this.planta.id);
            this.router.navigate(['/registros']);
          }
        }
      ]
    });
    await alertElement.present();

  }

  addNewRegistro(id) {
    this.router.navigate(['/registros/newRegistro', id])
  }
}
