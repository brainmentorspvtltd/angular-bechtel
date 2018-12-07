import { Component, OnInit, Input } from '@angular/core';
import {Customer} from '../../customer';
@Component({
  selector: 'app-customerrow',
  templateUrl: './customerrow.component.html',
  styleUrls: ['./customerrow.component.css']
})
export class CustomerrowComponent implements OnInit {
@Input()
cust:Customer;
  constructor() { }

  ngOnInit() {
  }

}
