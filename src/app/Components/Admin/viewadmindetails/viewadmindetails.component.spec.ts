import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadmindetailsComponent } from './viewadmindetails.component';

describe('ViewadmindetailsComponent', () => {
  let component: ViewadmindetailsComponent;
  let fixture: ComponentFixture<ViewadmindetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewadmindetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewadmindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
