import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pizza } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  http: HttpClient
   url: string ="http://localhost:4000/api/v1/auth/pizza/:id"; 
  
  messageService: any;
  
   constructor(http:HttpClient) {
    this.http =http;
   }

   public getPizzas(){
    let pizzaDetailsObservable: Observable<Pizza[]>;

    pizzaDetailsObservable = this.http.get<Pizza[]>(this.url);
    
    return pizzaDetailsObservable;

   

  }



   //SEARCH ATTEMPT
   public searchPizzas(term: string): Observable<Pizza[]> {
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
