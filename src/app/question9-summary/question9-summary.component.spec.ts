import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question9SummaryComponent } from './question9-summary.component';

describe('Question9SummaryComponent', () => {
  let component: Question9SummaryComponent;
  let fixture: ComponentFixture<Question9SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question9SummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question9SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
