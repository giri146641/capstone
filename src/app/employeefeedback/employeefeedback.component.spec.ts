import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeefeedbackComponent } from './employeefeedback.component';

describe('EmployeefeedbackComponent', () => {
  let component: EmployeefeedbackComponent;
  let fixture: ComponentFixture<EmployeefeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeefeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeefeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
