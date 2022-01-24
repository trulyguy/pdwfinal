import { Component } from '@angular/core';
import { Chart } from 'highcharts';
import { donutChartOption } from './helpers/donutChartOptions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-pdw';

  successdata:any;
  registerForm!: FormGroup;
  submitted = false;

  
}
