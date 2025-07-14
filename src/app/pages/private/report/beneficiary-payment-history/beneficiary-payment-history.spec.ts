import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryPaymentHistory } from './beneficiary-payment-history';

describe('BeneficiaryPaymentHistory', () => {
  let component: BeneficiaryPaymentHistory;
  let fixture: ComponentFixture<BeneficiaryPaymentHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiaryPaymentHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiaryPaymentHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
