import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gbv } from './gbv';

describe('Gbv', () => {
  let component: Gbv;
  let fixture: ComponentFixture<Gbv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gbv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gbv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
