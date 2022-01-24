import "@angular/compiler";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilizadoresComponent } from './utilizadores/utilizadores.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PassRecoverComponent } from './pass-recover/pass-recover.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserRegistoComponent } from './user-registo/user-registo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { GrafDespComponent } from './graf-desp/graf-desp.component';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatBadgeModule} from '@angular/material/badge';
import { MatListModule} from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatTabsModule} from '@angular/material/tabs';
import { CategoriasComponent } from './categorias/categorias.component';
import { DespesaComponent } from './despesa/despesa.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from "ngx-bootstrap";
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DonutGraphComponent } from './donut-graph/donut-graph.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from "./login/login.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';












@NgModule({
  declarations: [
    AppComponent,
    UtilizadoresComponent,
    DashboardComponent,
    PassRecoverComponent,
    HomePageComponent,
    UserRegistoComponent,
    GrafDespComponent,
    CategoriasComponent,
    DespesaComponent,
    BarChartsComponent,
    DonutGraphComponent,
    PerfilComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTabsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    NgxChartsModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
