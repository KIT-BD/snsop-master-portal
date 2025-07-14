import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resolution } from './resolution';

describe('Resolution', () => {
  let component: Resolution;
  let fixture: ComponentFixture<Resolution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resolution]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resolution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
