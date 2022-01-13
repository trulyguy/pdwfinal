import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilizadoresComponent } from './utilizadores/utilizadores.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserRegistoComponent } from './user-registo/user-registo.component';
import { PassRecoverComponent } from './pass-recover/pass-recover.component';
import { GrafDespComponent } from './graf-desp/graf-desp.component';


const routes: Routes = [ 
   { path: 'dashboard', component: DashboardComponent },
   { path: 'userLogin', component: UtilizadoresComponent},
   { path: 'homePage' , component: HomePageComponent},
   { path: 'userRegisto', component: UserRegistoComponent},
   { path: 'passRecovery', component: PassRecoverComponent},
   { path: 'graf-desp', component: GrafDespComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
