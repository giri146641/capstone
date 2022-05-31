import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question8SummaryComponent } from './question8-summary.component';

describe('Question8SummaryComponent', () => {
  let component: Question8SummaryComponent;
  let fixture: ComponentFixture<Question8SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question8SummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question8SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
