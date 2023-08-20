import { Component, Input } from '@angular/core';

@Component({
  selector: 'cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent {
  @Input() cards : string[] = [];

  getCardPath(name: string): string{
    return "../../assets/Playing Cards/PNG-cards-1.3/" + name + ".png";
  }
}
