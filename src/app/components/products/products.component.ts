import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/services/api.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() products!: Products[];

  constructor(private shopping_cart: ShoppingCartService) {}

  ngOnInit(): void {}

  addToCart(product: Products) {
    this.shopping_cart.addProduct(product);
  }
}
