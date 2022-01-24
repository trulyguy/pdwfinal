import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { JwtHelperService } from '../services/jwt-helper.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dialog: any;  
  panelOpenState = false
  accessToken: any;
  accessTokenDetails: any;
  loading!: boolean;

  constructor(
    jwtHelper: JwtHelperService,
    private authService: AuthService,
    private observer: BreakpointObserver,
    private router: Router) {
      this.accessToken = localStorage.getItem('access_token');
      this.accessTokenDetails = {
      id: jwtHelper.id(),
      name: jwtHelper.name(),
      email: jwtHelper.email()
    };
    }

  ngOnInit(): void {
  }

  seguirCategorias=  () => {
    this.router.navigate(['/categorias']);
  }

  seguirDespesas=  () => {
    this.router.navigate(['/despesa']);
  }


  logout(): void {
    this.loading = true;
    this.authService.logout()
      .subscribe(() => {
        this.loading = false;
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
      });
  }
}
