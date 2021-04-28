import { Component, OnInit, Injectable } from '@angular/core';
import { GlobalService} from '../global.service';
import { Trayecto } from '../Trayecto';
import {MatSnackBar} from '@angular/material/snack-bar';




@Injectable()
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  public filtro ="";
  public opcion = "";
  public filtrados: Trayecto[] = [];
  public enLista : Boolean = false;

  public getFiltro(){

    this.enLista = false;
    this.filtrados = [];
    if (this.filtro == ""){
      console.log(this.gs.trayectos);
      return this.gs.trayectos;
    }
    // Si hay algun filtro
    else {
      for(let i=0; i<this.gs.trayectos.length; i++){
        this.enLista = false;
        for(let j=0; j<this.gs.trayectos[i].lugares_cercanos.length && this.enLista == false; j++){


            if(this.gs.trayectos[i].lugares_cercanos[j].toLowerCase().includes(this.filtro.toLocaleLowerCase()) || this.gs.trayectos[i].origen.toLowerCase().includes(this.filtro.toLocaleLowerCase())){

                this.filtrados.push(this.gs.trayectos[i]);
                this.enLista = true;
                //console.log(this.filtrados);
            }

          }
      }



    return this.filtrados;
    }
  }

  // Boton viajar juntos
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  constructor(public gs: GlobalService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
