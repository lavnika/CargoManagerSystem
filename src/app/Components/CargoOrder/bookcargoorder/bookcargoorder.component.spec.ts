import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcargoorderComponent } from './bookcargoorder.component';

describe('BookcargoorderComponent', () => {
  let component: BookcargoorderComponent;
  let fixture: ComponentFixture<BookcargoorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookcargoorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookcargoorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
