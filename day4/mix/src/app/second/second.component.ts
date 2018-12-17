import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  countries:string[]= [];
  selectedCountry:string=null;
  save(form:ElementRef){
    console.log("Submit called ",form);
  }
  constructor() { this.loadCountries();}

  loadCountries():void{
    this.countries.push("India");
    this.countries.push("SriLanka");
    this.countries.push("China");
    this.countries.push("Bangladesh");
  }
  ngOnInit() {
  }

}
