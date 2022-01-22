import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dialog: any;  
  panelOpenState = false

  constructor(private observer: BreakpointObserver, private router: Router) { }

  ngOnInit(): void {
  }

  btnClickCategorias=  () => {
    this.router.navigate(['/categorias']);
}
}
