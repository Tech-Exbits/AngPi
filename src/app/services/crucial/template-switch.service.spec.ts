import { TestBed } from '@angular/core/testing';

import { TemplateSwitchService } from './template-switch.service';

describe('TemplateSwitchService', () => {
  let service: TemplateSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
