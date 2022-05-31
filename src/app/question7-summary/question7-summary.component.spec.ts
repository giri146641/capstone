import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question7SummaryComponent } from './question7-summary.component';

describe('Question7SummaryComponent', () => {
  let component: Question7SummaryComponent;
  let fixture: ComponentFixture<Question7SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question7SummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question7SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
