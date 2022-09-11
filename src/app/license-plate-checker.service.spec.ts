import { TestBed } from '@angular/core/testing';

import { LicensePlateCheckerService } from './license-plate-checker.service';

describe('LicensePlateCheckerService', () => {
  let service: LicensePlateCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicensePlateCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
