import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../models/iproduct';
declare var $:any;

@Component({
  selector: 'app-banner-product',
  templateUrl: './banner-product.component.html',
  styleUrls: ['./banner-product.component.css']
})
export class BannerProductComponent implements OnInit {
  arr: Array<number> = [1,2,3,4,5,6,7];
  products: Array<IProduct> = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.get([]).subscribe(data => {
      if(data != undefined || data != [] || data != null){
        this.products = data;
      }
    })
  }

}
