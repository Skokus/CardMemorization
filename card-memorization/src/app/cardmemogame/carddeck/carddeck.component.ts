import { Component, Input } from '@angular/core';
import { Card } from '../Card';

@Component({
  selector: 'carddeck',
  templateUrl: './carddeck.component.html',
  styleUrls: ['./carddeck.component.scss']
})
export class CarddeckComponent {
  @Input() cards : Card[] = [];
  n : number = 0;

  onNextButtonClicked(){

  }

  getCardPath(name: string): string{
    return "../../assets/Playing Cards/PNG-cards-1.3/" + name + ".png";
  }
}
