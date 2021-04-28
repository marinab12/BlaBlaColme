import { Time } from "@angular/common";

export interface ITrayecto {
   id: number ;
   origen: String ;
   lugares_cercanos: String[] ;
   plazas: number;
   desvio: String ;

}

export class Trayecto{
  public id: number ;
  public creator: String;
  public origen: String ;
  public lugares_cercanos: String[] ;
  public hora_llegada: String;
  public plazas: number;
  public desvio: String ;

  constructor ( id:number, creator: String, origen:String, lugares_cercanos:String[], hora_llegada: String, plazas:number, desvio:String ){
    this.id = id;
    this.creator = creator;
    this.origen = origen;
    this.lugares_cercanos = lugares_cercanos;
    this.hora_llegada = hora_llegada;
    this. plazas = plazas;
    this.desvio = desvio;

  }

}

