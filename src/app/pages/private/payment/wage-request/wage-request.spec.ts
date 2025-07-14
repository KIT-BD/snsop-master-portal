import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WageRequest } from './wage-request';

describe('WageRequest', () => {
  let component: WageRequest;
  let fixture: ComponentFixture<WageRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WageRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WageRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
