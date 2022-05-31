import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3SummaryComponent } from './question3-summary.component';

describe('Question3SummaryComponent', () => {
  let component: Question3SummaryComponent;
  let fixture: ComponentFixture<Question3SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question3SummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
