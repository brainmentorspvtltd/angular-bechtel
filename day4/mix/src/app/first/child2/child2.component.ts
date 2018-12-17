import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  regForm:FormGroup;
  selectedCountry:string= null;
  countries:string[]= [];

  ngOnInit() {
    this.regForm = new FormGroup({
          'personal':new FormGroup({
            'username':new FormControl(null,Validators.required)
          }),
         'email': new FormControl(null,[Validators.required,Validators.email]) //,
         //'username':new FormControl(null,Validators.required)
         ,'country':new FormControl(null,[Validators.required]),
         'exp':new FormArray([])//,
         //'mygroup':new FormArray([])
    });
  }

  loadCountries():void{
    this.countries.push("India");
    this.countries.push("SriLanka");
    this.countries.push("China");
    this.countries.push("Bangladesh");
  }
  constructor() {
    this.loadCountries();
   }
  add(){
    let control = new FormControl(null,Validators.required);
  (<FormArray>this.regForm.get('exp')).push(control);
  }
  save(){
    console.log("Save ",this.regForm);
  }



}
