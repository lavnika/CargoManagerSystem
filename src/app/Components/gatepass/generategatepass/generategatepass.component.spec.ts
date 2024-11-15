import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerategatepassComponent } from './generategatepass.component';

describe('GenerategatepassComponent', () => {
  let component: GenerategatepassComponent;
  let fixture: ComponentFixture<GenerategatepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerategatepassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerategatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
