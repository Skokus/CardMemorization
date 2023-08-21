import { Component } from '@angular/core';

@Component({
  selector: 'cardmemogame',
  templateUrl: './cardmemogame.component.html',
  styleUrls: ['./cardmemogame.component.scss']
})
export class CardmemogameComponent {
  cards = [];
  actualOrder : string[] = [];
  isOrderShown = true;

  suits = [
    { name: 'hearts', symbol: '\u2665' },
    { name: 'clubs', symbol: '\u2663' },
    { name: 'diamonds', symbol: '\u2666' },
    { name: 'spades', symbol: '\u2660' }
  ];
  values = [
    { name: "ace", shortname: "A" },
    { name: "2", shortname: "2" },
    { name: "3", shortname: "3" },
    { name: "4", shortname: "4" },
    { name: "5", shortname: "5" },
    { name: "6", shortname: "6" },
    { name: "7", shortname: "7" },
    { name: "8", shortname: "8" },
    { name: "9", shortname: "9" },
    { name: "10", shortname: "10" },
    { name: "jack", shortname: "J" },
    { name: "queen", shortname: "Q" },
    { name: "king", shortname: "K" }
  ];

  ngOnInit() {
    this.actualOrder = this.generateCardOrder(5);
  }

  onCheckButtonClick(): void{
    console.log(this.checkTheSolution());
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
    for(let i = 0; i < this.suits.length; i++){
      for(let j = 0; j < this.values.length; j++){
        allCards.push(this.values[j].name + "_of_" + this.suits[i].name);
      }
    }
    console.log(allCards);
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
