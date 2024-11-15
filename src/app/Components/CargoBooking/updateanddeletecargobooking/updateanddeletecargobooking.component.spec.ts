import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateanddeletecargobookingComponent } from './updateanddeletecargobooking.component';

describe('UpdateanddeletecargobookingComponent', () => {
  let component: UpdateanddeletecargobookingComponent;
  let fixture: ComponentFixture<UpdateanddeletecargobookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateanddeletecargobookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateanddeletecargobookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
