import { Pizza } from './../model/post';
import { PostService } from './../services/post.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'

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
  //pagination
   @ViewChild('paginator') paginator:MatPaginator
   datasource =new MatTableDataSource<'post'>();//might need to chane this to a service
   
   //invoke method
   ngAfterViewInit(){
       this.datasource = new MatTableDataSource(this.pizzaArray);
      // length===this.pizzaArray.length();
       this.datasource.paginator =this.paginator;
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
  //output
  this.filteredPizzas = (query)?
  this.pizzaArray.status.filter((p: { product_name: string; })  => p.product_name.toLowerCase().includes(query.toLowerCase())) :
  this.pizzaArray.status;
console.log("results array= ",this.pizzaArray.status);//status[0]get a specfic index

  // this.filteredPizzas = (query)?
  // this.products.filter(p => p.product_name.toLowerCase().includes(query.toLowerCase())) :
  // this.products;

//attempt at conversion
//   let arr: any[] = [];  
// Object.keys(this.products).map(function(key){  
//     arr.push({[key]products[key]})  
//     return arr;  
// });  
 console.log('Object=',this.products)  //all records in the db are shown
console.log('Array=',this.results.status) //undefined
//return this.filteredPizzas.find('product_name',(ref: { where: (arg0: string, arg1: string, arg2: string) => any; }) =>ref.where('product_name','==',query)).snapshotChanges();
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




