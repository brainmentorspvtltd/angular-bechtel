import { Component } from '@angular/core';
import {CustomerService} from './customerservice';
import {Customer} from './customer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pr1';
  searchValue:number;
  customers:Customer[] = [];
  constructor(){
    this.fetchCustomers();

  }
  searchIt():void{
    this.customers = this.customers.filter(customer=>customer.id==this.searchValue);
  }
  fetchCustomers():void{
    var customerService:CustomerService = new CustomerService();
    this.customers = customerService.loadCustomers();
  }
  doSearch(event):void{
    this.searchValue = event.target.value;
    console.log('Search Value is ',this.searchValue);
  }
}
