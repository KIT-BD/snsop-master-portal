import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPayroll } from './sub-payroll';

describe('SubPayroll', () => {
  let component: SubPayroll;
  let fixture: ComponentFixture<SubPayroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubPayroll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubPayroll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
