import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarktruckexitComponent } from './marktruckexit.component';

describe('MarktruckexitComponent', () => {
  let component: MarktruckexitComponent;
  let fixture: ComponentFixture<MarktruckexitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarktruckexitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarktruckexitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
