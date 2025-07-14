import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclewisePrint } from './cyclewise-print';

describe('CyclewisePrint', () => {
  let component: CyclewisePrint;
  let fixture: ComponentFixture<CyclewisePrint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyclewisePrint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyclewisePrint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
