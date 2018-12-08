import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  id:number;
  n:string;
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(paramsObj=>{
      this.id = paramsObj['id'];
      this.n = paramsObj['name'];

    })

  }

}
