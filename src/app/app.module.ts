import { FooterComponent } from './footer/app.footer.component';
import { SearchService } from './services/search.service';
import { PostService } from './services/post.service';

import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProductlistComponent } from './productlist/productlist.component';
import { HttpClientModule } from '@angular/common/http';

import { PizzaComponent } from './pizza/pizza.component';
import { PizzasearchComponent } from './pizzasearch/pizzasearch.component';

import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination';

//configure routes
const routes: Routes =[
  {path:'home', component:HomeComponent},
  {path:'pizza', component:PizzaComponent},
  {path:'productlist', component:ProductlistComponent},  
   {path:'pizza/name/:name',component:ProductlistComponent},
   {path:'search', component:PizzasearchComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductlistComponent,
    PizzaComponent,
    PizzasearchComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule.forRoot(routes),
    RouterModule,
    Ng2SearchPipeModule,
    NgxPaginationModule

  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
