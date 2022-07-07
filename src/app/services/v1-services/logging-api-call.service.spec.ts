import { TestBed } from '@angular/core/testing';

import { LoggingApiCallService } from './logging-api-call.service';

describe('LoggingApiCallService', () => {
  let service: LoggingApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggingApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
