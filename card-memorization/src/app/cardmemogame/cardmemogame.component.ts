import { Component } from '@angular/core';

@Component({
  selector: 'cardmemogame',
  templateUrl: './cardmemogame.component.html',
  styleUrls: ['./cardmemogame.component.scss']
})
export class CardmemogameComponent {
  cards = [];
  actualOrder=["ace_of_spades", "2_of_diamonds", "3_of_clubs"];

  onCheckButtonClick(): void{
    console.log(this.checkTheSolution());
  }

  checkTheSolution(): boolean{
    for(let i = 0; i < this.actualOrder.length; i++){
      if(this.cards[i] != this.actualOrder[i]){
        return false;
      }
    }
    return true;
  }
}
