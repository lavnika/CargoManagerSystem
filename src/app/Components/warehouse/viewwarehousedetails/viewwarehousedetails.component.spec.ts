import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwarehousedetailsComponent } from './viewwarehousedetails.component';

describe('ViewwarehousedetailsComponent', () => {
  let component: ViewwarehousedetailsComponent;
  let fixture: ComponentFixture<ViewwarehousedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewwarehousedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewwarehousedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
