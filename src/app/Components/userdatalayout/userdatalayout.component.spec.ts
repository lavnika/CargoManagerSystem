import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdatalayoutComponent } from './userdatalayout.component';

describe('UserdatalayoutComponent', () => {
  let component: UserdatalayoutComponent;
  let fixture: ComponentFixture<UserdatalayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserdatalayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserdatalayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
