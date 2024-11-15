import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachforcargooderandupdateComponent } from './serachforcargooderandupdate.component';

describe('SerachforcargooderandupdateComponent', () => {
  let component: SerachforcargooderandupdateComponent;
  let fixture: ComponentFixture<SerachforcargooderandupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerachforcargooderandupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerachforcargooderandupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
