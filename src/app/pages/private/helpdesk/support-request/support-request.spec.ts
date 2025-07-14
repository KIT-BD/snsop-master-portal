import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportRequest } from './support-request';

describe('SupportRequest', () => {
  let component: SupportRequest;
  let fixture: ComponentFixture<SupportRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
