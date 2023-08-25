import { Component, Input } from '@angular/core';
import cardSuits from "../../../assets/cards.json"
import { Card } from '../Card';

@Component({
  selector: 'cardinput',
  templateUrl: './cardinput.component.html',
  styleUrls: ['./cardinput.component.scss']
})
export class CardinputComponent {
  @Input() cards : Card[] = [];
  suits = cardSuits.suits;
  values = cardSuits.values;
  
  onClick(suit: string, value: string): void{
    this.cards.push(new Card(this.createCardName(suit, value)));
  }

  createCardName(suit: string, value: string): string{
    return value + "_of_" + suit;
  }

  getCardNameFromId(id: number): string{
    const suitId = Math.floor(id/13);
    const valueId = id%13;
    return this.createCardName(cardSuits.suits[suitId].name, cardSuits.values[valueId].name);
  }

}
