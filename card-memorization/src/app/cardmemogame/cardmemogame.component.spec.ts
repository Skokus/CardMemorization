import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmemogameComponent } from './cardmemogame.component';

describe('CardmemogameComponent', () => {
  let component: CardmemogameComponent;
  let fixture: ComponentFixture<CardmemogameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardmemogameComponent]
    });
    fixture = TestBed.createComponent(CardmemogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
