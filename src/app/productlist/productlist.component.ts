import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: Product[] = [
    {producId:1,
    productName: 'Vegetian-Olive',
    price: 10,
    },
    {producId:2,
    productName: 'Meatlovers',
    price: 20,
    }]
  constructor() { }

  //new code
  @Input() productCount = 0;
  @Output() getProductsEvent = new EventEmitter();
  
  ngOnInit(): void {
  }

  
}
