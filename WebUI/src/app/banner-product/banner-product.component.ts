import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-product',
  templateUrl: './banner-product.component.html',
  styleUrls: ['./banner-product.component.css']
})
export class BannerProductComponent implements OnInit {
  arr: Array<number> = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {
  }

}
