import { PostService } from './services/post.service';
import { Pizza } from './model/post';

import { PaginationTableService } from './services/pagination-table.service';
import { Component } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PizzaJunction';

  pizzas:Array<Pizza> = [];//to store data from the db

  //agination attempt
  pizzaPag:any;
  p: number = 1;
  total: number = 0;
  service: any;
     
  constructor(private postService:PostService) {}
     
 /** 
  * 
  * */ sendData(event:any){
    let query:string = event.target.value;
let matchedSpaces:any = query.match('/\s*/');
if(matchedSpaces[0]===query) {
  this.pizzas = [];
  return;
}

    this.postService.searchForPizzas(query.trim()).subscribe((results: any) => {
      this.pizzas = results;
      console.log(results);
    })
    //console.log(event.target.value);//gets the input value
}
 
  ngOnInit() {
    this.getPag();
  }
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  getPag(){
      this.service.getPizzas(this.p)
        .subscribe((response: any) => {
          console.log("get pag method",this.pizzaPag = response.data);//undefined
          this.total = response.total;
        });
  } 
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  pageChangeEvent(event: number){
      this.p = event;
      this.getPag();//might need to change this to getPizzas
  }



}
