import { Component,EventEmitter, Output } from "@angular/core";


@Component({
  selector:'app-search',
  templateUrl:'./search.component.html',
  styleUrls:['./search.component.css']
})
export class SearchComponent{
  @Output()
  takeInput:EventEmitter<number> = new EventEmitter<number>();
  localSearch(event):void{
    let myValue:number = parseInt(event.target.value);
    console.log("My Value is ",myValue, " ",this.takeInput);
    this.takeInput.emit(myValue);
  }
}
