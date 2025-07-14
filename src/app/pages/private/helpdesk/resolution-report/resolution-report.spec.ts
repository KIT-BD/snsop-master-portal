import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionReport } from './resolution-report';

describe('ResolutionReport', () => {
  let component: ResolutionReport;
  let fixture: ComponentFixture<ResolutionReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolutionReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolutionReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
