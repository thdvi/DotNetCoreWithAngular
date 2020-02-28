import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<IProduct> {
  constructor(protected  http: HttpClient) {
    super(http);
        this.rootObject = 'Products';
    }
}
