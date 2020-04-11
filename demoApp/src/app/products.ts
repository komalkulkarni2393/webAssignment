import {InMemoryDbService} from 'angular-in-memory-web-api';

export class Products implements InMemoryDbService {
  createDb(){
    let products = [
      { id:1, productName:"Angular", productCategory:"Angular"},
      { id:2, productName:"React", productCategory:"React"},
      { id:3, productName:"Redux", productCategory:"React"},
    ];
    let productsInCart = [];
    return {
      products:products,
      productsInCart:productsInCart
    };
  }
}
