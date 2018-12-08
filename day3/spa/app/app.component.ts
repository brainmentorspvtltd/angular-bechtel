import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spademo';
  constructor(private route:Router){

  }
  loadAbout():void{
  this.route.navigate(["/about"]);
  }
}
