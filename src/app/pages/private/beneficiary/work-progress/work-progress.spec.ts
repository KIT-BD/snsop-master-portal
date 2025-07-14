import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProgress } from './work-progress';

describe('WorkProgress', () => {
  let component: WorkProgress;
  let fixture: ComponentFixture<WorkProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkProgress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
