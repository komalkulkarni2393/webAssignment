import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class CartService {

  productURL = "/api/productsInCart";
  constructor(private httpClient: HttpClient){}

  addProductsInCart(products):Observable<any>{
    let httpheaders = new HttpHeaders().set('content-type','application/Json');
    let options = { headers : httpheaders };
    return this.httpClient.post<any>(this.productURL, products, options);
  }

  showProductsInCart():Observable<any>{
    return this.httpClient.get<any>(this.productURL);
  }
}
