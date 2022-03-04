import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  /*products: Product[] = [
    {producId:1,
    productName: 'Vegetian-Olive',
    price: 10,
    },
    {producId:2,
    productName: 'Meatlovers',
    price: 20,
    }]*/

    pizzaService: PostService;
    products: any;
    pizzaArray: any = [];
  constructor(private service: PostService) {
      // let products: Pizza[] = [];
    this.pizzaService = service;
    //new
   
  
  }


  //new code
  @Input() productCount = 0;
  @Output() getProductsEvent = new EventEmitter();
  
  ngOnInit() {
    this.service.getPizzas().subscribe((response) => {
        this.pizzaArray = response;

      });
  }

  
}
