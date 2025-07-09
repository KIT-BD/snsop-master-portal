import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryRegistration } from './beneficiary-registration';

describe('BeneficiaryRegistration', () => {
  let component: BeneficiaryRegistration;
  let fixture: ComponentFixture<BeneficiaryRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiaryRegistration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiaryRegistration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
