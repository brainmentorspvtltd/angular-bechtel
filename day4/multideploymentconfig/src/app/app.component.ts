import { Component } from '@angular/core';
import {ProductService} from './services/product.service';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  env:any;
  title = 'unittest';
  counter:number;
  totalRecords:number;
  message:string;
  
  doLogin(userid:string, pwd:string){
    console.log("Userid ",userid, " Password ",pwd);
    const url  = "http://localhost:3000/login";
    this.http.post(url, {userid: userid,password: pwd})
    .subscribe((resp: any) => {
    console.log("Response is Coming Back");
      this.message = "Login Success "+resp.token;
      localStorage.setItem('auth_token', resp.token);
     
      });
      
  }
  constructor(private productService:ProductService,private http:HttpClient){
    this.counter = 0;
    this.totalRecords = 0;
    this.env = environment;
  }
  callService():number{
    let len = this.productService.getProducts().length;
    this.totalRecords = len;
    console.log("Call Service is called...");
    return len;

  }
  makeAjax(){
   /* this.productService.getProductsAjax().subscribe(response=>{
        
    }); */
  }
  increment(){

    this.counter++;
    console.log("Increment Call ", this.counter);
  }
}
