import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdetailslayoutComponent } from './orderdetailslayout.component';

describe('OrderdetailslayoutComponent', () => {
  let component: OrderdetailslayoutComponent;
  let fixture: ComponentFixture<OrderdetailslayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderdetailslayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderdetailslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
