import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileWalletPayroll } from './mobile-wallet-payroll';

describe('MobileWalletPayroll', () => {
  let component: MobileWalletPayroll;
  let fixture: ComponentFixture<MobileWalletPayroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileWalletPayroll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileWalletPayroll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
