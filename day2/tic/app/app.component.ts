import { Component,ViewChildren,QueryList } from '@angular/core';
import {TicTacToeComponent} from './ticgame/ticbutton.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="TicTacToe-Example"
  isXorZero:boolean=true;
  gameOverMessage:string = "";

  // Get all the child components
  @ViewChildren(TicTacToeComponent) buttonList: QueryList<TicTacToeComponent>;
  updateXorZeroFlag(xorZeroFlag:boolean):void{
    //console.log("Button List is ",this.buttonList);
    this.gameOver();
    console.log("Method Emitted ",xorZeroFlag);
    this.isXorZero = xorZeroFlag;

  }
  isRowBlank(...buttonRow):boolean{
    console.log("Row Blank Check ",buttonRow);
    for(let button of buttonRow){
      if(!button.message.trim()){
        return true;
      }
    }
    return false;
  }
  gameOver(){
    var buttons = this.buttonList.toArray();
    //console.log("GAME OVER ",this.buttonList.toArray()[0]);
  if(!this.isRowBlank(buttons[0],buttons[1],buttons[2])){
   if(buttons[0].message == buttons[1].message && buttons[0].message == buttons[2].message){
      this.gameOverMessage = "Game Over";
   }
  }
  if(!this.isRowBlank(buttons[0],buttons[3],buttons[6])){
    if(buttons[0].message == buttons[3].message && buttons[0].message == buttons[6].message){
      this.gameOverMessage = "Game Over";
   }
  }

}
}
