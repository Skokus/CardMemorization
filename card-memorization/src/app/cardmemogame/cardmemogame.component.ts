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
    this.checkTheSolution();
  }

  onCardNumberSubmit(event: any) {
    event.preventDefault();
    this.actualOrder = this.generateCardOrder(event.target.cardnumber.value);
  }

  onStartButtonClick(): void{
    this.isOrderShown = !this.isOrderShown;
  }
  
  checkTheSolution(): number{
    let sum = 0;
    let i = 0;
    setInterval(() => {
      if(i == this.actualOrder.length)
        return;
      if(this.cards[i].name != this.actualOrder[i].name){
        this.cards[i].isCorrect = CorrectState.NOTCORRECT;
      } else {
        this.cards[i].isCorrect = CorrectState.CORRECT;
        sum++;
      }
      i++;
    }, 100);
    return sum;
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
