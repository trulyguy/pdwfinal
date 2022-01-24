import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoria } from '../categorias/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private _url='http://localhost:8000/api/categorias';

  constructor(private http: HttpClient) { }

  list():Observable<ICategoria[]>{
    return this.http.get<ICategoria[]>(this._url);
  }

  add(categorias: ICategoria):Observable<ICategoria[]>{
    return this.http.post<ICategoria[]>(this._url, categorias);
  }

  update(categorias: ICategoria):Observable<ICategoria[]>{
    return this.http.put<ICategoria[]>('${this._url}/${categorias.id}' , categorias);
  }

  delete(categorias: ICategoria):Observable<boolean>{
    return this.http.put<boolean>('${this._url}/${categorias.id}' , categorias);
  }
}
