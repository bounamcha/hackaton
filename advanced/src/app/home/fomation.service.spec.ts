import { TestBed } from '@angular/core/testing';

import { FomationService } from './fomation.service';

describe('FomationService', () => {
  let service: FomationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FomationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
