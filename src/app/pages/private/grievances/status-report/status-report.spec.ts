import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusReport } from './status-report';

describe('StatusReport', () => {
  let component: StatusReport;
  let fixture: ComponentFixture<StatusReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
