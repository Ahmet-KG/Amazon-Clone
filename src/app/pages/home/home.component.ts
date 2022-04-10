import { Component, OnInit } from '@angular/core';
import { ApiService, Products } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items!: Products[];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    return this.api.getJson().subscribe((res) => {
      this.items = res;
    });
  }
}
