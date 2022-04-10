import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Products {
  id: number;
  title: string;
  desc: string;
  price: number;
  image: string;
  ratings: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _jsonUrl = 'assets/data/products.json';

  constructor(private http: HttpClient) {}

  getJson(): Observable<Products[]> {
    return this.http.get<Products[]>(this._jsonUrl);
  }
}
