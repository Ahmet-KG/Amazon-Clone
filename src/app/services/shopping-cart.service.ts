import { Injectable } from '@angular/core';
import { Products } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shopping_cart_items: Products[] = [];

  constructor() {}

  addProduct(product: Products) {
    let items = this.getShoppingCardItems();
    if (items) {
      items.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(items));
    } else {
      this.shopping_cart_items.push(product);
      localStorage.setItem(
        'shopping_cart',
        JSON.stringify(this.shopping_cart_items)
      );
    }
  }

  getShoppingCardItems() {
    let items: any = localStorage.getItem('shopping_cart');
    return JSON.parse(items);
  }

  getCartLength(): number {
    let items = this.getShoppingCardItems();
    return items ? this.getShoppingCardItems().length : 0;
  }
}
