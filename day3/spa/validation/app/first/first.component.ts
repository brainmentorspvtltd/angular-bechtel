import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FirstComponent implements OnInit {
  id:number;
  n:string;
  sal:number;
  constructor(private routeObj:ActivatedRoute) { }

  ngOnInit() {
    this.routeObj.params.subscribe(paramsObj=>{
      this.id = paramsObj['id'];
      this.n = paramsObj['name'];
      this.sal = paramsObj['sal'];
    })
  }

}
