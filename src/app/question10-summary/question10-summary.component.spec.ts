import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question10SummaryComponent } from './question10-summary.component';

describe('Question10SummaryComponent', () => {
  let component: Question10SummaryComponent;
  let fixture: ComponentFixture<Question10SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question10SummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question10SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
