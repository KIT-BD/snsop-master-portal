import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbvDashboard } from './gbv-dashboard';

describe('GbvDashboard', () => {
  let component: GbvDashboard;
  let fixture: ComponentFixture<GbvDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GbvDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GbvDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
