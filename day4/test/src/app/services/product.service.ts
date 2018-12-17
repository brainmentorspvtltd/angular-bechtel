
import { Injectable } from '@angular/core';
import {Product} from './product';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService{
    
    constructor(private httpClient:HttpClient){

    }
    getProductsAjax():Observable<Product>{
        const url = "http://localhost:3000/products";
        return this.httpClient.get<Product>(url);
    }
    getProducts():Product[]{
        let products:Product[]=[];
        for(let i = 1; i<=15; i++){
                products.push(new Product(i,"Apple"+i,1000*i));
        }
            return products;
    }
}