import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductService} from './products.service';
import {CartService} from './cart.service';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http'
import {Products} from './products';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowProductsComponent } from './show-products/show-products.component';
import {CategoryFilter} from './categoryFilter';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ShowProductsComponent,
    CategoryFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(Products),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
