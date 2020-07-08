import { TestBed } from '@angular/core/testing';

import { LabelUpdateService } from './label-update.service';

describe('LabelUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LabelUpdateService = TestBed.get(LabelUpdateService);
    expect(service).toBeTruthy();
  });
});
