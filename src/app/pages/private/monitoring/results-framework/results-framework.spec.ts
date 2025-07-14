import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsFramework } from './results-framework';

describe('ResultsFramework', () => {
  let component: ResultsFramework;
  let fixture: ComponentFixture<ResultsFramework>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsFramework]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsFramework);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
