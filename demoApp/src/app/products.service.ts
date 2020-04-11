import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class ProductService {

  productURL = "/api/products";
  constructor( private httpclient: HttpClient ){}

  getProducts():Observable<any> {
    return this.httpclient.get<any>(this.productURL);
  }

  createProducts(product): Observable<any> {
    let httpheaders = new HttpHeaders().set('content-type','application/Json');
    let options = { headers : httpheaders };
    return this.httpclient.post<any>(this.productURL, product, options);
  }

  getProductsOnCategory(productCategory):Observable<any>{
    let url = this.productURL+"/"+productCategory;
    return this.httpclient.get<any>(url);
  }

}

