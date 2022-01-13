import { Component, OnInit, ViewChild } from '@angular/core';

let tilted:boolean = false;


@Component({
  selector: 'app-graf-desp',
  templateUrl: './graf-desp.component.html',
  styleUrls: ['./graf-desp.component.css']
})



export class GrafDespComponent implements OnInit {
  
  @ViewChild('body')
  body!: HTMLElement; 
  constructor() { }
  
  ngOnInit(): void  {}  
  
}




