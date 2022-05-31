import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2SummaryComponent } from './question2-summary.component';

describe('Question2SummaryComponent', () => {
  let component: Question2SummaryComponent;
  let fixture: ComponentFixture<Question2SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question2SummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
