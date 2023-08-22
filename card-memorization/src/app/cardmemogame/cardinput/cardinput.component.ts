import { Component, Input } from '@angular/core';
import cardSuits from "../../../assets/cards.json"

@Component({
  selector: 'cardinput',
  templateUrl: './cardinput.component.html',
  styleUrls: ['./cardinput.component.scss']
})
export class CardinputComponent {
  @Input() cards : string[] = [];
  suits = cardSuits.suits;
  values = cardSuits.values;
  
  onClick(suit: string, value: string): void{
    this.cards.push(this.createCardName(suit, value));
  }

  createCardName(suit: string, value: string): string{
    return value + "_of_" + suit;
  }
}
