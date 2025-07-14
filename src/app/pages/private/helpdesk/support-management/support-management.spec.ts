import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportManagement } from './support-management';

describe('SupportManagement', () => {
  let component: SupportManagement;
  let fixture: ComponentFixture<SupportManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
