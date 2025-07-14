import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipwExport } from './lipw-export';

describe('LipwExport', () => {
  let component: LipwExport;
  let fixture: ComponentFixture<LipwExport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LipwExport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LipwExport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
