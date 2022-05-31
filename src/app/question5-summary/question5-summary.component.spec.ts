import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question5SummaryComponent } from './question5-summary.component';

describe('Question5SummaryComponent', () => {
  let component: Question5SummaryComponent;
  let fixture: ComponentFixture<Question5SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question5SummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question5SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
