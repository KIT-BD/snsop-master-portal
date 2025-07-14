import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonGbvDashboard } from './non-gbv-dashboard';

describe('NonGbvDashboard', () => {
  let component: NonGbvDashboard;
  let fixture: ComponentFixture<NonGbvDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonGbvDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonGbvDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
