import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeportalComponent } from './employeeportal.component';

describe('EmployeeportalComponent', () => {
  let component: EmployeeportalComponent;
  let fixture: ComponentFixture<EmployeeportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
