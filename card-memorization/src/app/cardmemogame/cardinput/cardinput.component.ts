import { Component, Input } from '@angular/core';

@Component({
  selector: 'cardinput',
  templateUrl: './cardinput.component.html',
  styleUrls: ['./cardinput.component.scss']
})
export class CardinputComponent {
  @Input() cards : string[] = [];
  suits : string[] = ["spades", "hearts", "diamonds", "clubs"];
  values : string[] = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  onClick(suit: string, value: string): void{
    this.cards.push(this.createCardName(suit, value));
  }

  createCardName(suit: string, value: string): string{
    return value + "_of_" + suit;
  }
}
