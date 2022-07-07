import { TestBed } from '@angular/core/testing';

import { DomainAccessService } from './domain-access.service';

describe('DomainAccessService', () => {
  let service: DomainAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
