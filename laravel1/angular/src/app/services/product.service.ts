import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url = 'http://127.0.0.1:8000/api/products';

  constructor(private http:HttpClient) { }

  list() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url);
  }

  add(product:IProduct) : Observable<IProduct> {
    return this.http.post<IProduct>(this._url,product);
  }

  update(product:IProduct) : Observable<IProduct> {
    return this.http.put<IProduct>(`${this._url}/${product.id}`,product);
  }

  delete(product:IProduct) : Observable<boolean>{
    return this.http.delete<boolean>(`${this._url}/${product.id}`);
  }

}
