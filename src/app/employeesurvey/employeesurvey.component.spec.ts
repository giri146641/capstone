import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesurveyComponent } from './employeesurvey.component';

describe('EmployeesurveyComponent', () => {
  let component: EmployeesurveyComponent;
  let fixture: ComponentFixture<EmployeesurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
