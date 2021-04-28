import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService} from '../global.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  mensaje: String = "";
  mensaje_enviado: String[] = [""];
  id_creator: number = 0;
  name_creator:String = "";
  public today:Date=new Date();

  // Boton viajar juntos
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  constructor(route: ActivatedRoute, public gs: GlobalService, public snackBar: MatSnackBar) {
    this.id_creator = route.snapshot.params.id;
    this.name_creator= gs.getInfoTrayecto(this.id_creator).creator;
  }
  ngOnInit(): void {
  }

  public enviarMensaje(){
    this.mensaje_enviado.push(this.mensaje);
    this.mensaje = "";

  }

}
