import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {ProductService} from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private productService : ProductService,
    private router: Router
  ) {

    this.addProductForm = this.formBuilder.group({
      id: ['',Validators.required],
      productName: ['',Validators.required],
      productCategory: ['',Validators.required]
    });

  }

  addProduct(addProductForm) {
    let newProduct = this.addProductForm.value;
    this.createNewProduct(newProduct);
  }

  createNewProduct(newProduct: any) {
    this.productService.createProducts(newProduct).subscribe( p => {
      alert("New Product added!");
      this.router.navigate(['/showProducts']);
    })
  }

  ngOnInit(): void {}

}
