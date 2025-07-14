import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonGbv } from './non-gbv';

describe('NonGbv', () => {
  let component: NonGbv;
  let fixture: ComponentFixture<NonGbv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonGbv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonGbv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
