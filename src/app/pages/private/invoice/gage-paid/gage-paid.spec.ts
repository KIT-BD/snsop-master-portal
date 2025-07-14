import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GagePaid } from './gage-paid';

describe('GagePaid', () => {
  let component: GagePaid;
  let fixture: ComponentFixture<GagePaid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GagePaid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GagePaid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
