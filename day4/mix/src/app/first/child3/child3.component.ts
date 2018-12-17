import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  myform:FormGroup;
  constructor() { }

  ngOnInit() {
    this.myform= new FormGroup({
      "name":new FormControl(null, [Validators.required,Validators.pattern('[a-z]{3,10}')]),
      "myformgroup":new FormArray([])
    });
  }
  removeGroup(currentIndex:number):void{
    (<FormArray>this.myform.get('myformgroup')).removeAt(currentIndex);
  }
  addGroup(){
    (<FormArray>this.myform.get('myformgroup')).push(this.buildAFormGroup());
    console.log("Group ::: ",(<FormArray>this.myform.get('myformgroup')));
  }
  buildAFormGroup(){
    return new FormGroup({
      'city':new FormControl(null, Validators.required),
      'country':new FormControl(null, [Validators.required, Validators.pattern('[a-z]{3,15}')])
    });
  }

}
