import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecargofareComponent } from './updatecargofare.component';

describe('UpdatecargofareComponent', () => {
  let component: UpdatecargofareComponent;
  let fixture: ComponentFixture<UpdatecargofareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatecargofareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatecargofareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
