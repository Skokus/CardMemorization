import { Component } from '@angular/core';
import cardSuits from "../../assets/cards.json"

@Component({
  selector: 'cardmemogame',
  templateUrl: './cardmemogame.component.html',
  styleUrls: ['./cardmemogame.component.scss']
})
export class CardmemogameComponent {

  cards = [];
  actualOrder : string[] = [];
  isOrderShown = true;

  ngOnInit() {
    this.actualOrder = this.generateCardOrder(5);
  }

  onCheckButtonClick(): void{
    //TODO
  }

  onCardNumberSubmit(event: any) {
    console.log("lma");
    event.preventDefault();
    this.actualOrder = this.generateCardOrder(event.target.cardnumber.value);
  }

  onStartButtonClick(): void{
    this.isOrderShown = !this.isOrderShown;
  }
  
  checkTheSolution(): boolean{
    for(let i = 0; i < this.actualOrder.length; i++){
      if(this.cards[i] != this.actualOrder[i]){
        return false;
      }
    }
    return true;
  }

  generateCardOrder(length: number): string[]{
    const allCards : string[] = [];
    for(let i = 0; i < cardSuits.suits.length; i++){
      for(let j = 0; j < cardSuits.values.length; j++){
        allCards.push(cardSuits.values[j].name + "_of_" + cardSuits.suits[i].name);
      }
    }
    const r : string[] = [];
    for(let i = 0; i < length; i++){
      let n = this.getRandomInt(allCards.length);
      r.push(allCards[n]);
      allCards.splice(n, 1);
    }
    return r;
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
