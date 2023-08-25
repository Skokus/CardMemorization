import { Component } from '@angular/core';
import cardSuits from "../../assets/cards.json"
import { Card, CorrectState } from './Card';

@Component({
  selector: 'cardmemogame',
  templateUrl: './cardmemogame.component.html',
  styleUrls: ['./cardmemogame.component.scss']
})
export class CardmemogameComponent {

  cards : Card[] = [];
  actualOrder : Card[] = [];
  isOrderShown = true;

  ngOnInit() {
    this.actualOrder = this.generateCardOrder(5);
  }

  onCheckButtonClick(): void{
    //TODO
  }

  onCardNumberSubmit(event: any) {
    event.preventDefault();
    this.actualOrder = this.generateCardOrder(event.target.cardnumber.value);
  }

  onStartButtonClick(): void{
    this.isOrderShown = !this.isOrderShown;
  }
  
  checkTheSolution(): boolean{
    for(let i = 0; i < this.actualOrder.length; i++){
      if(this.cards[i].name != this.actualOrder[i].name){
        this.cards[i].isCorrect = CorrectState.notCorrect;
      } else {
        this.cards[i].isCorrect = CorrectState.correct;
      }
    }
    return true;
  }

  generateCardOrder(length: number): Card[]{
    const allCards : string[] = [];
    for(let i = 0; i < cardSuits.suits.length; i++){
      for(let j = 0; j < cardSuits.values.length; j++){
        allCards.push(cardSuits.values[j].name + "_of_" + cardSuits.suits[i].name);
      }
    }
    const r : Card[] = [];
    let i = 0;
    setInterval(() => {
      if(i == length)
        return;
      let n = this.getRandomInt(allCards.length);
      r.push(new Card(allCards[n]));
      allCards.splice(n, 1);
      i++;
    }, 30);
    return r;
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
