import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyIndicators } from './key-indicators';

describe('KeyIndicators', () => {
  let component: KeyIndicators;
  let fixture: ComponentFixture<KeyIndicators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyIndicators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyIndicators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
