import {Customer} from './customer';
import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';
@Injectable()
export class CustomerService{

  constructor(private admin:AdminService){

  }

  loadCustomers():Customer[]{
    console.log("******** Admin Service ",this.admin.message);
    var customers:Customer[] = [];
    customers.push(new Customer(1001,"Ram",9999));
    customers.push(new Customer(1002,"Ramesh",5999));
    customers.push(new Customer(1003,"Mike",7999));
    customers.push(new Customer(1004,"Tim",6999));
    return customers;
  }
}
