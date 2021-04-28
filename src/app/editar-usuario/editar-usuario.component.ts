import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import {Contacto} from '../contacto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  nombre: String = "";
  telefono: String = "";
  email: String = "";
  tipo: String = "";
  habitual : boolean = false;
  id: number = 4;
  habitual_aux : String ="";
  direccion : String ="";
  empresa : String ="";
  cargo : String ="";
  input2: number = 0;

  constructor(public gs: GlobalService, route: ActivatedRoute) {
    this.input2 = route.snapshot.params.id;
    //console.log("hola"+this.input);
    this.gs.contactos.forEach((element,index)=>{
      if(element.id==this.input2){
        this.input2 = index;
      }
    });
    if (this.gs.contactos[this.input2].habitual == "Sí") {this.habitual = true;}
    this.tipo = this.gs.contactos[this.input2].tipo;
    this.telefono = this.gs.contactos[this.input2].telefono;
    this.nombre = this.gs.contactos[this.input2].nombre;
    this.email = this.gs.contactos[this.input2].email;
    this.direccion = this.gs.contactos[this.input2].direccion;
    this.empresa = this.gs.contactos[this.input2].empresa;
    this.cargo = this.gs.contactos[this.input2].cargo;
  }
  ngOnInit(): void {
  }

  public saveCambios(){

    this.gs.contactos.forEach((element,index)=>{
      if(element.id==this.input2){
        element.nombre = this.nombre;
        element.telefono = this.telefono;
        element.email = this.email;
        element.tipo = this.tipo;
        if (this.habitual == true){
          element.habitual = "Sí";
          this.habitual_aux ="Sí";
        }
        else{
          element.habitual ="No";
          this.habitual_aux ="No";
        }
        element.direccion = this.direccion;
        element.empresa = this.empresa;
        element.cargo = this.cargo;
      }
    });

  }

}
