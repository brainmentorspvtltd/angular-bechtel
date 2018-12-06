import { Component } from '@angular/core';
import {Customer} from './customer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  customers:Customer[]=[];

  name:string = "";
  msg:string ; 
  title = 'myfirstapp';
  cssclass:string='green';
  str:string='<h1>Hello Angular Demo</h1>';
  flag:boolean;
  constructor(){
    this.flag = true;
    this.fillCustomers();
  }
  fillCustomers(){
    this.customers.push(new Customer(1001,"Ram",9999));
    this.customers.push(new Customer(1002,"Shyam",4999));
    this.customers.push(new Customer(1003,"Mike",3999));
    this.customers.push(new Customer(1004,"Tim",2999));
  }
  takeInput(event):void{
    this.name = event.target.value;
  }
  changeIt():void{
    this.title = "This is a New Title";
    this.flag = !this.flag;
  }
}
