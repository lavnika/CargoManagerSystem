import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargofarelayoutComponent } from './cargofarelayout.component';

describe('CargofarelayoutComponent', () => {
  let component: CargofarelayoutComponent;
  let fixture: ComponentFixture<CargofarelayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CargofarelayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CargofarelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
