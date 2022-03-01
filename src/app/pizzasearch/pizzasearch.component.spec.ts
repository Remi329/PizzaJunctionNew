import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasearchComponent } from './pizzasearch.component';

describe('PizzasearchComponent', () => {
  let component: PizzasearchComponent;
  let fixture: ComponentFixture<PizzasearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzasearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
