import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcargobookingdetailsComponent } from './viewcargobookingdetails.component';

describe('ViewcargobookingdetailsComponent', () => {
  let component: ViewcargobookingdetailsComponent;
  let fixture: ComponentFixture<ViewcargobookingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewcargobookingdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewcargobookingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
