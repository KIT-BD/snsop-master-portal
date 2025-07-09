import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryJobCard } from './beneficiary-job-card';

describe('BeneficiaryJobCard', () => {
  let component: BeneficiaryJobCard;
  let fixture: ComponentFixture<BeneficiaryJobCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiaryJobCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiaryJobCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
