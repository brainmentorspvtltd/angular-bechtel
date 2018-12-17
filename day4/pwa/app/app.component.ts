import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwademo';
  constructor(private serviceWorkerUpdate:SwUpdate){
  
  }
  ngOnInit(){
   if(this.serviceWorkerUpdate.isEnabled){ 
  this.serviceWorkerUpdate.available.subscribe(()=>{
    if(confirm("New Version is Avaliable")){
      window.location.reload();
    }
  });
   }  
}
}
