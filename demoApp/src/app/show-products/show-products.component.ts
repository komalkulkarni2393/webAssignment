import { Component, OnInit, ɵConsole } from '@angular/core';
import {Observable} from 'rxjs';
import {ProductService} from '../products.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  products: any;
  productsInCart: any;
  selectedProducts: any[] = [];
  productsBasedOnCategory:any;
  categoryToFilter:any;
  isCartEmpty = true;

  constructor(
    private productService: ProductService,
    private cartService : CartService
  ){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  selectProducts(event,product) {
    if(event.currentTarget.checked) {
      this.selectedProducts.push(product);
    }
    else {
      for(let i=0;i<this.selectedProducts.length;i++) {
        if(this.selectedProducts[i].productName == product.productName) {
          let index = this.selectedProducts.indexOf(this.selectedProducts[i]);
          if (index > -1) {
            this.selectedProducts.splice(index, 1);
          }
        }
      }
    }
  }

  addToCart(){
    if(this.selectedProducts.length != 0) {
      for(var i=0;i<this.selectedProducts.length;i++){
        this.cartService.addProductsInCart(this.selectedProducts[i]).subscribe(p => {
          console.log(p);
        });
      }
      alert("Selected Products are added in cart");
    }
    else{
      alert("Please select Products to add in cart!");
    }

  }

  showProductsInCart(){
    this.cartService.showProductsInCart().subscribe(productsInCart => {
      this.productsInCart = productsInCart;
      if(this.productsInCart.length == 0) {
        this.isCartEmpty = true;
      }
      else {
        this.isCartEmpty = false;
      }
    });
  }

  filterOnCategory(){
    if(this.category == "") {
      this.getProducts();
    }
    else {
      this.products = this.products.filter(result => {
        return result.productCategory.match(this.category);
        console.log(result);
      })
    }
  }
}
