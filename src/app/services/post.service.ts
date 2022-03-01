import { MessageService } from './message.service';
import { catchError, map, Observable,of,Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../model/post';

@Injectable()
export class PostService {

  http: HttpClient
   url: string ="http://localhost:4000/api/v1/auth/pizza"; 
  private pizzasUpdated = new Subject<Pizza[]>();
  messageService: any;
  
   constructor(http:HttpClient) {
    this.http =http;
   }

   public getAllPizzas(){
      this.http.get(this.url)
   }

private pizzas: Pizza[] = [];

  public getPizzas(){
    let pizzaDetailsObservable: Observable<Pizza[]>;

    pizzaDetailsObservable = this.http.get<Pizza[]>(this.url);
    
    return pizzaDetailsObservable;

    // x.subscribe((data) => {console.log(data); },//CHANGED THIS HERE console.log(data)
    //                   (error) =>{console.log(error); },
    //                     () => {console.log("No Further Data")}
    //                 );
                   // x.subscribe((response) => {console.log(response.json()); }

  }

  getPizzaUpdateListener(){
     return this.pizzasUpdated.asObservable();
  }

//SEARCH ATTEMPT
   searchPizzas(term: string): Observable<Pizza[]> {
    if (!term.trim()) {
      // if not search term, return empty pizza array.
      return of([]);
    }
    return this.http.get<Pizza[]>(`${this.url}/?product_name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found pizzas matching "${term}"`) :
         this.log(`no pizzas matching "${term}"`)),
      catchError(this.handleError<Pizza[]>('searchPizza', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log()
    this.messageService.add(`PizzaService: ${message}`);
  }
  
  

  

  
}
