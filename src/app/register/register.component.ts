import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { GlobalService } from '../global.service';
import { User } from '../User';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: String = "";
  password: String = "";
  email: String = "";
  tipo_usuario_conductor: Boolean = false;
  tipo_usuario_pasajero: Boolean = false;
  puntos_carnet: number = 15;

  hide= true;
  disableSelect = new FormControl(false);
  constructor(public gs: GlobalService, public snackBar: MatSnackBar,private router: Router) { }

  ngOnInit(): void {
  }

  saveNuevoPerfil (){
   if ((this.username!="" && this.password != "" && this.email != "") && (this.tipo_usuario_conductor == true || this.tipo_usuario_pasajero == true)) {
      var user1 = new User (this.username, this.email, this.password, this.tipo_usuario_conductor,this.tipo_usuario_pasajero, this.puntos_carnet);
      this.gs.añadirUser(user1);
      this.snackBar.open("Usuario registrado", "Undo", {
        duration: 2000,
      });
      this.router.navigate(['/pagina-principal']);
      
    }
    else{
      alert("FILL ALL FIELDS");
    }
    
  }

}
