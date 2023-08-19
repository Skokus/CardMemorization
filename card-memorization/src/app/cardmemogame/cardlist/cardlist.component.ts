import { Component, Input } from '@angular/core';

@Component({
  selector: 'cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent {
  @Input() cards : string[] = [];
}
