import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateanddeleteemployeedetailsComponent } from './updateanddeleteemployeedetails.component';

describe('UpdateanddeleteemployeedetailsComponent', () => {
  let component: UpdateanddeleteemployeedetailsComponent;
  let fixture: ComponentFixture<UpdateanddeleteemployeedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateanddeleteemployeedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateanddeleteemployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
