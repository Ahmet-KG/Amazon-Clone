import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/services/api.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  items!: Products[];

  constructor(public shopping_cart: ShoppingCartService) {}

  ngOnInit(): void {}

  getShoppingCart() {
    this.items = this.shopping_cart.getShoppingCardItems();
  }
}
