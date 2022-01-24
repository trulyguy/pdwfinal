import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'highcharts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-user-registo',
  templateUrl: './user-registo.component.html',
  styleUrls: ['./user-registo.component.css']
})
export class UserRegistoComponent {

    //Forms
    title = 'final-pdw';
    successdata:any;
    registerForm!: FormGroup;
    submitted = false;
    loginForm!: FormGroup;
    loginsubmitted = false;
  
    constructor(private http: HttpClient, private formBuilder: FormBuilder){}
  
  
  //Register form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return undefined;
      }
      //True if all the fields are filled
      if(this.submitted)
      {
        
        // Initialize Params Object
        var myFormData = new FormData();
      
      // Begin assigning parameters
      
      myFormData.append('name', this.registerForm.value.firstname);
      myFormData.append('email', this.registerForm.value.email);
      myFormData.append('password', this.registerForm.value.password);
      return this.http.post('http://localhost:8000/api/register'
        , myFormData).subscribe((res: any)=> {
          this.successdata = res;
          
        });
      }
     
  }
  
  
  ngOnInit(){
  //Register form validations
    this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    firstname: ['', [Validators.required]]
    });

  }
  
  }
  