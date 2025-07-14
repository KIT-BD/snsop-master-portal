import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryPayroll } from './supplementary-payroll';

describe('SupplementaryPayroll', () => {
  let component: SupplementaryPayroll;
  let fixture: ComponentFixture<SupplementaryPayroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplementaryPayroll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplementaryPayroll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
