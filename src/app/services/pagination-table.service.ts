import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../model/post';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationTableService {
 
  private url: string ="http://localhost:4000/api/v1/auth/pizza"; 
  private pizzasUpdated = new Subject<Pizza[]>();
  messageService: any;

   constructor(private http:HttpClient) {
    this.http =http;
   }

//     public getAllPizzas(){
//       this.http.get(this.url)
//    }

// private pizzas: Pizza[] = [];
   
   public getPizzas(page: number){
let pizzaDetailsObservable: Observable<Pizza[]>;

    pizzaDetailsObservable = this.http.get<Pizza[]>(this.url + '?page=' + page);
    
    return pizzaDetailsObservable;
     
    // let pizzaDetailsObservable: Observable<Pizza[]>;

    // pizzaDetailsObservable = this.http.get<Pizza[]>(this.url);
    
    // return pizzaDetailsObservable;


}


getPizzaUpdateListener(){
     return this.pizzasUpdated.asObservable();
  }



  
  
  

  

  

  }

  


   
  
  

  

  


