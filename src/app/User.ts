import { Time } from "@angular/common";

export interface IUser {
username: String ;
email: String ;
password: String;
tipo_conductor: Boolean ;
tipo_pasajero: Boolean ;
puntos_carnet: number;

}

export class User{
public username: String ;
public email: String ;
public password: String;
public tipo_conductor: Boolean ;
public tipo_pasajero: Boolean ;
public puntos_carnet: number;

constructor ( username: String, email:String, password:String, tipo_conductor:Boolean,tipo_pasajero:Boolean, puntos_carnet:number ){
 this.username = username;
 this.email = email;
 this.password = password;
 this.tipo_conductor = tipo_conductor;
 this.tipo_pasajero = tipo_pasajero;
 this. puntos_carnet = puntos_carnet;

}
}

