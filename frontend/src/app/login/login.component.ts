import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  successdata:any;
  loginForm!: FormGroup;
  loginsubmitted = false;
constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router){}

get ff() { return this.loginForm.controls; }
onLoginSubmit() {
    this.loginsubmitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return undefined;
    }
    //True if all the fields are filled
    if(this.loginsubmitted)
    {

      // Initialize Params Object
    var myFormData = new FormData();

    // Begin assigning parameters


    //headers.append('Access-Control-Allow-Origin', '*');


    myFormData.append('email', this.loginForm.value.email);
    myFormData.append('password', this.loginForm.value.password);
    return this.http.post('http://localhost:8000/api/login'
      , myFormData).subscribe((res: any) => {
        this.successdata = res;

        if(this.successdata['status'] == "success")
        {
 
        }
        if(this.successdata['status'] == "error")
        {

        }

    });
    }
  }

  seguir(){
    this.router.navigate(['/dashboard'])
  }
ngOnInit(){
   //Login form validations
   this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
    });
}


}