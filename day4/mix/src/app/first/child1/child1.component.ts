import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormArray, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
   addressArray:FormArray;
   myGroup:FormGroup;
  constructor(private loginFormBuilder:FormBuilder) { }

  ngOnInit() {
    this.myGroup = this.loginFormBuilder.group({

      'address':this.loginFormBuilder.array([])
    });
  }
  save():void{
    console.log('Save ::::  ',this.myGroup);
  }
  addAddress(){
    this.addressArray = this.myGroup.get('address') as FormArray;
    console.log('Add Address ',this.addressArray);
    this.addressArray.push(this.createAddress());
  }
  createAddress():FormGroup{
  return this.loginFormBuilder.group({
    'city':new FormControl(null,Validators.required),
    'country':new FormControl(null, [Validators.required, Validators.pattern('[a-z]{3,15}')])
  });
  }

}
