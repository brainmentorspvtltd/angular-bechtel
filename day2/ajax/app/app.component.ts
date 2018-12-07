import { Component } from '@angular/core';
import {AjaxService} from './ajax.service';
import {Product} from './product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopapp';
  constructor(private myservice:AjaxService){

  }
  callPromise(){
    //console.log("Result ",this.myservice.getProductsFromPromise());
    var pr:Promise<Product[]> = this.myservice.getProductsFromPromise();
    pr.then(productArray=>{
      console.log("PR Data is ",productArray);
    })
  }
  callrx(){
    this.myservice.getProductsFromRx().subscribe(data=>{
      console.log("Subscribe ",data);
    },(err)=>{

    },()=>{

    });
    //console.log("Result2 ",this.myservice.getProductsFromRx());
  }
}
