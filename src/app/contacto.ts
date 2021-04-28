
export interface IContacto {
   id: Number ;
   nombre: String ;
   telefono: String ;
   email: String;
   tipo: String; //Compañero,trabajo,personal
   habitual: Boolean ;
   direccion : String ;
   empresa : String ;
   cargo : String ;
}

export class Contacto{
  public id: number ;
  public nombre: String ;
  public telefono: String ;
  public email: String;
  public tipo: String; //Compañero,trabajo,personal
  public habitual: String ;
  public direccion : String;
  public empresa : String;
  public cargo : String ;

  constructor ( id:number, nombre:String, telefono:String, email:String, tipo:String,habitual:String, direccion:String, empresa : String, cargo : String ){
    this.id = id;
    this.nombre = nombre;
    this.telefono = telefono;
    this. email = email;
    this.tipo = tipo;
    this.habitual = habitual;
    this.direccion = direccion;
    this.empresa = empresa;
    this.cargo= cargo;
  }

}

