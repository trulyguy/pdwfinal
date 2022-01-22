import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDespesa } from '../despesa/despesa';

@Injectable({
  providedIn: 'root'
})

export class DespesaService {
  private _url ="http://localhost:8000/api/despesas";

  constructor(private http:HttpClient) { }

  list() : Observable<IDespesa[]>{
    return this.http.get<IDespesa[]>(this._url);
  }

  add(despesa:IDespesa) : Observable<IDespesa>{
    return this.http.post<IDespesa>(this._url,despesa);
  }
  update(despesa:IDespesa) : Observable<IDespesa>{
    return this.http.put<IDespesa>(`${this._url}/${despesa.id}`,despesa);
  }

  delete(despesa:IDespesa) : Observable<boolean>{
    return this.http.delete<boolean>(`${this._url}/${despesa.id}`);
  }
}