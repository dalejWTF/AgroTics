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
  id: number;

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
      this.id = parseInt(paramMap.get('registroId'))
    
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
    this.idTaxonomia = data[this.id].idTaxonomia.id;
    this.nombre = data[this.id].idTaxonomia.nombreComun;
    this.nombreCientifico = data[this.id].idTaxonomia.nombreCientifico;
    this.genero = data[this.id].idTaxonomia.genero;
    this.familia = data[this.id].idTaxonomia.familia;
    this.especie = data[this.id].idTaxonomia.especie;

  }

  getGeneral(data: any) {
    this.imagen = data[this.id].imagen;
    this.altura = data[this.id].altura;
    this.cicloVida = data[this.id].cicloVida;
    this.clima = data[this.id].clima;
    this.diametro = data[this.id].diametro;
    this.origen = data[this.id].origen;
    this.preparacionTerreno = data[this.id].preparacionTerreno;
    this.produccionPromedio = data[this.id].produccionPromedio;
    this.usoAplicacion = data[this.id].usoAplicacion;
    this.categoria= data[this.id].idCategoria.categoria;
  }

  getCuidado(data: any) {
    this.abonoFertilizacion = data[this.id].idCuidado.abonoFertilizacion;
    this.recoleccion = data[this.id].idCuidado.recoleccion;
    this.controlMalasHierbas = data[this.id].idCuidado.controlMalasHierbas;
  }

  getRiego(data: any) {
    this.sistema = data[this.id].idRiego.sistema;
    this.detalle = data[this.id].idRiego.detalle;
    
  }











  ionViewWillEnter() {
    this.cargarPlantas();
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
