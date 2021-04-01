import { Component, OnInit,EventEmitter } from '@angular/core';
import { PurcahseItem } from './Ipurchaseitem';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchasedlist : PurcahseItem[] =[];

  constructor() { }

  ngOnInit(): void {
    this.purchasedlist = this.getPurcahse();
  }


  getPurcahse(): PurcahseItem[] {
    return [
      {
        purchaseId: 1,
        purchaseTitle: "Taazaa",
        purchaseDate: "10-06-2021",
        vendorname: "ABC",
        items: [{
          Id: 100,
          Title: "pen",
          Price: 1000,
          ExpiryDate: "17-09-2045",
          isInStock: true,
          Quantity: 100

        }
        ]
      },
      {
        purchaseId: 2,
        purchaseTitle: "Microsoft",
        purchaseDate: "25-06-2018",
        vendorname: "XYZ",
        items: [{
          Id: 101,
          Title: "Pencil",
          Price: 10,
          ExpiryDate: "01-05-2055",
          isInStock: false,
          Quantity: 75

        },
        {
          Id: 102,
          Title: "Bag",
          Price: 900,
          ExpiryDate: "1-07-2155",
          isInStock: true,
          Quantity: 5

        }
        ]
      },
      {
        purchaseId: 3,
        purchaseTitle: "Amazon",
        purchaseDate: "03-04-2021",
        vendorname: "PQR",
        items: [{
          Id: 103,
          Title: "Book",
          Price: 710,
          ExpiryDate: "01-05-2055",
          isInStock: true,
          Quantity: 765

        },
        {
          Id: 104,
          Title: "keyboard",
          Price: 540,
          ExpiryDate: "11-02-2055",
          isInStock: true,
          Quantity: 325

        }
        ]
      }
      
    ]


  }
}