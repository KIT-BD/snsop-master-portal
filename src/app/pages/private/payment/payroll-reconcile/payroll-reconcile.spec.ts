import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollReconcile } from './payroll-reconcile';

describe('PayrollReconcile', () => {
  let component: PayrollReconcile;
  let fixture: ComponentFixture<PayrollReconcile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollReconcile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollReconcile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
