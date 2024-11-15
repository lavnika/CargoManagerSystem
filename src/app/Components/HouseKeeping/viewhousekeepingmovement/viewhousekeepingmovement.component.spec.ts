import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhousekeepingmovementComponent } from './viewhousekeepingmovement.component';

describe('ViewhousekeepingmovementComponent', () => {
  let component: ViewhousekeepingmovementComponent;
  let fixture: ComponentFixture<ViewhousekeepingmovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewhousekeepingmovementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewhousekeepingmovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
