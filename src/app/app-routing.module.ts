import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component'
import { CrearTrayectoComponent } from './crear-trayecto/crear-trayecto.component'
import { ChatComponent } from './chat/chat.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent} from './register/register.component'

const routes: Routes = [


  {path:'', redirectTo:'/pagina-principal', pathMatch:'full'},
  {path:'pagina-principal', component: PaginaPrincipalComponent},
  {path:'crear-trayecto', component: CrearTrayectoComponent},
  {path:'chat/:id', component: ChatComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
