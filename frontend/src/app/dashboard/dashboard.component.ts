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

  constructor(private observer: BreakpointObserver, private router: Router) { }

  // btnClickGraf(){
  //   this.router.navigate(['/graf-desp']);
  // }

  // btnClickEditG(){
  //   this.router.navigate(['/userLogin']);
  // }

  // btnClickAdic(){
  //   this.router.navigate(['/userLogin']);
  // }

  // btnClickEvol(){
  //   this.router.navigate(['/userLogin']);
  // }

  // btnClickEsperados(){
  //   this.router.navigate(['/userLogin']);
  // }

  // btnClickPercent(){
  //   this.router.navigate(['/userLogin']);
  // }



  ngOnInit(): void {
  }

}
