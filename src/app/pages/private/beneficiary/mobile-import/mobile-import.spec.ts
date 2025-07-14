import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileImport } from './mobile-import';

describe('MobileImport', () => {
  let component: MobileImport;
  let fixture: ComponentFixture<MobileImport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileImport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileImport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
