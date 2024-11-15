import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingcargoorderComponent } from './bookingcargoorder.component';

describe('BookingcargoorderComponent', () => {
  let component: BookingcargoorderComponent;
  let fixture: ComponentFixture<BookingcargoorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingcargoorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingcargoorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
