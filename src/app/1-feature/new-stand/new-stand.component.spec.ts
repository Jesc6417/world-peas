import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStandComponent } from './new-stand.component';

describe('NewStandComponent', () => {
  let component: NewStandComponent;
  let fixture: ComponentFixture<NewStandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewStandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
