import { Component, Input } from '@angular/core';

@Component({
  selector: 'cardinput',
  templateUrl: './cardinput.component.html',
  styleUrls: ['./cardinput.component.scss']
})
export class CardinputComponent {
  @Input() cards : string[] = [];
  suits = [
    { name: 'hearts', symbol: '\u2665' },
    { name: 'clubs', symbol: '\u2663' },
    { name: 'diamonds', symbol: '\u2666' },
    { name: 'spades', symbol: '\u2660' }
  ];
  values : string[] = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  cardNames = [
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
  onClick(suit: string, value: string): void{
    this.cards.push(this.createCardName(suit, value));
  }

  createCardName(suit: string, value: string): string{
    return value + "_of_" + suit;
  }
}
