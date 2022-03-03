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
  pizzaPag:any;
  p: number = 1;
  total: number = 0;
     
  constructor(private service:PaginationTableService) {}
     
 
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
