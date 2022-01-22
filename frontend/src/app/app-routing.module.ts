import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilizadoresComponent } from './utilizadores/utilizadores.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserRegistoComponent } from './user-registo/user-registo.component';
import { PassRecoverComponent } from './pass-recover/pass-recover.component';
import { GrafDespComponent } from './graf-desp/graf-desp.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { DespesaComponent } from './despesa/despesa.component';


const routes: Routes = [ 
   { path: 'dashboard', component: DashboardComponent },
   { path: 'userLogin', component: UtilizadoresComponent},
   { path: 'homePage' , component: HomePageComponent},
   { path: 'userRegisto', component: UserRegistoComponent},
   { path: 'passRecovery', component: PassRecoverComponent},
   { path: 'graf-desp', component: GrafDespComponent},
   { path: 'categorias', component: CategoriasComponent},
   { path: 'despesa', component: DespesaComponent}

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
