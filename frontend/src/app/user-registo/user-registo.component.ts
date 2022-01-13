import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registo',
  templateUrl: './user-registo.component.html',
  styleUrls: ['./user-registo.component.css']
})
export class UserRegistoComponent {

  constructor(
    private router: Router
  ) { }

  @Input() userDetails = {name: '',email : '', password: ''}


  submitted = false;


  onSubmit() { this.submitted = true; }


  authUser(){
    this.router.navigate(['/dashboard']);
  }
}
