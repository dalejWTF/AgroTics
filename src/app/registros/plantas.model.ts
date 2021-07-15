export interface Plantas {
    
    //Atributos Generales Planta
    id: string;
    imageURL: string;
    cicloVida: string;
    origen: string;
    usoAplicacion: string;
    produccionPromedio: string;
    altura: number;
    diamentro: number;
    clima: string;
    preparacionTerreno: string;
    
    //Atributos: Taxonomia
    nombreComun: string;
    familia: string;
    genero: string;
    especie: string;
    nombreCientifico: string;
    
    //Atributos: Cuidado
    abonoFertilizacion: string;
    controlMalasHierbas: string;
    recoleccionAlmacenamiento: string;

    //Atributos: Plagas y Enfermedades
    nombre: string;
    
    //Atributos: Riego
    sistema: string;
    detalleRiego: string;

    //Atributos: Plantacion
    detallePlantacion: string;
    distanciaSurcos: string;
    distanciaPlantas: string;
    hilerasSurco: string;
    buenaAsociacion: string;
    malaAsociacion: string;

    //Atributos: Semillero
    descripcionSemillero: string;
    cantidadSemilla: string;

    //Atributos: Suelo
    textura: string;
    ph: string;
    tipoSuelo: string; //Se añade

    //Atributos: Humedad
    humedad: string;
    observaciones: string;  

    //Atributos: Morfología
    semilla: string;
    raiz: string;
    tallo: string;
    hojas: string;
    inflorescencia: string;
    //fruto se quitó    

    //Atributos: Temperatura
    optima: string;      //Cambio de tipo
    germinacion: string; //Cambio de tipo
    crecimiento: string; //Cambio de tipo
    descripcion: string;  

    //Atributos: Variedades
    variedad: string;

    //Atributos: Valor Nutricional
    detalle: string;
    valor: string;

    //Atributos: Epoca Siembra
    nombreEpoca: string;
    riegoEpoca: string; //Se agrega
    
    //Atributos: Zona Prouduccion o Region
    nombreRegion: string;
}