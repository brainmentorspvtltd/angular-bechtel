import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mix';
  flag:boolean=false;
  names:string[] = ['ram','shyam'];
  constructor(private router:Router){

  }
  gotoFirst(){
    this.router.navigate(['/first/1002/Mike/8888']);
  }
}
