import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatecargofareComponent } from './calculatecargofare.component';

describe('CalculatecargofareComponent', () => {
  let component: CalculatecargofareComponent;
  let fixture: ComponentFixture<CalculatecargofareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatecargofareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculatecargofareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
