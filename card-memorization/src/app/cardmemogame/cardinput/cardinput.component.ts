import { Component, Input } from '@angular/core';

@Component({
  selector: 'cardinput',
  templateUrl: './cardinput.component.html',
  styleUrls: ['./cardinput.component.scss']
})
export class CardinputComponent {
  @Input() cards : number[] = [];

  onClick(): void{
    this.cards.push(4);
  }
}
