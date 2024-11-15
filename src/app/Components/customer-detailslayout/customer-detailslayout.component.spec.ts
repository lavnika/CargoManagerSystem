import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailslayoutComponent } from './customer-detailslayout.component';

describe('CustomerDetailslayoutComponent', () => {
  let component: CustomerDetailslayoutComponent;
  let fixture: ComponentFixture<CustomerDetailslayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerDetailslayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerDetailslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
