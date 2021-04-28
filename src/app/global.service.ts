import { Injectable } from '@angular/core';
import {Contacto } from './contacto';
import { Trayecto } from './Trayecto';
import { User } from './User';


/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class GlobalService {



  constructor() { }
  user1:Contacto = new Contacto (0, "Claudia Fernández Estebaranz", "637485365", "100366696@alumnos.uc3m.es",  "Trabajo" , "Sí", "","","" );
  user2:Contacto = new Contacto (1, "Ana López Camarero", "637035127", "1003666516@alumnos.uc3m.es",  "Compañero" ,"Sí" , "","","");
  user3:Contacto = new Contacto (2, "Javier Díaz Leyva", "631092365", "100383310@alumnos.uc3m.es",  "Personal" ,"No" , "","","");
  user4:Contacto = new Contacto (3, "Marina Boyero Torrente", "624762235", "1003666525@alumnos.uc3m.es", "Personal" ,"Sí", "","","" );


  trayecto1: Trayecto = new Trayecto (0,"Claudia Fernández", "Alcobendas", ["Majadahonda", "Las Rozas"], "9:00", 2, "Sí" );
  contactos: Contacto [] = [this.user1,this.user2, this.user3, this.user4];
  trayectos: Trayecto [] = [this.trayecto1];
  users: User [] = [];

  añadirTrayecto(trayecto: Trayecto){
    this.trayectos.push(trayecto);
  }
  añadirUser(user: User){
    this.users.push(user);
  }
  añadirContacto(contacto: Contacto){
    this.contactos.push(contacto);
  }




   getInfoTrayecto (id : any): any{
    for(let i=0; i<this.trayectos.length; i++){
      if(this.trayectos[i].id==id) return this.trayectos[i];

   }

   return 0;
  }

  deleteTrayecto(id:number){
    this.trayectos.forEach((element,index)=>{
      if(element.id==id) this.trayectos.splice(index,1);
   });
  }


}
