import { Component, OnInit } from '@angular/core';
import { Product } from './Iproduct';

@Component({
  selector: 'app-structuredirective',
  templateUrl: './structuredirective.component.html',
  styleUrls: ['./structuredirective.component.css']
})
export class StructuredirectiveComponent implements OnInit {

  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts(): any {
    return [
      {
        Id: 1,
        Title: 'Pen',
        Price: 100,
        ExpiryDate: "04-03-2021",
        isInStock: true,
        Quantity: 51
      },
      {
        Id: 2,
        Title: 'Mobile',
        Price: 7000,
        ExpiryDate: "02-12-2031",
        isInStock: true,
        Quantity: 15
      },
      {
        Id: 3,
        Title: 'Laptop',
        Price: 20000,
        ExpiryDate: "06-14-2091",
        isInStock: false,
        Quantity: 0
      },
      {
        Id: 4,
        Title: 'Bag',
        Price: 70,
        ExpiryDate: "08-25-2041",
        isInStock: true,
        Quantity: 31
      }

    ]

  }
}
