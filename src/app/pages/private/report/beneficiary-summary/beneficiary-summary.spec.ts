import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarySummary } from './beneficiary-summary';

describe('BeneficiarySummary', () => {
  let component: BeneficiarySummary;
  let fixture: ComponentFixture<BeneficiarySummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiarySummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiarySummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
