import { TestBed } from '@angular/core/testing';

import { FasterThanLightService } from './faster-than-light.service';

describe('FasterThanLightService', () => {
  let service: FasterThanLightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FasterThanLightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
