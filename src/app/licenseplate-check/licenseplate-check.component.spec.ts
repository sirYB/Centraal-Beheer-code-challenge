import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseplateCheckComponent } from './licenseplate-check.component';

describe('LicenseplateCheckComponent', () => {
  let component: LicenseplateCheckComponent;
  let fixture: ComponentFixture<LicenseplateCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseplateCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseplateCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
