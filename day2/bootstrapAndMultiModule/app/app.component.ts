import { Component, OnInit, ViewChild, OnDestroy, OnChanges } from '@angular/core';
import {CustomerService} from './customerservice';
import {SearchComponent} from './search/search.component';
import {Customer} from './customer';
import { Observable, interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit, OnDestroy,OnChanges {


  //@ViewChild()
  searchComp:SearchComponent;
  title = 'pr1';
  searchValue:number;
  customers:Customer[] = [];
  counter:number;
  intervalObs:Observable<number>;
  // DI Cons Level
  constructor(private customerSer:CustomerService){


  }
  getValue():void{

  }
  ngOnChanges(changes){

  }
  ngOnDestroy(){

  }
  ngOnInit(){
    this.fetchCustomers();
   this.intervalObs =  interval(1000);
   this.intervalObs.subscribe(val=>{
     console.log("Value is ",val);
     this.counter = val;
   })
  }
  searchIt():void{
    this.customers = this.customers.filter(customer=>customer.id==this.searchValue);
  }
  fetchCustomers():void{
    //var customerService:CustomerService = new CustomerService();
    this.customers = this.customerSer.loadCustomers();
  }
  doSearch(childValue:number):void{
    console.log("Child Data is ",this.searchComp.myValue);
    console.log("Rec ",childValue);
    this.customers = this.customers.filter(customer=>customer.id==childValue);
  }
}
