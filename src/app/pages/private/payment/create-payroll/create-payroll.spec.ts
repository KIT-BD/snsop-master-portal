import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayroll } from './create-payroll';

describe('CreatePayroll', () => {
  let component: CreatePayroll;
  let fixture: ComponentFixture<CreatePayroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePayroll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePayroll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
