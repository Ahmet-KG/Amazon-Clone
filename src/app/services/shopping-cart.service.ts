import { Injectable } from '@angular/core';
import { Products } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  addProduct (product: Products) {
    localStorage.setItem('shopping_cart', JSON.stringify(product))
  }
}
