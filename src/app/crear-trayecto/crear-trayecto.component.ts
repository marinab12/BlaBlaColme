import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Trayecto } from '../Trayecto';
import { FormControl} from '@angular/forms';
import { Time } from "@angular/common";


@Component({
  selector: 'app-crear-trayecto',
  templateUrl: './crear-trayecto.component.html',
  styleUrls: ['./crear-trayecto.component.scss']
})
export class CrearTrayectoComponent implements OnInit {

  id: number = 0 ;
  name_creator:String= "Claudia Fernández Estebaranz";
  origen: String = "";

  lugares_cercanos: String[] = [""] ;
  //hora_llegada: Time = {hours:09, minutes:1};
  hora_llegada : String = "0:00";
  plazas: number = 0;
  desvio: String = "";
  condiciones: Boolean = false;


// Para puntos cercanos
  suggestions = ["Majadahonda", "Las Rozas", "Colmenarejo", "Galapagar", "Valdemorillo"];

//Para condiciones
disableSelect = new FormControl(false);

  constructor(public gs: GlobalService) {

  }

  public saveNuevoTrayecto(){
    var trayecto1 = new Trayecto (this.id, this.name_creator, this.origen, this.lugares_cercanos,this.hora_llegada, this.plazas,  this.desvio);
    this.gs.añadirTrayecto(trayecto1);
    this.id ++;

  }



  ngOnInit(): void {
  }

}
