import { SearchService } from './../services/search.service';
import { PostService } from './../post.service';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
// import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from '../model/post';
import { Subscription } from 'rxjs';
import { response } from 'express';
/**
 * import { PostService } from './../services/post.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
*/
@Component({
  selector: 'app-pizzasearch',
  templateUrl: './pizzasearch.component.html',
  styleUrls: ['./pizzasearch.component.css']
})

export class PizzasearchComponent implements OnInit {
  pizzas!: any; //Pizza may be an issue
//Pizza may be an issue
private searchTerms = new Subject<string>();

//new
pizzaArray: any = [];

//pizzaService: SearchService;
pizzasearchArray: any = [];
productname:any;
  SearchService: any;


constructor(private service: SearchService) {
   
  }
  
// private service: PostService

  // Push a search term into the observable stream.
  search(term: string): void {
    this.pizzas.next(term);
  }

  ngOnInit() {

    //  this.service.getPizzas().subscribe((response: any) => {
    //     this.pizzasearchArray = response;

    //   });
    this.service.getPizzas().subscribe((response) => {
        this.pizzaArray = response;

      });
      
console.log("Pizza array in pizza search",this.pizzaArray);
      this.pizzas = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // switchMap((term: string) => this.SearchService.searchPizzas(term)),
    );
            console.log("Pizzas variable in pizza search",this.SearchService);


    console.log("Pizza array in pizza search",this.pizzaArray);
}
    
  
Search(){
  if(this.productname ==""){
    this.ngOnInit();
  }else{
    this.pizzasearchArray = this.pizzasearchArray.filter((res: { productname: string; }) =>{
      console.log("pizza search array ",this.pizzasearchArray)
      return res.productname.toLocaleLowerCase().match(this.productname.toLocaleLowerCase())
    })
  }
}

}
