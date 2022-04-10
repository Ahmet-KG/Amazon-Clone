import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _jsonUrl = 'assets/data/products.json'

  constructor(private http: HttpClient) { }

  getJson(): Observable<any> {
    return this.http.get(this._jsonUrl)
  }
}
