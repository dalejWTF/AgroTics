import { Injectable } from '@angular/core';
import { Plantas } from './plantas.model';
import { Registros } from './registros.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  private registros: Registros[] = [];
  private plantas: Plantas[] = [
    {
      //Atributos Generales Planta
      id: '1',
      imageURL: 'https://viaorganica.org/wp-content/uploads/Mulch-en-lechuga.-Por-Rae-Allen-Flickr.jpg',
      cicloVida: 'Anual',
      origen: 'Procede de la India',
      usoAplicacion: 'Consumida en ensaladas crudas, gracias a sus sabores agradables. Contiene gran cantidad de fibra.',
      produccionPromedio: '66.000 a 90.000 plantas/ha',
      altura: 0.3,
      diamentro: 0.3,
      clima: 'Templado',
      preparacionTerreno: 'Se inicia con la nivelación y surcado junto con el hoyado (Aplicando la distancia de siembra entre planta y surco correspondiente), de preferencia unos 20 antes de la siembra para la solarización del suelo. Profundidad al menos de 25 cm. Además de ser posible se recomienda el uso de acolchados plásticos (negro).',

      //Atributos: Taxonomia
      nombreComun: 'Lechuga Seda',
      familia: 'Compuestas (Asteráceas)',
      genero: 'Lactuca',
      especie: 'Sativa',
      nombreCientifico: 'Lactuca sativa L.',

      //Atributos: Cuidado
      abonoFertilizacion: 'Cualquier abono orgánico (2 a 3 kg/m2). Mineral o químico: 60-120-40 kg NPK/ha',
      controlMalasHierbas: 'Eliminar plantas no deseadas (método manual o químico) debido a la competencia de luz y nutrientes',
      recoleccionAlmacenamiento: 'Entre los 90 y 120 días dependiendo de la variedad. Acorde a la compactación de la cabeza (aplicación de fuerza manual moderada al ser comprimida). Almacenar a temperaturas de 0 °C y 95 % de humedad relativa (maximiza el tiempo de vida)',

      //Atributos: Plagas y Enfermedades
      nombre: 'Trips (Frankliniella occidentalis). Pulgones (Myzus persicae, Macrosiphum solani y Narsonovia ribisnigri). Minadores (Liriomyza trifolii y Liriomyza huidobrensis). Antracnosis (Marssonina panattoniana). Botritis (Botrytis cinerea). Mildiu velloso (Bremia lactucae). Virus del mosaico de la lechuga (LMV).',

      //Atributos: Riego
      sistema: 'Riego por goteo (90% eficiencia)',
      detalleRiego: 'Deben ser frecuentes y con aplicaciones de poca cantidad de agua.',

      //Atributos: Plantacion
      detallePlantacion: 'En cama o camellones de 25 cm de altura, para evitar encharcamientos y posibles enfermedades por hongos. La densidad de siembra puede ir desde los 60 hasta las 130 mil plantas/ha, dependiendo de la variedad.',
      distanciaSurcos: '92 cm',
      distanciaPlantas: '30 cm',
      hilerasSurco: '2 hileras de planta por surco',
      buenaAsociacion: 'Cebolla, rábano, zanahoria, nabo, espinaca, esparrago, judía verde.',
      malaAsociacion: 'Coliflor, col, berros, apios, girasol.',

      //Atributos: Semillero
      descripcionSemillero: 'En bandejas de poliestireno o papel. Enterrar a 5 mm de profundidad la semilla. Riego constante. A los 21 estará lista para el trasplante. Se puede realizar también con el cepellón de la planta',
      cantidadSemilla: '1 a 2 kg/ha en siembra directa',

      //Atributos: Suelo
      textura: 'Media',
      ph: '6,6 a 7,3',
      tipoSuelo: 'Se adapta a diferentes tipos de suelos, ligeros, arenosos, limosos, con buen drenaje.',

      //Atributos: Humedad
      humedad: '60 a 80 %',
      observaciones: 'Sensible a la falta de humedad, Soporta mal las sequias',

      //Atributos: Morfología
      semilla: 'están provistas de un vilano plumoso',
      raiz: 'Alcanza los 25 cm de profundidad, es pivotante y con ramificaciones',
      tallo: 'cilíndrico y ramificado.',
      hojas: 'colocadas en roceta, con bordes liso, ondulado aserrado.',
      inflorescencia: 'son capítulos florales amarillos dispuestos en racimos o corimbos.',


      //Atributos: Temperatura
      optima: '12 a 18 °C',
      germinacion: '15 a 24 °C',
      crecimiento: '6 °C',
      descripcion: 'Moderadamente tolera las heladas',

      //Atributos: Variedades
      variedad: 'Romana, Acogolladas, De hojas sueltas, De esparrago',

      //Atributos: Valor Nutricional
      detalle: 'Carbohidratos 20,1 g. Proteínas 8,4 g. Grasas 1,3 g. Calorías 18 cal',
      valor: 'Rica en vitaminas',

      //Atributos: Epoca Siembra
      nombreEpoca: 'Invierno',
      riegoEpoca: 'Con riego todos los meses del año',

      //Atributos: Zona Prouduccion o Region
      nombreRegion: 'Sierra'
    },
    {

      //Atributos Generales Planta
      id: '2',
      imageURL: 'https://seminismexico.s3.amazonaws.com/app/uploads/2018/09/IMG_0254-copy.jpg',
      cicloVida: 'Anual',
      origen: 'Sudamérica',
      usoAplicacion: 'Consumida en ensaladas crudas, gracias a sus sabores agradables. Contiene gran cantidad de fibra.',
      produccionPromedio: '66.000 a 90.000 plantas/ha',
      altura: 0.3,
      diamentro: 0.3,
      clima: 'Templado',
      preparacionTerreno: 'Se inicia con la nivelación y surcado junto con el hoyado (Aplicando la distancia de siembra entre planta y surco correspondiente), de preferencia unos 20 antes de la siembra para la solarización del suelo. Profundidad al menos de 25 cm. Además de ser posible se recomienda el uso de acolchados plásticos (negro).',

      //Atributos: Taxonomia
      nombreComun: 'Pimiento',
      familia: 'Solanaceae',
      genero: 'Capsicum',
      especie: 'Capsicum annuum L.',
      nombreCientifico: 'Capsicum',

      //Atributos: Cuidado
      abonoFertilizacion: 'Cualquier abono orgánico (2 a 3 kg/m2). Mineral o químico: 60-120-40 kg NPK/ha',
      controlMalasHierbas: 'Eliminar plantas no deseadas (método manual o químico) debido a la competencia de luz y nutrientes',
      recoleccionAlmacenamiento: 'Entre los 90 y 120 días dependiendo de la variedad. Acorde a la compactación de la cabeza (aplicación de fuerza manual moderada al ser comprimida). Almacenar a temperaturas de 0 °C y 95 % de humedad relativa (maximiza el tiempo de vida)',

      //Atributos: Plagas y Enfermedades
      nombre: 'Trips (Frankliniella occidentalis). Pulgones (Myzus persicae, Macrosiphum solani y Narsonovia ribisnigri). Minadores (Liriomyza trifolii y Liriomyza huidobrensis). Antracnosis (Marssonina panattoniana). Botritis (Botrytis cinerea). Mildiu velloso (Bremia lactucae). Virus del mosaico de la lechuga (LMV).',

      //Atributos: Riego
      sistema: 'Riego por goteo (90% eficiencia)',
      detalleRiego: 'Deben ser frecuentes y con aplicaciones de poca cantidad de agua.',

      //Atributos: Plantacion
      detallePlantacion: 'En cama o camellones de 25 cm de altura, para evitar encharcamientos y posibles enfermedades por hongos. La densidad de siembra puede ir desde los 60 hasta las 130 mil plantas/ha, dependiendo de la variedad.',
      distanciaSurcos: '92 cm',
      distanciaPlantas: '30 cm',
      hilerasSurco: '2 hileras de planta por surco',
      buenaAsociacion: 'Cebolla, rábano, zanahoria, nabo, espinaca, esparrago, judía verde.',
      malaAsociacion: 'Coliflor, col, berros, apios, girasol.',

      //Atributos: Semillero
      descripcionSemillero: 'En bandejas de poliestireno o papel. Enterrar a 5 mm de profundidad la semilla. Riego constante. A los 21 estará lista para el trasplante. Se puede realizar también con el cepellón de la planta',
      cantidadSemilla: '1 a 2 kg/ha en siembra directa',

      //Atributos: Suelo
      textura: 'Media',
      ph: '6,6 a 7,3',
      tipoSuelo: 'Se adapta a diferentes tipos de suelos, ligeros, arenosos, limosos, con buen drenaje.',

      //Atributos: Humedad
      humedad: '60 a 80 %',
      observaciones: 'Sensible a la falta de humedad, Soporta mal las sequias',

      //Atributos: Morfología
      semilla: 'están provistas de un vilano plumoso',
      raiz: 'Alcanza los 25 cm de profundidad, es pivotante y con ramificaciones',
      tallo: 'cilíndrico y ramificado.',
      hojas: 'colocadas en roceta, con bordes liso, ondulado aserrado.',
      inflorescencia: 'son capítulos florales amarillos dispuestos en racimos o corimbos.',


      //Atributos: Temperatura
      optima: '12 a 18 °C',
      germinacion: '15 a 24 °C',
      crecimiento: '6 °C',
      descripcion: 'Moderadamente tolera las heladas',

      //Atributos: Variedades
      variedad: 'Romana, Acogolladas, De hojas sueltas, De esparrago',

      //Atributos: Valor Nutricional
      detalle: 'Carbohidratos 20,1 g. Proteínas 8,4 g. Grasas 1,3 g. Calorías 18 cal',
      valor: 'Rica en vitaminas',

      //Atributos: Epoca Siembra
      nombreEpoca: 'Invierno',
      riegoEpoca: 'Con riego todos los meses del año',

      //Atributos: Zona Prouduccion o Region
      nombreRegion: 'Sierra'

    }
  ]

  constructor() { }
  //Obtener todos las plantas
  getPlantas() {
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

  //Añadir Registro
  addRegistro(id, ubicacion: string, fechaMuestreo: string, lugarLote: string, areaSembrada: number, fechaImplementacion: string, germinacion: number, altura: number, diametro: number, nroRacimos: number, nroFlores: number, nroFloresTotales: number,
    nroFrutos: number, nroFrutosTotales: number, longFruto: number, diametroFruto: number, pesoFruto: number, produccion: number, pHsuelo: number,
    mo: number, nitrogeno: number, fosforo: number, potasio: number, otrosElementos: string, temperatura: number, humedadRelativa: number, RiegoLluvia: number,
    ferFerAbono: string, cantidadFertilizante: number, fechaAplicacionFertilizante: string, controlPlagaEnfProd: string, cantidadProdPlaEnf: number, fechaAplicacionProdPlag: string) {


    this.registros.push({
      //Generales
      id: this.registros.length + 1,
      idPlanta: parseInt(id),
      ubicacion,
      fechaMuestreo,
      lugarLote,
      areaSembrada,
      fechaImplementacion,

      //Fenologicos
      germinacion,
      altura,
      diametro,
      nroRacimos,
      nroFlores,
      nroFloresTotales,
      nroFrutos,
      nroFrutosTotales,
      longFruto,
      diametroFruto,
      pesoFruto,
      produccion,

      //Suelo
      pHsuelo,
      mo,
      nitrogeno,
      fosforo,
      potasio,
      otrosElementos,

      //Climaticos
      temperatura,
      humedadRelativa,
      RiegoLluvia,

      //Fertilizantes
      ferFerAbono,
      cantidadFertilizante,
      fechaAplicacionFertilizante,

      //Control Plagas
      controlPlagaEnfProd,
      cantidadProdPlaEnf,
      fechaAplicacionProdPlag


    });
    console.log('tamaño: ', this.registros.length)
    for (let index = 0; index < this.registros.length; index++) {
      console.log(this.registros[index]);

    }

  }
  //Eliminar planta
  deletePlanta(registroId: string) {
    this.plantas = this.plantas.filter(planta => {
      return planta.id !== registroId
    });
  }

}
