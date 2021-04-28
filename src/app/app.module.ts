import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalService } from './global.service';

import {TableModule} from 'primeng/table';

// NECESARIO PARA PIPE CURRENCY!:
import { LOCALE_ID } from '@angular/core';
import '@angular/common/locales/global/es';

import 'hammerjs';

//Nuevos
import {MatIconModule} from '@angular/material/icon';
//import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {BadgeModule} from 'primeng/badge';
import {MatSelectModule} from '@angular/material/select';
import {EditarUsuarioComponent} from './editar-usuario/editar-usuario.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { CrearTrayectoComponent } from './crear-trayecto/crear-trayecto.component';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule} from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [
    AppComponent,
    EditarUsuarioComponent,
    PaginaPrincipalComponent,
    CrearTrayectoComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//RouterModule,
    BrowserAnimationsModule, MatCheckboxModule, MatInputModule,//FlexLayoutModule,
    FormsModule,MatBadgeModule, MatFormFieldModule, MatSelectModule, MatIconModule, TableModule, MatMenuModule, MatToolbarModule, BadgeModule,
    MatExpansionModule, MatButtonModule,MatRadioModule, ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule, MatTableModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTooltipModule
  ],

  providers: [GlobalService, { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

