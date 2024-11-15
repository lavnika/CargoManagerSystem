import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateplaceandpriceComponent } from './updateplaceandprice.component';

describe('UpdateplaceandpriceComponent', () => {
  let component: UpdateplaceandpriceComponent;
  let fixture: ComponentFixture<UpdateplaceandpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateplaceandpriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateplaceandpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
