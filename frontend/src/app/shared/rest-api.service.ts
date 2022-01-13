import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from './paciente';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Define API
  apiURL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch Pacientes list
  getPacientes(): Observable<Paciente> {
    return this.http.get<Paciente>(this.apiURL + '/pacientes')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch Paciente
  getPaciente(id: string): Observable<Paciente> {
    return this.http.get<Paciente>(this.apiURL + '/pacientes/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create Paciente
  createPaciente(Paciente: any): Observable<Paciente> {
    return this.http.post<Paciente>(this.apiURL + '/pacientes', JSON.stringify(Paciente), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update Paciente
  updatePaciente(id: string, Paciente: any): Observable<Paciente> {
    return this.http.put<Paciente>(this.apiURL + '/pacientes/' + id, JSON.stringify(Paciente), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete Paciente
  deletePaciente(id: string){
    return this.http.delete<Paciente>(this.apiURL + '/pacientes/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error: any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
  

}
