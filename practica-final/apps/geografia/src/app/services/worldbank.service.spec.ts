import { TestBed } from '@angular/core/testing';

import { WorldbankService } from './worldbank.service';

describe('WorldbankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldbankService = TestBed.get(WorldbankService);
    expect(service).toBeTruthy();
  });
});
