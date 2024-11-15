import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargolayoutComponent } from './cargolayout.component';

describe('CargolayoutComponent', () => {
  let component: CargolayoutComponent;
  let fixture: ComponentFixture<CargolayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CargolayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CargolayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
