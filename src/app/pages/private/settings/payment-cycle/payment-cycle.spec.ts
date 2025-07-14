import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCycle } from './payment-cycle';

describe('PaymentCycle', () => {
  let component: PaymentCycle;
  let fixture: ComponentFixture<PaymentCycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentCycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentCycle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
