import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Utilizador } from '../utilizadores';

const myUser =  new Utilizador(42, 'SkyDog', 'manecamail');
console.log('My hero is called ' + myUser.name); // "My hero is called SkyDog"

@Component({
  selector: 'app-utilizadores',
  templateUrl: './utilizadores.component.html',
  styleUrls: ['./utilizadores.component.css']
})
export class UtilizadoresComponent {

  constructor(
    private router: Router
  ) { }
  

  @Input() userDetails = {name: '', password: ''}


  submitted = false;

  onSubmit() { this.submitted = true; }


  authUser(){
    this.router.navigate(['/dashboard']);

  }
}
