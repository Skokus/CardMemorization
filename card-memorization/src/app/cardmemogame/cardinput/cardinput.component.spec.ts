import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinputComponent } from './cardinput.component';

describe('CardinputComponent', () => {
  let component: CardinputComponent;
  let fixture: ComponentFixture<CardinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardinputComponent]
    });
    fixture = TestBed.createComponent(CardinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
