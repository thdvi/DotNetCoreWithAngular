import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  product: IProduct;
  @Input()
  set productEntry(product: IProduct){
    debugger
    this.product = product;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
    
  }

}
