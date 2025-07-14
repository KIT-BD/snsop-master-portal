import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adjudication } from './adjudication';

describe('Adjudication', () => {
  let component: Adjudication;
  let fixture: ComponentFixture<Adjudication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adjudication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adjudication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
