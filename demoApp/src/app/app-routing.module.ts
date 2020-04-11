import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddProductComponent} from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { ShowProductsComponent } from './show-products/show-products.component';

const routes: Routes = [
  {path:'showProducts', component:ShowProductsComponent},
  {path:'addProduct', component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
