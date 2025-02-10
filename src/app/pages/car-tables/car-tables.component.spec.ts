import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTablesComponent } from './car-tables.component';

describe('CarTablesComponent', () => {
  let component: CarTablesComponent;
  let fixture: ComponentFixture<CarTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
