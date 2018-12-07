import {Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
  selector:'tic-button',
  templateUrl:'ticbutton.component.html',
  styleUrls:['ticbutton.component.css']
})
export class TicTacToeComponent{
    message:string;
    @Input()
    xorzero:boolean;

    @Output()
    updateXorZero = new EventEmitter<boolean>();

    constructor(){
      this.message = "";
    }

    printXorZero(event):void{
      if(!this.message.trim()){
        if(this.xorzero){
          this.message="X";
        }
        else{
          this.message = "0";
        }
        this.xorzero = !this.xorzero;
        console.log("inside button click xorzero "+this.xorzero);
        this.updateXorZero.emit(this.xorzero);
    }
    }

}
