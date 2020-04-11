import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ProductService} from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demoApp';

  constructor(){}

  ngOnInit(): void {}


}
