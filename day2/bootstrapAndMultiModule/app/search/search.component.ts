import { Component,EventEmitter, Output } from "@angular/core";


@Component({
  selector:'app-search',
  templateUrl:'./search.component.html',
  styleUrls:['./search.component.css']
})
export class SearchComponent{
  myValue:number;
  @Output()
  takeInput:EventEmitter<number> = new EventEmitter<number>();
  find(){
    this.takeInput.emit(this.myValue);
  }
  localSearch(event):void{
     this.myValue = parseInt(event.target.value);
    console.log("My Value is ",this.myValue, " ",this.takeInput);

  }
}
