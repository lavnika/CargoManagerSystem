import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchforaddressComponent } from './searchforaddress.component';

describe('SearchforaddressComponent', () => {
  let component: SearchforaddressComponent;
  let fixture: ComponentFixture<SearchforaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchforaddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchforaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
