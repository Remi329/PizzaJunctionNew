import { Pizza } from './../model/post';
import { PostService } from './../services/post.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { filter, Subscription } from 'rxjs';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit,OnDestroy {
  pizzas!: Object;
  pizzaArray: any = [];
  private pizzaSub!: Subscription;
  pizzaService: PostService;
   
  //new
  subscription: Subscription;
//new from tutorial
  //new from tutorial
  //new from tutorial
  //new from tutorial
  products: any;
  results: any=[];
  filteredPizzas: any[] = [];

 pizzasearchArray: any = [];
productname:any;
  //used for backend-priyanka tutorial
  /*constructor(private http:HttpClient) {
  const  url = 'https://jsonplaceholder.typicode.com/posts';
    
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response =>{
      console.log(response);
      this.pizzas = response;
    })*/
    constructor(private service: PostService) {
      // let products: Pizza[] = [];
    this.pizzaService = service;
    //new
   this.subscription =  this.pizzaService.getPizzas()
            .subscribe(products => this.filteredPizzas = this.products = products);

  
  }

  @Input() productCount = 0;
  @Output() getProductsEvent = new EventEmitter();
  
   
     
 ngOnInit() {    
  //this.getPizzas();
 this.service.getPizzas().subscribe((response) => {
        this.pizzaArray = response;

      });


    // this.pizzaSub = this.pizzaService.getPizzaUpdateListener()
    //   .subscribe((response) => {
    //     this.pizzaArray = response;
        

    //   });

  }

  searchMethod(){
    this.service.getPizzas().subscribe((response) => {
      console.log("before:",this.pizzasearchArray);
        this.pizzasearchArray = response;
        console.log("After response: ",this.pizzasearchArray);
      });
  }

  Search(){
  if(this.productname ==""){
    this.searchMethod();
  }else{
    this.pizzasearchArray = this.pizzasearchArray.filter((res: { productname: string; }) =>{
      return res.productname.toLocaleLowerCase().match(this.productname.toLocaleLowerCase())
    })
  }
}

//new
filterSearchedPizzas(query: string){
  console.log("Products: ",this.products);
  console.log(query); 
   console.log(typeof this.products);//its an object-cant use filter for an object
  console.log("Pizzaarray",this.pizzaArray);
  console.log("filtered array= ",this.pizzaArray.status);
  
  this.filteredPizzas = (query)?
  this.pizzaArray.status.filter((p: { product_name: string; })  => p.product_name.toLowerCase().includes(query.toLowerCase())) :
  this.pizzaArray.status;
console.log("results array= ",this.pizzaArray.status[0]);

  // this.filteredPizzas = (query)?
  // this.products.filter(p => p.product_name.toLowerCase().includes(query.toLowerCase())) :
  // this.products;

//attempt at conversion
//   let arr: any[] = [];  
// Object.keys(this.products).map(function(key){  
//     arr.push({[key]products[key]})  
//     return arr;  
// });  
 console.log('Object=',this.products)  
console.log('Array=',this.results.status) //undefined

}

//new
//makes sure if there are mulitple wondows>>destroyed
ngOnDestroy() {
    this.subscription.unsubscribe();
}
  /*getPizzas(): void{
    //  this.service.getPizzas();

     this.service.getPizzas().subscribe((response: any) => {
        this.pizzaArray = response();

      });

    // this.pizzaSub = this.pizzaService.getPizzaUpdateListener()
    //   .subscribe((response: any) => {
    //     this.pizzas = response.json();

    //   });
  }*/
  getAllProducts(){
   this.ngOnInit();
  }
    
  }




