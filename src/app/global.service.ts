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
  


  trayecto1: Trayecto = new Trayecto (0,"Claudia Fernández", "Alcobendas", ["Majadahonda", "Las Rozas"], "9:00", 2, "Sí" );
  user1: User = new User ("claudia", "claudia", "claudia", false, true, 15);
  contactos: Contacto [] = [];
  trayectos: Trayecto [] = [this.trayecto1];
  users: User [] = [this.user1];

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
