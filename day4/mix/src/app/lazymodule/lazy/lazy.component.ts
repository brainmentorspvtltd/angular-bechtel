import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Product} from '../../product';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import * as $ from 'jquery';
@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class LazyComponent implements OnInit {
  products:Observable<Product>;
  products1:Product[]=[];
  currentId:number;
  customers:any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }
  addNewProduct(){
    this.currentId = this.products1.length;
    this.products1.push(new Product(this.currentId+1,"Apple IPhone "+this.currentId,1000*this.currentId));
  }
  loadProducts():void{
    const url = "http://localhost:3000/customers";
    this.httpClient.get(url).subscribe(observer=>{
      this.customers = observer;
      });
    // this.httpClient.get(url,{observe:'body',headers:new HttpHeaders().append('Authorization','BM9999')}).subscribe(observer=>{
    // this.customers = observer;
    // });


  }
  hideIt(){
    $("p").hide(2000);
  }
  doAjax(){
    const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/products.json';
    // With out Async , Need to Subscribe
    /*this.httpClient.get(url).subscribe(response=>{
      this.products = response;
    })*/
    this.products = this.httpClient.get<Product>(url);
    console.log("Products are ",this.products);
  }

}
