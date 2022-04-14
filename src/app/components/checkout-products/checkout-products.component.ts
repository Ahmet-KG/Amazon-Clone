import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/services/api.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.scss'],
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products!: Products[];
  @Output() deleteEvent: EventEmitter<Products> = new EventEmitter();

  constructor(public shopping_cart_service: ShoppingCartService) {}

  ngOnInit(): void {}

  removeItem(product: Products) {
    this.shopping_cart_service.removeItems(product);
    this.deleteEvent.emit(product);
  }
}
