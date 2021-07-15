export interface Registros {

    //Datos Generales
    id: number;
    idPlanta: number;
    ubicacion: string;
    fechaMuestreo: string;
    lugarLote: string;
    areaSembrada: number;
    fechaImplementacion: string;

    //Datos Fenologicos
    germinacion: number;
    altura: number;
    diametro: number;
    nroRacimos: number;
    nroFlores: number;
    nroFloresTotales: number;
    nroFrutos: number;
    nroFrutosTotales: number;
    longFruto: number;
    diametroFruto: number;
    pesoFruto: number;
    produccion: number;

    //Datos Suelo
    pHsuelo: number;
    mo: number;
    nitrogeno: number;
    fosforo: number;
    potasio: number;
    otrosElementos: string;

    //Datos Climaticos
    temperatura: number;
    humedadRelativa: number;
    RiegoLluvia: number;
    
    //Datos Fertilizantes
    ferFerAbono: string;
    cantidadFertilizante: number;
    fechaAplicacionFertilizante: string;

    //Datos Control Plagas
    controlPlagaEnfProd: string;
    cantidadProdPlaEnf: number;
    fechaAplicacionProdPlag: string;
}